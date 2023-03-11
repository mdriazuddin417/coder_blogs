import {
  Card,
  CardHeader,
  CardFooter,
  Typography,
  Button,
  IconButton,
} from "@material-tailwind/react";
import { ArrowLongRightIcon } from "@heroicons/react/24/outline";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { addWishList, historyBlog } from "../redux/action/blogAction";
import { Link } from "react-router-dom";

const SingleBlog = ({ item }) => {
  const dispatch = useDispatch();
  const { author, title, desc, image, tags, status, date, _id } = item;

  return (
    <Card className="group max-w-sm shadow-none">
      <CardHeader className="m-0 rounded-2xl relative">
        <img
          src={image}
          alt={title}
          className="transform group-hover:scale-105 duration-500 h-[400px]"
        />
      </CardHeader>
      <div className="relative p-5">
        <div className="absolute right-2 top-2">
          <IconButton
            variant="text"
            onClick={() => dispatch(addWishList(item))}
          >
            <Typography variant="h4" color="blue-gray">
              {status ? (
                <AiFillHeart className="text-red-500 animate-bounce" />
              ) : (
                <AiOutlineHeart className="text-gray-500 animate-bounce" />
              )}
            </Typography>
          </IconButton>
        </div>
        <div className="flex flex-wrap gap-2 w-[95%] pb-2 ">
          {tags?.slice(0, 4)?.map((tag, index) => (
            <p
              key={index}
              className="text-gray-900 bg-gray-100 hover:bg-gray-200 duration-300 cursor-pointer border border-gray-200 px-3 py-1 rounded-full shadow-sm text-sm transform hover:-translate-y-1  ease-in-out"
            >
              {tag}
            </p>
          ))}
        </div>
        <Typography variant="h4" color="blue-gray">
          {title}
        </Typography>
        <Typography
          variant="paragraph"
          color="gray"
          className="mt-3 font-normal "
        >
          {desc?.length > 100 ? `${desc?.slice(0, 120)}...` : desc}
          <Link to={`blog/${_id}`}>
            <Button
              variant="text"
              className="flex items-center gap-2 "
              onClick={() => dispatch(historyBlog(item))}
            >
              Read More
              <ArrowLongRightIcon strokeWidth={2} className="h-5 w-5  " />
            </Button>
          </Link>
        </Typography>
      </div>
      <CardFooter className="flex items-center justify-between py-3 mt-auto border-b border-t border-gray-200 ">
        <Typography variant="small">by {author}</Typography>
        <Typography variant="small" color="gray" className="flex gap-1">
          <i className="fas fa-map-marker-alt fa-sm mt-[3px]" />
          Release: {date?.slice(0, 10)}
        </Typography>
      </CardFooter>
    </Card>
  );
};

export default SingleBlog;
