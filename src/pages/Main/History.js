import { Typography } from "@material-tailwind/react";
import React from "react";
import { useSelector } from "react-redux";
import HistorySingleBlog from "../../components/HistorySingleBlog";
import NoData from "../../components/NoData";

const History = () => {
  const history = useSelector((state) => state.blogs.history);

  let content;
  if (history.length > 0) {
    content = (
      <div className="py-10 grid lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-5">
        {history?.map((item, index) => (
          <HistorySingleBlog key={index} item={item} />
        ))}
      </div>
    );
  } else {
    content = <NoData title={"No History"} />;
  }
  return <div>{content}</div>;
};

export default History;
