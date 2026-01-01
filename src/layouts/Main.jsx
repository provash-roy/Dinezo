import React from "react";
import Navbar from "../components/common/Navbar";
import { Outlet } from "react-router";

const Main = () => {
  return (
    <div className="text-center">
      <Navbar />
      <Outlet />
    </div>
  );
};

export default Main;
