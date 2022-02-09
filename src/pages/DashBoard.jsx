import React from "react";
import "../css/Dashboard.css";
import "../css/App.css";

import "@toast-ui/chart/dist/toastui-chart.min.css";
import { AreaChart, PieChart } from "@toast-ui/react-chart";

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

  const areaData = {
    categories: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "June",
      "July",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    series: [
      {
        name: "Retail",
        data: [98, 99, 102, 105, 107, 110, 98, 99, 102, 105, 107, 110],
      },
      {
        name: "Fashion",
        data: [88, 100, 85, 138, 141, 145, 98, 99, 102, 105, 107, 110],
      },
    ],
  };
  const pieData = {
    categories: ["Company Type"],
    series: [
      {
        name: "Liquid",
        data: 50,
      },
      {
        name: "Retail",
        data: 200,
      },
      {
        name: "Fashion",
        data: 28,
      },
      {
        name: "Golf",
        data: 36,
      },
    ],
  };
  const areaOptions = {
    chart: {
      width: "auto",
      height: "auto",
      align: "center",
      title: "Company Count",
    },
    yAxis: {
      title: "Count",
    },
    xAxis: {
      title: "Month",
    },
    exportMenu: {
      visible: false,
    },
    legend: {
      align: "bottom",
    },
  };
  const pieOptions = {
    chart: {
      width: "auto",
      height: "auto",
      align: "center",
      title: "Company Type",
    },
    exportMenu: {
      visible: false,
    },
    legend: {
      align: "bottom",
    },
  };
  const areaContainerStyle = {
    width: "100%",
    height: "50vh",
  };

  const pieContainerStyle = {
    width: "100%",
    height: "50vh",
  };

  return (
    <div className="dashboard_layout">
      <div className="card_container">
        {cardList.map((item, i) => {
          return <Card item={item} key={i} />;
        })}
      </div>
      <div className="chart_container">
        <div className="chart">
          <AreaChart
            data={areaData}
            options={areaOptions}
            style={areaContainerStyle}
          />
        </div>
        <div className="chart">
          <PieChart
            data={pieData}
            options={pieOptions}
            style={pieContainerStyle}
          />
        </div>
      </div>
    </div>
  );
};

export default DashBoard;
