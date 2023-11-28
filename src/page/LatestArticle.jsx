import React from "react";
import Title from "../components/Title";
import Carousel from "../components/Carousel";

const LatestArticle = () => {
  return (
    <div className="container">
      <div className="py-8">
        <Title title={`News Highlight`} />
        <Carousel />
      </div>
    </div>
  );
};

export default LatestArticle;
