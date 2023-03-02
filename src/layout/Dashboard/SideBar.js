import { Button } from "@material-tailwind/react";
import React from "react";
import { NavLink } from "react-router-dom";

const SideBar = () => {
  return (
    <div className="flex gap-5 p-5 flex-col ">
      <NavLink to="/dashboard" className="w-full">
        <Button variant="gradient" size="lg" className="w-full">
          Blog List
        </Button>
      </NavLink>
      <NavLink to="add-blog" className="w-full">
        <Button variant="gradient" size="lg" className="w-full">
          Add Blog
        </Button>
      </NavLink>
    </div>
  );
};

export default SideBar;
