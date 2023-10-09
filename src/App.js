import "./App.scss";
import React from "react";
import Header from "./components/Header/Header";
import { Outlet } from "react-router-dom";

const App = () => {
  return (
    <div className="app-container">
      <div className="header-container">
        <Header />
      </div>
      <div className="main-container">
        <div className="sidebar-container"></div>
        <div className="app-container">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default App;
