const { google } = require("googleapis");
const credentials = require("./keyfile.json");
const fs = require("fs");

const sheetID = "1IEprnzx4FGG6-Q11lj_ySwHi6m4gmKiKKr33e32wm3k";

const data_folder = "./src/data/";
const event_data_folder = data_folder + "scenario_data/";

async function createDataFiles(sheetArray, sheets) {
  for (let i = 0; i < sheetArray.length; i++) {
    const response = await sheets.spreadsheets.values.get({
      spreadsheetId: sheetID,
      range: sheetArray[i],
    });
    const data = response.data.values;
    const googleSheetParsedData = parseGoogleSheetsData(data);
    const json = JSON.stringify(googleSheetParsedData);
    fs.writeFileSync(`${event_data_folder}` + `${sheetArray[i]}.json`, json);
  }
}

async function main() {
  const auth = new google.auth.JWT({
    email: credentials.client_email,
    key: credentials.private_key,
    scopes: ["https://www.googleapis.com/auth/spreadsheets.readonly"],
  });
  await auth.authorize();
  const sheets = google.sheets({ version: "v4", auth });
  const rangeArray = [
    "scenario_sheet",
    "scenario_choice_sheet",
    "picture_sheet",
  ];
  createDataFiles(rangeArray, sheets);
}

function parseGoogleSheetsData(data) {
  const headerRow = data[0];
  const rows = data.slice(1);
  const objects = [];

  for (let i = 0; i < rows.length; i++) {
    const obj = {};

    for (let j = 0; j < headerRow.length; j++) {
      obj[headerRow[j]] = rows[i][j];
    }

    objects.push(obj);
  }

  return objects;
}

main().catch(console.error);
