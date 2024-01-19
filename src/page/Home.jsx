import React from "react";
import Banner from "../components/Banner";
import About from "../components/About";
import Slider from "../components/Slider";
import LatestArticle from "./LatestArticle";

const Home = () => {
  return (
    <div className="">
      <Banner />
      <About />
      <Slider />
      <LatestArticle />
    </div>
  );
};

export default Home;
