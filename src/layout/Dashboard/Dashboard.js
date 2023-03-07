import React from "react";
import { Outlet } from "react-router-dom";
import SideBar from "./SideBar";

const Dashboard = () => {
  return (
    <div className="grid lg:grid-cols-12 md:grid-cols-8 grid-cols-4  w-full gap-10 py-10 ">
      <div className="col-span-4  shadow rounded">
        <SideBar />
      </div>
      <div className="col-span-8 shadow rounded">
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;
