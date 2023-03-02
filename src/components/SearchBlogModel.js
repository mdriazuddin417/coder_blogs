import { Fragment, useState } from "react";
import { Dialog, DialogBody } from "@material-tailwind/react";
import { BsSearch } from "react-icons/bs";

export default function SearchBlogModel({ open, handleOpen }) {
  return (
    <div>
      <Fragment className="">
        <Dialog
          open={open}
          handler={handleOpen}
          className="lg:top-[-200px] bg-transparent"
        >
          <div>
            <div className="bg-white flex items-center justify-start gap-3 pl-4 py-3 rounded shadow-lg">
              <BsSearch />
              <input
                type="text"
                placeholder="Search posts, tags and authors"
                className="w-full outline-none"
              />
            </div>
          </div>
        </Dialog>
      </Fragment>
    </div>
  );
}
