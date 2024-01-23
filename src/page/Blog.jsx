import React from "react";
import { articles } from "../components/Constant";
import Sidebar from "../components/Sidebar";

const Blog = () => {
  return (
    <div className="container">
      <h4 className="text-2xl mb-8">Blog</h4>
      <div>
        <div>
          <div className="flex flex-col lg:flex-row  xl:space-x-8 overflow-x-scroll no-scrollbar md:pt-8">
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 space-x-2">
              {articles.map((item, index) => (
                <div className="md:w-[300px] overflow-hidden mb-8 md:mb-8">
                  <img
                    className="mb-2"
                    src={item?.img}
                    alt={item.title}
                  />
                  <div className="pb-4">
                    <a
                      href={"/blog/" + index}
                      // href={"/blog/" + item.title.split(" ").join("-")}
                      className="hover:text-gray-500 duration-75"
                    >
                      <h4 className="text-lg mb-4 text-left">{item.title}</h4>
                    </a>
                    <p className="text-sm text-left mb-2">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <Sidebar />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
