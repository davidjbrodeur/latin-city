import React from "react";
import "./Scenario.css";

function Scenario({ scenario = {} }) {
  function handleEffect(index) {
    alert(scenario.scenario_choices[index].scenario_choice_effect_script);
  }
  //console.log(scenario);
  return (
    <div>
      <h2>
        {scenario.scenario_title} ({scenario.scenario_domain})
      </h2>
      <div>
        <img
          src={scenario.scenario_picture?.picture_url}
          alt={scenario.scenario_picture?.picture_alt}
        ></img>
      </div>
      <div>{scenario.scenario_desc}</div>
      <ul className="clickable-elements info-list">
        {scenario?.scenario_choices?.map((choice, index) => (
          <li onClick={() => handleEffect(index)} key={index}>
            <strong>{choice.scenario_choice_title}</strong>:{" "}
            {choice.scenario_choice_desc}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Scenario;
