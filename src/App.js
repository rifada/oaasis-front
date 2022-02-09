import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import "./css/App.css";

import AuthRouter from "./router/AuthRoute";

import Login from "./layout/Login";
import Otp from "./layout/Otp";

import Dashboard from "./pages/DashBoard";
import CompanyInfo from "./pages/CompanyInfo";
import Users from "./pages/Users";
import Menu from "./pages/Menu";
import Prop from "./pages/Prop";
import Log from "./pages/Log";
import Crm from "./pages/Crm";

import ENotFound from "./pages/error/ENotFound";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Login}></Route>
        <AuthRouter exact path="/otp" component={Otp}></AuthRouter>

        <AuthRouter exact path="/dashboard" component={Dashboard}></AuthRouter>
        <AuthRouter exact path="/company" component={CompanyInfo}></AuthRouter>
        <AuthRouter exact path="/users" component={Users}></AuthRouter>
        <AuthRouter exact path="/menu" component={Menu}></AuthRouter>
        <AuthRouter exact path="/prop" component={Prop}></AuthRouter>
        <AuthRouter exact path="/log" component={Log}></AuthRouter>
        <AuthRouter exact path="/crm" component={Crm}></AuthRouter>

        <Route component={ENotFound}></Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
