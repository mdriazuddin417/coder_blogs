import React from "react";
import { useSelector } from "react-redux";
import HistorySingleBlog from "../../components/HistorySingleBlog";

const History = () => {
  const history = useSelector((state) => state.blogs.history);
  return (
    <div className="py-10 grid lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-5">
      {history?.map((item, index) => (
        <HistorySingleBlog key={index} item={item} />
      ))}
    </div>
  );
};

export default History;
