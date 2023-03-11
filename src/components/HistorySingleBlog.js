import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
} from "@material-tailwind/react";

export default function HistorySingleBlog({ item }) {
  const { author, title, desc, image, tags, status, date, _id, watchDate } =
    item;

  return (
    <Card>
      <CardHeader color="blue" className="relative h-56">
        <img src={image} alt="img-blur-shadow" className="h-full w-full" />
        <div className="absolute top-3 right-3 px-3 py-1 rounded bg-light-blue-500 text-white">
          <Typography variant="small" color="white" className="flex gap-1 ">
            <i className="fas fa-map-marker-alt fa-sm mt-[3px]" />
            last watch:{watchDate?.slice(0, 16)}
          </Typography>
        </div>
      </CardHeader>
      <CardBody className="text-center">
        <Typography variant="h5" className="mb-2">
          {title}
        </Typography>
        <Typography>
          {desc?.length > 100 ? `${desc?.slice(0, 120)}...` : desc}
        </Typography>
      </CardBody>
      <CardFooter divider className="flex items-center justify-between py-3">
        <Typography variant="small">by: {author}</Typography>
        <Typography variant="small" color="gray" className="flex gap-1">
          <i className="fas fa-map-marker-alt fa-sm mt-[3px]" />
          Release: {date?.slice(0, 10)}
        </Typography>
      </CardFooter>
    </Card>
  );
}
