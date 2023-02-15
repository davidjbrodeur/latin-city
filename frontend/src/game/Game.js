import "./Game.css";
import Event from './event/Event.js';
import React, { useState } from 'react';

function Game(props) {

  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const handleButtonClick = () => {
    setIsPopupOpen(true);
    document.getElementById("city-picture").style.display = 'none';
  };

  const handleClosePopup = () => {
    setIsPopupOpen(false);
    document.getElementById("city-picture").style.display = 'block';
  };

  return (
    <div id="game-section" class="container" hidden={true}>
      <section id="main-top-bar" class="main-top-bar">
        <div>
          <p class="player-info">{props.data.name}</p>
        </div>
        <div>
          <p class="player-info">{props.data.cityName}</p>
        </div>
        <div>
          <ul class="info-list">
            <li>
              <p class="icon">💰: </p>
              <p class="player-info">+{props.data.stats.economic}</p>
            </li>
            <li>
              <p class="icon">⚔️: </p>
              <p class="player-info">+{props.data.stats.military}</p>
            </li>
            <li>
              <p class="icon">☦️: </p>
              <p class="player-info">+{props.data.stats.social}</p>
            </li>
          </ul>
        </div>
        <div>
          <p class="icon">🎖️</p>
          <p class="player-info">{props.data.prestige}</p>
        </div>
        <div>
          <ul class="info-list">
            <li>
              <p class="icon">🛠️: </p>
              <p class="player-info">{props.data.resources.production}</p>
            </li>
            <li>
              <p class="icon">📚: </p>
              <p class="player-info">{props.data.resources.knowledge}</p>
            </li>
            <li>
              <p class="icon">⚖️: </p>
              <p class="player-info">{props.data.resources.order}</p>
            </li>
            <li>
              <p class="icon">🛡️: </p>
              <p class="player-info">{props.data.resources.power}</p>
            </li>
            <li>
              <p class="icon">🤝: </p>
              <p class="player-info">{props.data.resources.cohesion}</p>
            </li>
            <li>
              <p class="icon">🎭: </p>
              <p class="player-info">{props.data.resources.culture}</p>
            </li>
          </ul>
        </div>
      </section>
      <section id="main-right-bar" class="main-right-bar">
        <div>
          <h1>Administrators</h1>
          <ul class="info-list worker-list">
            <li class="worker">
              <img
                src={process.env.PUBLIC_URL + "/assets/img/token_1.png"}
                alt="Token 1"
              ></img>
              <h4>Augustus</h4>
            </li>
            <li class="worker">
              <img
                src={process.env.PUBLIC_URL + "/assets/img/token_2.png"}
                alt="Token 2"
              ></img>
              <h4>Flavia</h4>
            </li>
            <li class="worker">
              <img
                src={process.env.PUBLIC_URL + "/assets/img/token_3.png"}
                alt="Token 3"
              ></img>
              <h4>Gaius</h4>
            </li>
            <li class="worker">
              <img
                src={process.env.PUBLIC_URL + "/assets/img/token_4.png"}
                alt="Token 4"
              ></img>
              <h4>Aurelius</h4>
            </li>
            <li class="worker">
              <img
                src={process.env.PUBLIC_URL + "/assets/img/token_5.png"}
                alt="Token 5"
              ></img>
              <h4>Lucius</h4>
            </li>
            <li class="worker">
              <img
                src={process.env.PUBLIC_URL + "/assets/img/token_6.png"}
                alt="Token 6"
              ></img>
              <h4>Probus</h4>
            </li>
          </ul>
        </div>
      </section>
      <section id="main-bottom-bar" class="main-bottom-bar">
        <div>
          <div>factions info</div>
          <div>other faction Npcs</div>
          <div>regional info</div>
          <div>ongoing objectives</div>
        </div>
      </section>
      <section id="main-left-bar" class="main-left-bar">
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
            <li class="worker">
              <img src={
                  process.env.PUBLIC_URL + "/assets/img/token_7.png"
                } alt=""></img>
              <h4>Assistant</h4>
            </li>
            <li class="worker">
              <img src={
                  process.env.PUBLIC_URL + "/assets/img/token_8.png"
                } alt=""></img>
              <h4>Family Leader</h4>
            </li>
            <li class="worker">
              <img src={
                  process.env.PUBLIC_URL + "/assets/img/token_9.png"
                } alt=""></img>
              <h4>Family Leader</h4>
            </li>
          </ul>
        </div>
      </section>
      <section id="main-center" class="main-center">
        <img id="city-picture" src="assets/img/city.png" alt="city" />
        <button onClick={handleButtonClick}>Generate Event</button>
      {isPopupOpen && <Event onClose={handleClosePopup} />}
      </section>
    </div>
  );
}

export default Game;
