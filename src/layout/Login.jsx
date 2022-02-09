import React, { useState } from "react";
import { useHistory } from "react-router-dom";

import "../css/Login.css";

import Oasis from "../assets/logo.svg";

import Popup from "../components/Popup";
import Alert from "../components/Alert";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUnlockAlt, faUserAlt } from "@fortawesome/free-solid-svg-icons";

import axios from "axios";

const Login = () => {
  let history = useHistory();

  const [modalOpen, setModalOpen] = useState(false);
  const [userid, setUserId] = useState("");
  const [password, setPassword] = useState("");

  const [joinId, setJoinId] = useState("");
  const [joinPw, setJoinPw] = useState("");
  const [joinName, setJoinName] = useState("");
  const [joinEmail, setJoinEmail] = useState("");
  const [alertShow, setAlertShow] = useState(false);

  const onKeyPress = (e) => {
    if (e.key === "Enter") {
      doLogin();
    }
  };

  const joinMember = () => {
    console.log("join");
    console.log(joinId + ":" + joinPw);

    axios
      .post("http://localhost:8080/member/new", {
        username: joinId,
        password: joinPw,
        name: joinName,
        email: joinEmail,
      })
      .then((response) => {
        console.log(response);
        closeModal();
      })
      .catch((error) => {
        console.log(error);
        setAlertShow(true);
      })
      .finally(() => {
        console.log("finally");
        setTimeout(() => setAlertShow(false), 2000);
      });
  };

  const doLogin = () => {
    console.log("Login");
    console.log(userid + ":" + password);
    axios
      .post("http://localhost:8090/login", {
        userId: userid,
        userPass: password,
      })
      .then((response) => {
        console.log(response);
        localStorage.setItem("OassisToken", response.data);
        history.push("/otp");
      })
      .catch((error) => {
        console.log(error);
        setAlertShow(true);
      })
      .finally(() => {
        console.log("finally");
        setTimeout(() => setAlertShow(false), 2000);
      });
  };

  const handleChange = (e) => {
    switch (e.target.name) {
      case "userId":
        setUserId(e.target.value);
        break;
      case "password":
        setPassword(e.target.value);
        break;
      case "joinId":
        setJoinId(e.target.value);
        break;
      case "joinPw":
        setJoinPw(e.target.value);
        break;
      case "joinName":
        setJoinName(e.target.value);
        break;
      case "joinEmail":
        setJoinEmail(e.target.value);
        break;
      default:
        break;
    }
  };

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    console.log("Modal Close");
    setModalOpen(false);
  };

  const confirm = () => {
    // save();
    console.log("Modal Confirm");
    closeModal();
  };

  return (
    <>
      <div className="login_layout">
        <div className="login_form">
          <div className="login_head">
            <img src={Oasis} className="login_logo" />
            <div className="login_title">Oassis</div>
          </div>
          <form>
            <div className="login_input">
              <input
                type="text"
                label="id"
                name="userId"
                placeholder="User ID"
                onChange={handleChange}
                value={userid}
              />
              <FontAwesomeIcon icon={faUserAlt} className="login_input_icon" />
            </div>

            <div className="login_input">
              <input
                className="login_pass_input"
                type="password"
                label="password"
                name="password"
                autoComplete="on"
                value={password}
                placeholder="Password"
                onChange={handleChange}
                onKeyPress={onKeyPress}
              />
              <FontAwesomeIcon
                className="login_input_icon"
                icon={faUnlockAlt}
              />
            </div>
          </form>
          <div
            className="login_text"
            onClick={() => {
              openModal();
            }}
          >
            Sign In
          </div>
          <div className="login_text">Forgot Password?</div>
          <div>
            <button className="login_btn" onClick={doLogin}>
              Login
            </button>
          </div>
        </div>
        <Alert
          visible={alertShow}
          type="warn"
          width="472"
          height="60"
          message="Connect Failed!!!"
        />
        <div>
          <Popup
            open={modalOpen}
            //confirm={joinMember}
            close={closeModal}
            header="Join Oaasis"
          >
            <h2>Join Page</h2>
            <div className="login_pop_input">
              <input
                type="text"
                label="id"
                name="joinId"
                value={joinId}
                onChange={handleChange}
                placeholder="User ID"
              />
            </div>

            <div className="login_pop_input">
              <input
                type="text"
                label="name"
                name="joinName"
                value={joinName}
                onChange={handleChange}
                placeholder="User Name"
              />
            </div>

            <div className="login_pop_input">
              <input
                type="text"
                label="e-mail"
                name="joinEmail"
                value={joinEmail}
                onChange={handleChange}
                placeholder="E-mail"
              />
            </div>

            <div className="login_pop_input">
              <input
                className="login_pass_input"
                type="password"
                label="password"
                name="joinPw"
                value={joinPw}
                onChange={handleChange}
                placeholder="Password"
              />
            </div>
          </Popup>
        </div>
      </div>
    </>
  );
};

export default Login;
