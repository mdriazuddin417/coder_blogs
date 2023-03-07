import { Button } from "@material-tailwind/react";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import SingleBlog from "../../../components/SingleBlog";
import getBlogsData from "../../../redux/thunk/GetBlogsData";

const Blogs = () => {
  const dispatch = useDispatch();

  const blogs = useSelector((state) => state.blogs.blogs);

  useEffect(() => {
    dispatch(getBlogsData());
  }, [dispatch]);

  return (
    <div className="">
      <div className="py-10 grid lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-5">
        {blogs?.slice(0, 6).map((item, index) => (
          <SingleBlog key={index} item={item} />
        ))}
      </div>
      <div className="text-center">
        <Button color="blue" size="lg" className="rounded-full px-10">
          Load More
        </Button>
      </div>
    </div>
  );
};

export default Blogs;
