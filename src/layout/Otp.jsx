import React, { useState } from "react";
import { useHistory } from "react-router-dom";

import "../css/Otp.css";

import Password from "../assets/password.svg";
import Alert from "../components/Alert";

import axios from "axios";

const Otp = () => {
  let history = useHistory();

  const [otp, setOtp] = useState("");
  const [alertShow, setAlertShow] = useState(false);

  const keyinOtp = (e) => {
    setOtp(e.target.value);
  };
  const checkOtp = () => {
    doCheckOtp();
  };

  const doCheckOtp = () => {
    axios
      .post("http://localhost:8080/otp/check", {
        otp,
      })
      .then((response) => {
        console.log(response);
        history.push("/dashboard");
      })
      .catch((error) => {
        console.log(error);
        setAlertShow(true);
      })
      .finally(() => {
        console.log("finally");
        history.push("/dashboard");
        setTimeout(() => setAlertShow(false), 2000);
      });
  };

  return (
    <div className="otp_layout">
      <div className="otp_form">
        <div className="otp_form_header">
          <img src={Password} />
        </div>
        <div className="otp_form_body">
          <div className="otp_form_text">
            SMS로 받은 인증번호를 입력해주세요.
          </div>
          <input
            className="otp_form_input"
            value={otp}
            onChange={keyinOtp}
          ></input>
        </div>
        <button className="otp_form_button" onClick={checkOtp}>
          Confirm
        </button>
      </div>
      <Alert
        visible={alertShow}
        type="error"
        width="350"
        height="60"
        message="Invalid OTP"
      />
    </div>
  );
};

export default Otp;
