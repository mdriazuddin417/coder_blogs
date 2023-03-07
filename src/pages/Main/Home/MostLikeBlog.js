import { Typography } from "@material-tailwind/react";
import React from "react";
import { useSelector } from "react-redux";

const MostLikeBlog = () => {
  const blogs = useSelector((state) => state.blogs.blogs);
  return (
    <div>
      <h1 className="font-thin">YOU MIGHT ALSO LIKE</h1>
      <div>
        <div className="py-5 flex items-center gap-2 flex-wrap justify-between ">
          {blogs?.slice(0, 4).map((item, index) => (
            <div className="w-[250px] group">
              <img
                src={item.image}
                alt=""
                className="w-full h-full rounded-2xl"
              />
              <Typography
                variant="lead"
                color="black"
                className="group-hover:underline mt-1"
              >
                {item.title}
              </Typography>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MostLikeBlog;
