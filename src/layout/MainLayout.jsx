import React, { useState } from "react";

import "../css/Main.css";

import AppBar from "../components/AppBar";
import SideBar from "../components/SideBar";

const MainLayout = ({ component: Component }) => {
  //사이드바 state
  const [sidebar, setSidebar] = useState(false);

  //사이드바 state 변경 함수 호출
  const controlSidebar = () => setSidebar(!sidebar);

  return (
    <>
      <AppBar controlSidebar={controlSidebar} />

      <SideBar sidebar={sidebar} />
      <div className={`layout_content ${sidebar ? "active" : ""}`}>
        <Component />
      </div>
    </>
  );
};

export default MainLayout;
