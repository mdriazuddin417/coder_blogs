import { Button, Typography } from "@material-tailwind/react";
import React from "react";

const Newsletter = () => {
  return (
    <div className="bg-light-blue-500 rounded-2xl flex flex-col gap-4 justify-evenly p-4 text-white max-w-sm ">
      <h1 className="font-thin py-3">NEWSLETTER</h1>
      <Typography variant="h4" color="white">
        Get all the latest posts delivered straight to your inbox.
      </Typography>
      <input
        type="text"
        className="w-full py-2 px-5  rounded-full outline-none text-black text-lg"
        placeholder="Your email address"
      />
      <Button
        size="lg"
        variant="outlined"
        className="w-full rounded-full bg-white"
      >
        Subscribe
      </Button>
    </div>
  );
};

export default Newsletter;
