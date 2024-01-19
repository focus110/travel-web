import React from "react";
import { categories } from "./Constant";

const Sidebar = () => {
  return (
    <div className="ml-4">
      <div>
        <h4 className="text-2xl mb-8">Categories</h4>
        <div>
          {categories.map((item, index) => (
            <button className="grid bg-gray-100 p-4 mb-4 hover:p-5 duration-75" key={index}>{item}</button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
