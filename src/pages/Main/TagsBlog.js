import React from "react";
import { useSelector } from "react-redux";
import NoData from "../../components/NoData";
import SingleBlog from "../../components/SingleBlog";

const TagsBlog = () => {
  const blogs = useSelector((state) => state.blogs.blogs);
  const tag = useSelector((state) => state.filter.tag);

  const check = blogs.filter((blog) => blog.tags.includes(tag));

  let content;
  if (check.length > 0) {
    content = (
      <div className="py-10 grid lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-5">
        {blogs
          ?.filter((blog) => blog.tags.includes(tag))
          .map((item, index) => (
            <SingleBlog key={index} item={item} />
          ))}
      </div>
    );
  } else if (tag === null) {
    content = <NoData title={"No selected tag"} />;
  } else {
    content = <NoData title={"No Blogs this tag"} />;
  }

  return <div>{content}</div>;
};

export default TagsBlog;
