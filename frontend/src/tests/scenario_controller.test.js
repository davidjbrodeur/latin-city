import { generateScenario } from "../game/scenarioPanel/scenario/scenario_controller";

describe("generateScenario", () => {
  test("returns a random scenario from the pool", () => {
    const scenario = generateScenario();
    expect(scenario).toBeDefined();
  });

  test("returns a scenario with scenario_choices replaced by an array of choice objects", () => {
    const scenario = generateScenario();
    expect(Array.isArray(scenario.scenario_choices)).toBe(true);
    expect(scenario.scenario_choices.length).toBeGreaterThan(0);
    expect(scenario.scenario_choices[0]).toHaveProperty("scenario_choice_id");
    expect(scenario.scenario_choices[0]).toHaveProperty("choice_text");
  });

  test("returns a scenario with scenario_picture replaced by a picture object", () => {
    const scenario = generateScenario();
    expect(scenario).toHaveProperty("scenario_picture");
    expect(scenario.scenario_picture).toHaveProperty("picture_id");
    expect(scenario.scenario_picture).toHaveProperty("picture_url");
  });

  test("returns the same scenario if there is only one scenario in the pool", () => {
    const scenarios = [
      { id: 1, scenario_choices: "1,2", scenario_picture_id: 1 },
    ];
    const choices = [
      { scenario_choice_id: "1", choice_text: "Choice 1" },
      { scenario_choice_id: "2", choice_text: "Choice 2" },
    ];
    const pictures = [{ picture_id: 1, picture_url: "picture.jpg" }];
    const generateScenarioFn = () =>
      generateScenario(scenarios, choices, pictures);

    // Call the function twice to make sure it returns the same scenario
    const scenario1 = generateScenarioFn();
    const scenario2 = generateScenarioFn();
    expect(scenario1).toEqual(scenario2);
  });

  test("throws an error if there are no scenarios in the pool", () => {
    const scenarios = [];
    const choices = [{ scenario_choice_id: "1", choice_text: "Choice 1" }];
    const pictures = [{ picture_id: 1, picture_url: "picture.jpg" }];
    const generateScenarioFn = () =>
      generateScenario(scenarios, choices, pictures);

    expect(generateScenarioFn).toThrow();
  });

  test("throws an error if there are no pictures in the picture sheet", () => {
    const scenarios = [
      { id: 1, scenario_choices: "1", scenario_picture_id: 1 },
    ];
    const choices = [{ scenario_choice_id: "1", choice_text: "Choice 1" }];
    const pictures = [];
    const generateScenarioFn = () =>
      generateScenario(scenarios, choices, pictures);

    expect(generateScenarioFn).toThrow();
  });
});
