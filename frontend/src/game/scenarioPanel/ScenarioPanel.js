import React, { useState } from "react";
import "./ScenarioPanel.css";
import Scenario from "./scenario/Scenario";
import { generateScenario } from "./scenario/scenario_controller";

function ScenarioPanel({ onClose }) {
  const [scenario, setScenario] = useState({});
  async function getScenario() {
    const newScenario = await generateScenario();
    setScenario(newScenario);
    console.log(newScenario);
  }

  return (
    <div className="popup-overlay">
      <div className="popup">
        <div>
          <button onClick={getScenario}>Generate a Scenario</button>
        </div>
        {scenario ? <Scenario scenario={scenario} /> : null}
        <div>
          <button onClick={onClose}>Close Scenario Panel</button>
        </div>
      </div>
    </div>
  );
}

export default ScenarioPanel;
