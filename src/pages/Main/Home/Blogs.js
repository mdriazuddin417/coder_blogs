import { Button } from "@material-tailwind/react";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import NoData from "../../../components/NoData";
import SingleBlog from "../../../components/SingleBlog";
import {
  clearAction,
  firstAction,
  lastAction,
} from "../../../redux/action/filterAction";
import getBlogsData from "../../../redux/thunk/GetBlogsData";

const Blogs = () => {
  const dispatch = useDispatch();
  const [count, setCount] = useState(6);
  const filter = useSelector((state) => state.filter.filter);
  const blogs = useSelector((state) => state.blogs.blogs);

  useEffect(() => {
    dispatch(getBlogsData());
  }, [dispatch]);

  let content;

  if (filter === "last") {
    content = blogs
      ?.sort((a, b) => a.position - b.position)
      ?.sort((a, b) => {
        const result = new Date(a.date) - new Date(b.date);
        return result;
      })
      .slice(0, count)
      .map((item, index) => <SingleBlog key={index} item={item} />);
  } else if (filter === "first") {
    content = blogs
      ?.sort((a, b) => a.position - b.position)
      ?.sort((a, b) => {
        const result = new Date(b.date) - new Date(a.date);
        return result;
      })
      .slice(0, count)
      .map((item, index) => <SingleBlog key={index} item={item} />);
  } else {
    content = blogs
      ?.sort((a, b) => a.position - b.position)
      ?.slice(0, count)
      .map((item, index) => <SingleBlog key={index} item={item} />);
  }

  return (
    <div className="">
      <div className=" border-t flex justify-between items-center py-2">
        <div className="">
          <h1 className="font-thin">Blogs</h1>
        </div>
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
      </div>
      <div className="py-10 grid lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-5">
        {content ? content : <NoData title={"Loading..."} />}
      </div>
      <div className="text-center">
        <Button
          onClick={() => setCount(count + 3)}
          color="blue"
          size="lg"
          className="rounded-full px-10 disabled:bg-gray-500"
          disabled={blogs.length <= count ? true : false}
        >
          Load More
        </Button>
      </div>
    </div>
  );
};

export default Blogs;
