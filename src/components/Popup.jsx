import React from "react";
import "../css/Popup.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheckCircle,
  faExclamationCircle,
  faTimesCircle,
  faInfoCircle,
} from "@fortawesome/free-solid-svg-icons";

const Popup = (props) => {
  const { open, confirm, close, type, header } = props;
  //type
  //S(success) 초록 체크아이콘
  //I(Information) 파랑 i아이콘
  //E(Error) 빨강 엑스아이콘
  //W(warning) 주황 느낌표아이콘
  let icon;
  if (type == "S") {
    icon = <FontAwesomeIcon icon={faCheckCircle} size="5x" color={"#61bb46"} />;
  } else if (type == "E") {
    icon = <FontAwesomeIcon icon={faTimesCircle} size="5x" color={"#e03a3e"} />;
  } else if (type == "W") {
    icon = (
      <FontAwesomeIcon icon={faExclamationCircle} size="5x" color={"#f5821f"} />
    );
  } else {
    icon = <FontAwesomeIcon icon={faInfoCircle} size="5x" color={"#009ddc"} />;
  }

  return (
    <div className={open ? "openModal modal" : "modal"}>
      {open ? (
        <section>
          <header>{icon}</header>
          <main>
            <h2>{header}</h2>
            {props.children}
          </main>
          <footer>
            {confirm ? (
              <button className="pop_btn_conf" onClick={confirm}>
                confirm
              </button>
            ) : null}
            <button
              className={confirm ? "pop_btn_close" : "pop_btn_conf"}
              onClick={close}
            >
              close
            </button>
          </footer>
        </section>
      ) : null}
    </div>
  );
};

export default Popup;
