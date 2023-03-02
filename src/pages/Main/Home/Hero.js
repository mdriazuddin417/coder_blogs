import React, { useState } from "react";
import { Typography } from "@material-tailwind/react";
import { FaSearch } from "react-icons/fa";
import SearchBlogModel from "../../../components/SearchBlogModel";
const Hero = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(!open);
  return (
    <div>
      <div className="text-center lg:p-8 ">
        <Typography
          variant="h1"
          className="font-normal font-['Lato', sans-serif]"
        >
          Hey, we’re{" "}
          <span className="text-light-blue-500 font-bold">coder </span>. We
          promote{" "}
          <span className="text-light-blue-500 font-bold">positive</span>{" "}
          culture through inspiring articles on{" "}
          <span className="text-light-blue-500 font-bold">web design</span>,
          programming language, and web.
        </Typography>
        <div
          className="px-2  rounded-full w-[400px] bg-gray-100 flex justify-between items-center py-2 mx-auto mt-5 shadow hover:bg-gray-200 duration-300 cursor-pointer"
          onClick={handleOpen}
        >
          <p className="text-[16px] font-thin text-gray-500 pl-3">
            Search posts,tags and authors
          </p>
          <div className="w-[35px] h-[35px] bg-blue-500 rounded-full grid place-items-center">
            <FaSearch className="text-white text-lg" />
          </div>
        </div>
      </div>
      <SearchBlogModel open={open} handleOpen={handleOpen} />
    </div>
  );
};

export default Hero;
