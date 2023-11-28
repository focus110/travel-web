import React from "react";
import { articles } from "./Constant";

const Carousel = () => {
  return (
    <div>
      <div className="overflow-x-scroll no-scrollbar md:pt-8">
        <div className="flex flex-col justify-center md:flex-row md:space-x-8 items-center px-4 pb-4">
          {articles.map((item, index) => (
            <a
              href="#"
              className="md:w-[300px] shadow-lg rounded-[10px] overflow-hidden mb-8 md:mb-0"
            >
              <img
                className="mb-2"
                src="https://cdn.pixabay.com/photo/2020/12/10/06/24/christmas-tree-5819465_1280.jpg"
                alt=""
              />
              <div className="p-8">
                <h4 className="text-lg mb-4 text-left">{item.title}</h4>
                <p className="text-sm text-left mb-2">{item.desc}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Carousel;
