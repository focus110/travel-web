import React from "react";
import bannerImg from "../assets/banner_img.jpg";

const Banner = () => {
  return (
    <div
      className="h-screen-minus relative"
      style={{
        backgroundImage: `url(${bannerImg})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div className="relative z-[9] pt-[300px]">
        <h1 className="text-white text-4xl md:text-8xl font-bold">
          Colchester
        </h1>
        <p className="text-white text-xl md:text-4xl">Adventure Tours</p>
      </div>
      <div className="absolute top-0 bg-black w-full h-full opacity-[15%]"></div>
    </div>
  );
};

export default Banner;
