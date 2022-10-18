import React from "react";
import { Outlet } from "react-router-dom";

import Sidebar from "../components/sidebar/Sidebar";
import Topnav from "../components/topnav/Topnav";

import "./_mainLayout.scss";

const MainLayout = () => {
  return (
    <>
      <div className="main">
        <Sidebar />
        <Topnav />
        <div className="main__content">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default MainLayout;
