import { Typography } from "@material-tailwind/react";
import React from "react";
import popularTags from "../../../Data/popularTags";

const PopularTags = () => {
  return (
    <div className="space-y-3">
      <h1 className="font-thin">Popular Tags</h1>

      <div className="flex lg:flex-nowrap flex-wrap  gap-3">
        {popularTags.map((item, index) => (
          <div
            key={index}
            className="relative h-[110px] rounded-xl transform hover:-translate-y-2 transition-all cursor-pointer  hover:shadow-md"
          >
            <img src={item.img} alt="" className="w-full h-full rounded-xl " />
            <div className="absolute bottom-1 left-1 flex items-center justify-center bg-white px-3 py-1 rounded-full">
              <Typography variant="small" color="gray">
                {item.title}
              </Typography>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopularTags;
