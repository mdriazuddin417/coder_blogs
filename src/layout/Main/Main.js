import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";

const Main = () => {
  return (
    <div className="mx-auto max-w-screen-xl">
      <Header />
      <Outlet />
    </div>
  );
};

export default Main;
