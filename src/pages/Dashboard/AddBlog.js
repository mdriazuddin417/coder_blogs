import {
  Card,
  CardBody,
  CardFooter,
  Typography,
  Input,
  Button,
  Textarea,
  CardHeader,
} from "@material-tailwind/react";
import { useState } from "react";

export default function AddBlog() {
  const [tags, setTags] = useState([]);
  const handleKeyDown = (e) => {
    if (e.key !== "Enter") return;
    const value = e.target.value;
    if (!value.trim()) return;
    setTags([...tags, value]);
    e.target.value = "";
  };

  const removeTags = (index) => {
    setTags(tags.filter((el, i) => i !== index));
  };
  return (
    <div
      className="flex justify-center items-center flex-col h-full
   "
    >
      <Card className="w-[80%]">
        <CardHeader
          variant="gradient"
          color="blue"
          className="mb-4 grid h-28 place-items-center"
        >
          <Typography variant="h3" color="white">
            ADD PRODUCT
          </Typography>
        </CardHeader>
        <CardBody className="flex flex-col gap-4">
          <Input label="Blog Title" size="lg" />

          <Textarea label="Blog Details" />

          <div className=" w-full border border-gray-400 rounded p-2 flex flex-wrap gap-1">
            {tags.map((tag, index) => (
              <div
                key={index}
                className="flex items-center gap-3 bg-gray-200 hover:bg-gray-300 px-2 py-1 rounded-2xl"
              >
                <Typography variant="body2">{tag}</Typography>
                <span
                  className="bg-black text-white w-5 h-5 rounded-full  text-center flex justify-center items-center flex-col cursor-pointer"
                  onClick={() => removeTags(index)}
                >
                  &times;
                </span>
              </div>
            ))}
            <input
              type="text"
              onKeyDown={handleKeyDown}
              className=" border-0 outline-none flex-grow"
              placeholder="Tag something.."
            />
          </div>
          <Input label="Author name" size="lg" />
        </CardBody>
        <CardFooter className="pt-0">
          <Button variant="gradient" fullWidth size="lg">
            Submit
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
