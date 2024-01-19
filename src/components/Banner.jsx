import React from "react";

const Banner = () => {
  const bannerImg =
    "https://cdn.pixabay.com/photo/2020/07/12/16/40/paris-5397889_1280.jpg";
  return (
    <div>
      <img className="w-full h-[500px] object-cover" src={bannerImg} alt="" />
    </div>
  );
};

export default Banner;
