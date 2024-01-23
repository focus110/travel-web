import React from "react";
import { articles } from "./Constant";

const Carousel = () => {
  return (
    <div>
      <div className="overflow-x-scroll no-scrollbar md:pt-8">
        <div className="flex flex-col justify-center md:flex-row md:space-x-8 px-4 pb-4">
          {articles.map((item, index) =>
            index > 2 ? null : (
              <div className="md:w-[300px] overflow-hidden mb-8 md:mb-0">
                <img className="mb-2" src={item?.img} alt={item?.title} />
                <div className="pb-4">
                  <h4 className="text-lg mb-4 text-left">
                    <a
                      href={"/blog/" + index}
                      className="hover:text-gray-500 duration-75 leading-[1.1]"
                    >
                      {item.title}
                    </a>
                  </h4>
                  <p className="text-sm text-left mb-2">{item.desc}</p>
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default Carousel;
