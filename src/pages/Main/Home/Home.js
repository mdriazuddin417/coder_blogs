import React from "react";
import Authors from "./Authors";
import BestStories from "./BestStories";
import Blogs from "./Blogs";
import Hero from "./Hero";
import MostLikeBlog from "./MostLikeBlog";
import NewBlog from "./NewBlog";
import PopularTags from "./PopularTags";
const Home = () => {
  return (
    <div className="space-y-8 py-10 px-5">
      <Hero />
      <PopularTags />
      <NewBlog />
      <BestStories />
      <Blogs />
      <MostLikeBlog />
      <Authors />
    </div>
  );
};

export default Home;
