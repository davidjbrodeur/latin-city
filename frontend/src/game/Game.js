import "./Game.css";
import ScenarioPanel from "./scenarioPanel/ScenarioPanel";
import React, { useState } from "react";

function Game(props) {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [imageFolder, setImageFolder] = useState("ratio_2_for_1");
  const [gridTemplate, setGridTemplate] = useState({
    gridColumnTemplate: "16px 8fr 8px",
    gridRowTemplate: "16px 8fr 16px",
  });

  const handleButtonClick = () => {
    setIsPopupOpen(true);
  };

  const handleClosePopup = () => {
    setIsPopupOpen(false);
  };

  const handleButton2for1 = () => {
    setImageFolder("ratio_2_for_1");
    setGridTemplate({
      columns: "32px 8fr 32px",
      rows: "32px 8fr 32px",
    });
  };

  const handleButton3for1 = () => {
    setImageFolder("ratio_3_for_1");
    setGridTemplate({
      columns: "48px 8fr 48px",
      rows: "48px 8fr 48px",
    });
  };

  const handleButton4for1 = () => {
    setImageFolder("ratio_4_for_1");
    setGridTemplate({
      columns: "64px 8fr 64px",
      rows: "64px 8fr 64px",
    });
  };

  const gridContainerStyle = {
    "--grid-template-columns": gridTemplate.columns,
    "--grid-template-rows": gridTemplate.rows,
  };

  const core_background = {
    backgroundImage: `url(${process.env.PUBLIC_URL}/assets/${imageFolder}/mos_center01_16x16.png)`,
  };

  const bottom_background = {
    backgroundImage: `url(${process.env.PUBLIC_URL}/assets/${imageFolder}/mos_frame03_down_16x16.png)`,
  };

  const right_background = {
    backgroundImage: `url(${process.env.PUBLIC_URL}/assets/${imageFolder}/mos_frame03_right_16x16.png)`,
  };

  const left_background = {
    backgroundImage: `url(${process.env.PUBLIC_URL}/assets/${imageFolder}/mos_frame03_left_16x16.png)`,
  };

  const top_background = {
    backgroundImage: `url(${process.env.PUBLIC_URL}/assets/${imageFolder}/mos_frame03_top_16x16.png)`,
  };

  const corner_a_style = {
    backgroundImage: `url(${process.env.PUBLIC_URL}/assets/${imageFolder}/mos_frame03_corner_a_16x16.png)`,
  };

  const corner_b_style = {
    backgroundImage: `url(${process.env.PUBLIC_URL}/assets/${imageFolder}/mos_frame03_corner_b_16x16.png)`,
  };

  const corner_c_style = {
    backgroundImage: `url(${process.env.PUBLIC_URL}/assets/${imageFolder}/mos_frame03_corner_c_16x16.png)`,
  };

  const corner_d_style = {
    backgroundImage: `url(${process.env.PUBLIC_URL}/assets/${imageFolder}/mos_frame03_corner_d_16x16.png)`,
  };

  function clickEffect(e) {
    var d = document.createElement("div");
    d.className = "clickEffect";
    d.style.top = e.clientY + "px";
    d.style.left = e.clientX + "px";
    document.body.appendChild(d);
    d.addEventListener(
      "animationend",
      function () {
        d.parentElement.removeChild(d);
      }.bind(this)
    );
  }
  document.addEventListener("click", clickEffect);

  return (
    <div id="game-section" className="container" hidden={true}>
      <section id="main-top-bar" className="main-top-bar">
        <div>
          <p className="player-info">{props.data.name}</p>
        </div>
        <div>
          <p className="player-info">{props.data.cityName}</p>
        </div>
        <div>
          <ul className="info-list">
            <li>
              <p className="icon">💰: </p>
              <p className="player-info">+{props.data.stats.economic}</p>
            </li>
            <li>
              <p className="icon">⚔️: </p>
              <p className="player-info">+{props.data.stats.military}</p>
            </li>
            <li>
              <p className="icon">☦️: </p>
              <p className="player-info">+{props.data.stats.social}</p>
            </li>
          </ul>
        </div>
        <div>
          <p className="icon">🎖️</p>
          <p className="player-info">{props.data.prestige}</p>
        </div>
        <div>
          <ul className="info-list">
            <li>
              <p className="icon">🛠️: </p>
              <p className="player-info">{props.data.resources.production}</p>
            </li>
            <li>
              <p className="icon">📚: </p>
              <p className="player-info">{props.data.resources.knowledge}</p>
            </li>
            <li>
              <p className="icon">⚖️: </p>
              <p className="player-info">{props.data.resources.order}</p>
            </li>
            <li>
              <p className="icon">🛡️: </p>
              <p className="player-info">{props.data.resources.power}</p>
            </li>
            <li>
              <p className="icon">🤝: </p>
              <p className="player-info">{props.data.resources.cohesion}</p>
            </li>
            <li>
              <p className="icon">🎭: </p>
              <p className="player-info">{props.data.resources.culture}</p>
            </li>
          </ul>
        </div>
      </section>
      <section id="main-right-bar" className="main-right-bar">
        <div>
          <h1>Administrators</h1>
          <ul className="info-list worker-list">
            <li className="worker">
              <img
                src={process.env.PUBLIC_URL + "/assets/img/token_1.png"}
                alt="Token 1"
              ></img>
              <h4>Augustus</h4>
            </li>
            <li className="worker">
              <img
                src={process.env.PUBLIC_URL + "/assets/img/token_2.png"}
                alt="Token 2"
              ></img>
              <h4>Flavia</h4>
            </li>
            <li className="worker">
              <img
                src={process.env.PUBLIC_URL + "/assets/img/token_3.png"}
                alt="Token 3"
              ></img>
              <h4>Gaius</h4>
            </li>
            <li className="worker">
              <img
                src={process.env.PUBLIC_URL + "/assets/img/token_4.png"}
                alt="Token 4"
              ></img>
              <h4>Aurelius</h4>
            </li>
            <li className="worker">
              <img
                src={process.env.PUBLIC_URL + "/assets/img/token_5.png"}
                alt="Token 5"
              ></img>
              <h4>Lucius</h4>
            </li>
            <li className="worker">
              <img
                src={process.env.PUBLIC_URL + "/assets/img/token_6.png"}
                alt="Token 6"
              ></img>
              <h4>Probus</h4>
            </li>
          </ul>
        </div>
      </section>
      <section id="main-bottom-bar" className="main-bottom-bar"></section>
      <section id="main-left-bar" className="main-left-bar">
        <div>
          <h1>Clients & Patrons</h1>
          <ul>
            <li>
              <img
                src={
                  process.env.PUBLIC_URL + "/assets/img/constantine_token.png"
                }
                alt="constantine"
              ></img>
              <h4>Emperor Constantine</h4>
            </li>
            <li className="worker">
              <img
                src={process.env.PUBLIC_URL + "/assets/img/token_7.png"}
                alt=""
              ></img>
              <h4>Assistant</h4>
            </li>
            <li className="worker">
              <img
                src={process.env.PUBLIC_URL + "/assets/img/token_8.png"}
                alt=""
              ></img>
              <h4>Family Leader</h4>
            </li>
            <li className="worker">
              <img
                src={process.env.PUBLIC_URL + "/assets/img/token_9.png"}
                alt=""
              ></img>
              <h4>Family Leader</h4>
            </li>
          </ul>
        </div>
      </section>
      <section id="main-center" className="main-center">
        <h3>Aspect Ratio UI Panel Test (now = `{imageFolder}`)</h3>
        <div class="grid-container" style={gridContainerStyle}>
          <div class="corner-a" style={corner_a_style}></div>
          <div class="top" style={top_background}></div>
          <div class="corner-b" style={corner_b_style}></div>
          <div class="left" style={left_background}></div>
          <div class="core" style={core_background}>
            <div>
              <img
                src={
                  process.env.PUBLIC_URL +
                  `assets/${imageFolder}/building01_80x80.png`
                }
                alt="Building"
              />
              <img
                src={
                  process.env.PUBLIC_URL +
                  `assets/${imageFolder}/portrait_man01_40x40.png`
                }
                alt="Portrait"
              />
            </div>
            <ul>
              <li>
                <button onClick={handleButton2for1} id="two-for-one">
                  2 for 1
                </button>
              </li>
              <li>
                <button onClick={handleButton3for1} id="three-for-one">
                  3 for 1
                </button>
              </li>
              <li>
                <button onClick={handleButton4for1} id="four-for-one">
                  4 for 1
                </button>
              </li>
            </ul>
          </div>
          <div class="right" style={right_background}></div>
          <div class="corner-d" style={corner_d_style}></div>
          <div class="bottom" style={bottom_background}></div>
          <div class="corner-c" style={corner_c_style}></div>
        </div>
        <button onClick={handleButtonClick}>Scenario Panel</button>
        {isPopupOpen && <ScenarioPanel onClose={handleClosePopup} />}
      </section>
    </div>
  );
}

export default Game;
