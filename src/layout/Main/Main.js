import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";

const Main = () => {
  return (
    <div className="mx-auto max-w-screen-xl">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Main;
