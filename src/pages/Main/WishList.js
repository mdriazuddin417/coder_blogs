import React from "react";
import { useSelector } from "react-redux";
import NoData from "../../components/NoData";
import SingleBlog from "../../components/SingleBlog";

const WishList = () => {
  const blogs = useSelector((state) => state.blogs.blogs);
  const blog = blogs.filter((blog) => blog.status);

  let content;
  if (blog.length > 0) {
    content = (
      <div className="py-10 grid lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-5">
        {blogs
          .filter((blog) => blog.status)
          .map((item, index) => (
            <SingleBlog key={index} item={item} />
          ))}
      </div>
    );
  } else {
    content = <NoData title={"No Wishlist"} />;
  }

  return <div>{content}</div>;
};

export default WishList;
