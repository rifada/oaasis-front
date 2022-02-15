import React from "react";
import "../css/Dashboard.css";
import "../css/App.css";

import {
  faBox,
  faTshirt,
  faBeer,
  faGolfBall,
} from "@fortawesome/free-solid-svg-icons";
import Card from "../components/Card";

const DashBoard = () => {
  const cardList = [
    {
      icon: faBox,
      title: "유통",
      content: "180",
      color: "green",
      price: "7,560,000",
    },
    {
      icon: faTshirt,
      title: "패션",
      content: "36",
      color: "red",
      price: "6,620,000",
    },
    {
      icon: faBeer,
      title: "주류",
      content: "20",
      color: "yellow",
      price: "12,320,000",
    },
    {
      icon: faGolfBall,
      title: "골프",
      content: "18",
      color: "white",
      price: "2,560,000",
    },
  ];

  return (
    <div className="dashboard_layout">
      <div className="card_container">
        {cardList.map((item, i) => {
          return <Card item={item} key={i} />;
        })}
      </div>
    </div>
  );
};

export default DashBoard;
