import React from "react";
import {
  Typography,
  Avatar,
  Tooltip,
  Button,
  CardFooter,
  Card,
  CardHeader,
} from "@material-tailwind/react";
import img from "../../../image/tag_3.jpg";
const NewBlog = () => {
  const tags = ["Web Design", "Javascript", "Node js"];
  return (
    <div className="">
      <h1 className="font-thin py-3 border-t">
        WHAT’S <span className="font-bold">NEW?</span>
      </h1>
      <div className="grid lg:grid-cols-10 md:grid-cols-10 gap-5">
        <div className="lg:col-span-7  md:col-span-5 space-y-3">
          <div className="space-y-3">
            <div className="w-full  overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80"
                alt="ui/ux review check"
                className="w-full h-full rounded-2xl"
              />
            </div>
            <div className="flex flex-wrap gap-2 w-[95%] pb-2 ">
              {tags.slice(0, 4).map((tag, index) => (
                <p
                  key={index}
                  className="text-gray-900 bg-gray-100 hover:bg-gray-200 duration-300 cursor-pointer border border-gray-200 px-3 py-1 rounded-full shadow-sm  transform hover:-translate-y-1  ease-in-out"
                >
                  {tag}
                </p>
              ))}
            </div>
            <div>
              <Typography variant="h1" color="black">
                UI/UX Review Check
              </Typography>
              <Typography
                variant="lead"
                color="gray"
                className="mt-3 font-normal"
              >
                Because it&apos;s about motivating the doers. Because I&apos;m
                here to follow my dreams and inspire others. Because it&apos;s
                about motivating the doers. Because I&apos;m here to follow my
                dreams and inspire others.Because it&apos;s about motivating the
                doers. Because I&apos;mhere to follow my dreams and inspire
                others. Because it&apos;s about motivating the doers. Because
                I&apos;m here to follow my dreams and inspire others.
              </Typography>
            </div>
            <div className="flex items-center justify-between mt-3">
              <div className="flex items-center -space-x-3">
                <Tooltip content="Natali Craig">
                  <Avatar
                    size="sm"
                    variant="circular"
                    alt="natali craig"
                    src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1061&q=80"
                    className="border-2 border-white hover:z-10"
                  />
                </Tooltip>
                <Tooltip content="Candice Wu">
                  <Avatar
                    size="sm"
                    variant="circular"
                    alt="candice wu"
                    src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
                    className="border-2 border-white hover:z-10"
                  />
                </Tooltip>
              </div>
              <Typography className="font-normal">January 10</Typography>
            </div>
          </div>
        </div>

        <div className="lg:col-span-3 md:col-span-5 space-y-3">
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
          <div className="">
            <Card className="group max-w-sm shadow-none">
              <CardHeader className="m-0 rounded-2xl">
                <img
                  src={img}
                  alt="card"
                  className="transform group-hover:scale-105 duration-500 h-[400px]"
                />
              </CardHeader>
              <div className="relative p-5">
                <div className="flex flex-wrap gap-2 w-[95%] pb-2 ">
                  <p className="text-gray-900 bg-gray-100 hover:bg-gray-200 duration-300 cursor-pointer border border-gray-200 px-3 py-1 rounded-full shadow-sm text-sm transform hover:-translate-y-1  ease-in-out">
                    React js
                  </p>
                  <p className="text-gray-900 bg-gray-100 hover:bg-gray-200 duration-300 cursor-pointer border border-gray-200 px-3 py-1 rounded-full shadow-sm text-sm transform hover:-translate-y-1  ease-in-out">
                    Javascript
                  </p>
                </div>
                <Typography
                  variant="h4"
                  color="blue-gray"
                  className="group-hover:underline cursor-pointer"
                >
                  Full stack developer
                </Typography>
              </div>
              <CardFooter className="flex items-center justify-between py-1 ">
                <Typography variant="small">by Riaz Uddin</Typography>
                <Typography variant="small" color="gray" className="flex gap-1">
                  <i className="fas fa-map-marker-alt fa-sm mt-[3px]" />
                  20 january 2023
                </Typography>
              </CardFooter>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewBlog;
