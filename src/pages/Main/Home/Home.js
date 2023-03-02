import React from "react";
import BestStories from "./BestStories";
import Blogs from "./Blogs";
import Hero from "./Hero";
import MostLikeBlog from "./MostLikeBlog";
import PopularTags from "./PopularTags";
const Home = () => {
  return (
    <div className="space-y-8">
      <Hero />
      <PopularTags />
      <BestStories />
      <Blogs />
      <MostLikeBlog />
    </div>
  );
};

export default Home;
