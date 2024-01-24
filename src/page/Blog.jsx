import React, { useState } from "react";
import { articles } from "../components/Constant";
import Sidebar from "../components/Sidebar";

const Blog = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  const filteredArticle =
    selectedCategory === "all"
      ? articles
      : articles.filter((item) => item.category === selectedCategory);
  return (
    <div className="container">
      <h4 className="text-2xl mb-8">Blog</h4>
      <div>
        <div>
          <div className="flex flex-col lg:flex-row  xl:space-x-8 overflow-x-scroll no-scrollbar md:pt-8">
            <div className="lg:w-[80%] grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 space-x-2">
              {filteredArticle.length !== 0 ? (
                filteredArticle.map((item, index) => (
                  <div className="md:w-[300px] overflow-hidden mb-8 md:mb-8">
                    <img className="mb-2" src={item?.img} alt={item.title} />
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
                ))
              ) : (
                <div className="h-screen">
                  <h4 className="text-4xl py-[100px]">No posts found</h4>
                </div>
              )}
            </div>

            <Sidebar
              handleCategoryChange={handleCategoryChange}
              selectedCategory={selectedCategory}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
