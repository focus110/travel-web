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
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 items-center space-x-2">
              {articles.map((item, index) => (
                <a
                  href={"/#"}
                  className="md:w-[300px] overflow-hidden mb-8 md:mb-8"
                >
                  <img
                    className="mb-2"
                    src="https://cdn.pixabay.com/photo/2020/12/10/06/24/christmas-tree-5819465_1280.jpg"
                    alt=""
                  />
                  <div className="pb-4">
                    <a href="/#" className="hover:text-gray-500">
                      <h4 className="text-lg mb-4 text-left">{item.title}</h4>
                    </a>
                    <p className="text-sm text-left mb-2">{item.desc}</p>
                  </div>
                </a>
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
