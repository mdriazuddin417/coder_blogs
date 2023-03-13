import { Typography } from "@material-tailwind/react";
import React from "react";

const NoData = ({ title }) => {
  return (
    <div className="flex justify-center items-center h-[200px]">
      <Typography variant="h5" color="gray" className="mb-2">
        {title}
      </Typography>
    </div>
  );
};

export default NoData;
