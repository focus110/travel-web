import React from "react";
import { useParams } from "react-router-dom";
import { articles } from "../components/Constant";

const Single = () => {
  // Get the parameters from the URL
  const { id } = useParams();

  const { title, img,  article } = articles[id];
  return (
    <div className="container">
      <div className="">
        <div className="text-left font-semibold mb-4 text-lg text-gray-600">Travel article</div>
        <h1 className="text-[32px] text-left font-bold leading-[1.1] mb-8">
          {title}
        </h1>
        <img className="mb-8 md:h-[400px] md:w-full object-cover" src={img} alt={title} />
        <p className="text-[20px] leading-[1.5] text-left mb-8">{article}</p>
      </div>
    </div>
  );
};

export default Single;
