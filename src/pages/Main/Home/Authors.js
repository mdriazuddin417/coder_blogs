import { Avatar } from "@material-tailwind/react";
import React from "react";

const Authors = () => {
  const authors = [1, 2, 3, 4, 5, 6];
  return (
    <div className="border-t">
      <h1 className="font-thin py-3">AUTHORS</h1>
      <div className="grid lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-5">
        {authors?.slice(0, 3).map((data) => (
          <div className="bg-light-blue-50 shadow flex justify-center items-center gap-4 px-5 py-10 rounded-lg group cursor-pointer">
            <Avatar
              src="https://i.ibb.co/XYNS2pF/player-5.png"
              size="lg"
              alt="avatar"
              variant="circular"
              className="ring-4 ring-white"
            />
            <div>
              <h1 className="text-black font-semibold text-[15px] group-hover:text-light-blue-900 duration-300">
                Ahmed Ajmi
              </h1>
              <p className="text-gray-700  text-[13px]">
                Web Developer. I create Web Themes @aspiretheme.@envato
                Author.Plant Based
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Authors;
