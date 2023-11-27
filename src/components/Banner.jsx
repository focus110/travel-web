import React from "react";

const Banner = () => {
  const bannerImg =
    "https://images.unsplash.com/photo-1530789253388-582c481c54b0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  return (
    <div>
      <img className="w-full h-[500px] object-cover" src={bannerImg} alt="" />
    </div>
  );
};

export default Banner;
