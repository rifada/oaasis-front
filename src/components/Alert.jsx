import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExclamationCircle } from "@fortawesome/free-solid-svg-icons";
import { faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import { faExclamationTriangle } from "@fortawesome/free-solid-svg-icons";

const Alert = (props) => {
  let color;
  let icon;
  if (props.type === "error") {
    color = "#ef5350";
    icon = faExclamationCircle;
  } else if (props.type === "info") {
    color = "#64b5f6";
    icon = faInfoCircle;
  } else if (props.type === "warn") {
    color = "#ffc107";
    icon = faExclamationTriangle;
  }

  const alertStyle = {
    width: `${props.width}px`,
    height: `${props.height}px`,
    fontSize: "20px",
    marginTop: "10px",
    lineHeight: "60px",
    borderRadius: "10px",
    textAlign: "center",
    color: "#fff",
    backgroundColor: `${color}`,
    visibility: `${props.visible ? "visible" : "hidden"}`,
  };

  return (
    <div style={alertStyle}>
      <FontAwesomeIcon icon={icon} />
      {props.message}
    </div>
  );
};

export default Alert;
