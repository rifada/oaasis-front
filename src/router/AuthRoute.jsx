import React from "react";

import MainLayout from "../layout/MainLayout";

import { Redirect, Route } from "react-router-dom";

//라우터 인증
const AuthRoute = ({ component: Component, ...rest }) => {
  //로그인 이후 브라우져가 토큰값을 가지고 있는지 확인
  const isLogin = () => {
    console.log("AuthLogin::isLogin");
    return !!localStorage.getItem("OassisToken");
  };

  //Layout 적용이 필요한지 확인
  const isLayout = () => {
    return "/otp" !== rest.path;
  };

  return (
    <Route
      render={() =>
        isLogin() ? (
          isLayout() ? (
            <MainLayout component={Component} />
          ) : (
            <Component />
          )
        ) : (
          <Redirect to="/" />
        )
      }
    />
  );
};

export default AuthRoute;
