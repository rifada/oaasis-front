import React from "react";
import "../css/Card.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquare } from "@fortawesome/free-solid-svg-icons";

const Card = ({ item }) => {
  return (
    <div className="dashboard_card">
      <div className="card_text">
        <div className="card_title">{item.title}</div>
        <div className="card_content">{item.content}</div>
      </div>
      <div className="card_content">{item.price}₩</div>
      <div className="card_icon">
        <span className="fa-layers fa-fw">
          <FontAwesomeIcon icon={faSquare} color={item.color} />
          <FontAwesomeIcon icon={item.icon} color={item.color} />
        </span>
      </div>
    </div>
  );
};

export default Card;
