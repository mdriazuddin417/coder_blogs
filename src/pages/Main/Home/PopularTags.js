import { Typography } from "@material-tailwind/react";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import popularTags from "../../../Data/popularTags";
import { addTag } from "../../../redux/action/filterAction";

const PopularTags = () => {
  const dispatch = useDispatch();
  const tag = useSelector((state) => state.filter.tag);
  return (
    <div className="space-y-3">
      <h1 className="font-thin">Popular Tags</h1>

      <div className="flex lg:flex-nowrap flex-wrap  gap-3">
        {popularTags.map((item, index) => (
          <div
            key={index}
            className="relative h-[110px] rounded-xl transform hover:-translate-y-2 transition-all cursor-pointer  hover:shadow-md"
            onClick={() => dispatch(addTag(item.title))}
          >
            <img src={item.img} alt="" className="w-full h-full rounded-xl " />
            <div
              className={`absolute bottom-1 left-1 flex items-center justify-center ${
                item.title === tag
                  ? "bg-light-blue-500 text-white "
                  : "bg-white text-gray-800"
              } px-3 py-1 rounded-full`}
            >
              <h5 className="text-sm">{item.title}</h5>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopularTags;
