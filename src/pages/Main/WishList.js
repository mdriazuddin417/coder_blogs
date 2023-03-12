import React from "react";
import { useSelector } from "react-redux";
import SingleBlog from "../../components/SingleBlog";

const WishList = () => {
  const blogs = useSelector((state) => state.blogs.blogs);
  return (
    <div className="py-10 grid lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-5">
      {blogs
        .filter((blog) => blog.status)
        .map((item, index) => (
          <SingleBlog key={index} item={item} />
        ))}
    </div>
  );
};

export default WishList;
