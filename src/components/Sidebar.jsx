import React from "react";
import { categories } from "./Constant";

const Sidebar = ({ handleCategoryChange, selectedCategory }) => {
  return (
    <div className="ml-4">
      <div>
        <h4 className="text-2xl mb-8">Categories</h4>
        <div>
          {categories.map((item, index) => (
            <button
              onClick={() => handleCategoryChange(item)}
              className={`${
                item === selectedCategory
                  ? "bg-[#111111] text-white"
                  : "bg-gray-100"
              } grid p-4 mb-4 hover:bg-[#111111] hover:text-white ease-in-out duration-300`}
              key={index}
            >
              {item}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
