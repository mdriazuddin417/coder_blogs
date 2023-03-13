import React, { useState } from "react";
import { useSelector } from "react-redux";
import Carousel from "react-simply-carousel";
import SingleBlog from "../../../components/SingleBlog";
const BestStories = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  const blogs = useSelector((state) => state.blogs.blogs);
  return (
    <div className="relative">
      <hr />
      <h1 className="font-thin py-3">
        Get started with our <span className="font-bold">best stories</span>
      </h1>
      <div>
        <div>
          <Carousel
            containerProps={{
              style: {
                width: "100%",
                justifyContent: "space-evenly",
                userSelect: "none",
              },
            }}
            preventScrollOnSwipe
            swipeTreshold={60}
            activeSlideIndex={activeSlide}
            activeSlideProps={{}}
            onRequestChange={setActiveSlide}
            forwardBtnProps={{
              children: ">",
              style: {
                width: 40,
                height: 40,
                minWidth: 40,
                alignSelf: "center",
                background: "#03a9f4",
                borderRadius: 30,
                color: "#fff",
                fontSize: 20,
                fontWeight: "bold",
                cursor: "pointer",
                position: "absolute",
                top: 5,
                right: 0,
              },
            }}
            backwardBtnProps={{
              children: "<",
              style: {
                width: 40,
                height: 40,
                minWidth: 40,
                alignSelf: "center",
                background: "#03a9f4",
                borderRadius: 30,
                color: "#fff",
                fontSize: 20,
                fontWeight: "bold",
                cursor: "pointer",
                position: "absolute",
                top: 5,
                right: 45,
                zIndex: 1,
              },
            }}
            itemsToShow={4}
            speed={500}
          >
            {blogs
              ?.sort((a, b) => a.position - b.position)
              .map((item, index) => (
                <div
                  style={{
                    width: 400,
                    height: 550,
                  }}
                  key={index}
                >
                  <SingleBlog item={item} />
                </div>
              ))}
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default BestStories;
