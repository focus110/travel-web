import React from "react";
import { useParams } from "react-router-dom";
import { articles } from "../components/Constant";

const Single = () => {
  // Get the parameters from the URL
  const { id } = useParams();

  const { title, img, desc, article } = articles[id];
  return (
    <div className="container">
      <div className="py-8">
        <h1 className="text-[32px] font-semibold">Blog  {title}</h1>
        <img src={img} alt={title} />
        <p>{article}</p>
      </div>
    </div>
  );
};

export default Single;
