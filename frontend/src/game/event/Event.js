import React from "react";
import "./Event.css";

function Event({ onClose }) {

  function showPlayerEffect(choice_number) {
    alert(event.choices[choice_number].choice_effect); 
  }

  const cleanUpPopup = (choice_number) => {
    showPlayerEffect(choice_number);
    onClose(); 
  }

  const event = {
    eventID: "id",
    title: "Justice Matter",
    desc: (
      <div>
        <p>
          As you enter the bustling forum, you can't help but notice the large
          crowd gathered around the raised platform at the center. Upon closer
          inspection, you see that a man stands on the platform, shackled and
          surrounded by a group of heavily armed soldiers.
        </p>
        <p>
          "This man is a deserter form the army!" a soldier announces to the
          crowd. "He has turned to banditry and preys on innocent travelers. he
          must be punished for his crimes!"
        </p>
        <p>
          A murmur of agreement ripples through the crowd, but it is quickly
          drowned out by a loud voice from the back. "The army should handle
          this matter internally!" a man shouts. "We don't need the interference
          of civilians!"
        </p>
        <p>
          The crowd erupts into a heated debate, with some calling for the man
          to be handed over to the military for punishment, while others argue
          that justice should be carried out in the courts. You can't help but
          feel caught in the middle of this tug of war, unsure of which side is
          right.
        </p>
      </div>
    ),
    domain: "Military",
    choices: [
      {
        choice_title: "Self Ruling",
        choice_desc:
          "You decide to rule everything privately internally, with the ires of the crowd and the army.",
        choice_effect: "You lose 1 Prestige Point.",
      },
      {
        choice_title: "Let the Army Handle It",
        choice_desc:
          "You decide to let the army handle the matter internally, however you know that you need to placate the crowd (-1 Cohesion)",
        choice_effect: "-1 Cohesion",
      },
      {
        choice_title: "Let the Crowd Handle It",
        choice_desc:
          "You decide to let the crowd and the elders handle it, however you know that you need to placate the army to maintain authority (-1 Power)",
        choice_effect: "-1 Power",
      },
      {
        choice_title: "Auctoritas",
        choice_desc:
          "You have proven yourself a capable leader of the army, and therefore you can manage this with the help of the army (require +3 Military)",
        choice_effect: "No particular effect",
      },
    ],
    image_url: process.env.PUBLIC_URL + "/assets/img/event.png"
  };

  return (
    <div className="popup-overlay">
      <div className="popup">
        <h2>
          {event.title} ({event.domain})
        </h2>
        <p>{event.desc}</p>
        <ul className="clickable-elements info-list">
          <li onClick={() => cleanUpPopup(0)}>
            <strong>{event.choices[0].choice_title}</strong>:{" "}
            {event.choices[0].choice_desc}
          </li>
          <li onClick={() => cleanUpPopup(1)}>
            <strong>{event.choices[1].choice_title}</strong>:{" "}
            {event.choices[1].choice_desc}
          </li>
          <li onClick={() => cleanUpPopup(2)}>
            <strong>{event.choices[2].choice_title}</strong>:{" "}
            {event.choices[2].choice_desc}
          </li>
          <li onClick={() => cleanUpPopup(3)}>
            <strong>{event.choices[3].choice_title}</strong>:{" "}
            {event.choices[3].choice_desc}
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Event;

//https://foolishdeveloper.com/how-to-create-automatic-popup-window-using-html-css/
