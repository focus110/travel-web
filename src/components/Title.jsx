import React from "react";

const Title = ({ title }) => {
  return (
    <h4 className="text-2xl md:text-4xl font-bold text-title my-8">
      {title}
    </h4>
  );
};

export default Title;
