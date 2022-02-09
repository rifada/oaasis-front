import React from "react";
import { useHistory } from "react-router-dom";

import "../css/AppBar.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import {
  faBars,
  faUserCircle,
  faSignOutAlt,
} from "@fortawesome/free-solid-svg-icons";

const AppBar = ({ controlSidebar }) => {
  let history = useHistory();

  const logOut = () => {
    localStorage.setItem("OassisToken", "");
    history.push("/");
  };

  return (
    <>
      <div className="appbar">
        <div className="appbar-toggle">
          <FontAwesomeIcon
            icon={faBars}
            color="white"
            onClick={controlSidebar}
          />
        </div>
        <div className="appbar-title">Oassis</div>
        <div className="appbar-menupack">
          <button onClick={logOut} className="appbar-menu">
            <FontAwesomeIcon icon={faGithub} color="white" />
          </button>
          <button onClick={logOut} className="appbar-menu">
            <FontAwesomeIcon icon={faUserCircle} color="white" />
          </button>
          <button onClick={logOut} className="appbar-menu">
            <FontAwesomeIcon icon={faSignOutAlt} color="white" />
          </button>
        </div>
      </div>
    </>
  );
};

export default AppBar;
