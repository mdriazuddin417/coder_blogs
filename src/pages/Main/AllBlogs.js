import { Button } from "@material-tailwind/react";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import SingleBlog from "../../components/SingleBlog";
import {
  clearAction,
  firstAction,
  lastAction,
} from "../../redux/action/filterAction";
import getBlogsData from "../../redux/thunk/GetBlogsData";

const AllBlogs = () => {
  const dispatch = useDispatch();

  const blogs = useSelector((state) => state.blogs.blogs);
  const filter = useSelector((state) => state.filter.filter);

  useEffect(() => {
    dispatch(getBlogsData());
  }, [dispatch]);

  return (
    <div className="py-10">
      <div className="flex justify-end gap-4 items-center">
        <Button
          variant={filter === "first" ? "filled" : "text"}
          size="sm"
          className="rounded-full"
          onClick={() => dispatch(firstAction("first"))}
        >
          First Upload
        </Button>
        <Button
          variant={filter === "last" ? "filled" : "text"}
          size="sm"
          className="rounded-full"
          onClick={() => dispatch(lastAction("last"))}
        >
          Last Upload
        </Button>
        <Button
          variant={"text"}
          size="sm"
          className="rounded-full active:bg-light-blue-500 active:text-white"
          onClick={() => dispatch(clearAction())}
        >
          Clear
        </Button>
      </div>

      <div className="py-10 grid lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-5">
        {blogs.map((item, index) => (
          <SingleBlog key={index} item={item} />
        ))}
      </div>
    </div>
  );
};

export default AllBlogs;
