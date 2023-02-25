import scenario_choices from "../../../data/scenario_data/scenario_choice_sheet";
import scenario_sheet from "../../../data/scenario_data/scenario_sheet";
import picture_sheet from "../../../data/scenario_data/picture_sheet";

export const generateScenario = () => {
  const choices = scenario_choices.map((obj) => ({ ...obj })); // deep copy
  const scenarios = scenario_sheet.map((obj) => ({ ...obj })); // deep copy
  const pictures = picture_sheet.map((obj) => ({ ...obj })); // deep copy

  function getRandomScenarioFromPool(scenariosPool) {
    return scenariosPool[Math.floor(Math.random() * scenariosPool.length)];
  }

  function getChoicesForScenarios(scenarios, choices) {
    // Create a lookup object to map choice IDs to choice objects
    const choicesLookup = {};
    choices.forEach(
      (choice) => (choicesLookup[choice.scenario_choice_id] = choice)
    );

    // Modify each scenario object by replacing scenario_choices string with an array of choice objects
    scenarios.forEach((scenario) => {
      const choiceIds = scenario.scenario_choices
        .split(",")
        .map((id) => id.trim());
      const scenarioChoices = choiceIds.map((id) => choicesLookup[id]);
      scenario.scenario_choices = scenarioChoices;
    });

    return scenarios;
  }

  function getPictureForScenarios(scenarios, pictures) {
    // create a map of picture objects by picture_id for easy lookup
    const pictureMap = new Map(
      pictures.map((picture) => [picture.picture_id, picture])
    );

    // map over scenarios and replace the scenario_picture with the corresponding picture object
    const scenariosWithPicture = scenarios.map((scenario) => {
      const picture = pictureMap.get(scenario.scenario_picture_id);
      if (picture) {
        const picture_url =
          process.env.PUBLIC_URL + "/assets/img/" + picture.picture_url;
        return {
          ...scenario,
          scenario_picture: {
            ...picture,
            picture_url,
          },
        };
      } else {
        return scenario;
      }
    });
    return scenariosWithPicture;
  }

  function getScenariosPool(scenarios, choices, pictures) {
    scenarios = getChoicesForScenarios(scenarios, choices);
    scenarios = getPictureForScenarios(scenarios, pictures);
    return scenarios;
  }

  const scenariosPool = getScenariosPool(scenarios, choices, pictures);
  const randomScenario = getRandomScenarioFromPool(scenariosPool);
  console.log(randomScenario);
  return randomScenario;
};
