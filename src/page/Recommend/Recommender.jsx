import React, { useEffect, useState } from "react";
import Title from "../../components/Title";
import { recommended } from "../../components/Constant";
import Filter from "../../components/Filter";
import Map from "../../components/Map/Map";
import { IoIosBookmark } from "react-icons/io";
import { Toaster, toast } from "sonner";
import { IoBookmarkOutline } from "react-icons/io5";

const Recommender = () => {
  const [savedItems, setSavedItems] = useState([]);

  useEffect(() => {
    const savedItems = JSON.parse(localStorage.getItem("favorites")) || [];
    setSavedItems(savedItems);
  }, []);

  const handleSave = (item) => {
    if (!savedItems.some((savedItem) => savedItem.id === item.id)) {
      const updatedItems = [...savedItems, item];
      setSavedItems(updatedItems);
      localStorage.setItem("favorites", JSON.stringify(updatedItems));
      toast.success("Successfully added to favourite");
    } else {
      toast.warning("Already added");
    }
  };
  return (
    <div className="container min-h-screen">
      <Toaster richColors />
      <Title title={`Recommender for You`} />
      <Map />
      <Filter />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 text-left mb-8">
        {recommended.map((item, i) => (
          <div
            key={i}
            class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
          >
            <a
              href={"/attractions/8sDdsa"}
              className="overflow-hidden h-[200px]"
            >
              <img
                class="w-full h-[200px] object-cover rounded-t-lg"
                src={item.img}
                alt=""
              />
            </a>
            <div class="relative p-5">
              <a href="/attractions/8sDdsa">
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  {item.title}
                </h5>
              </a>
              <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                {item.about.slice(0, 80)}
                {"..."}
              </p>
              <div className="flex justify-between items-center">
                <a
                  href="/attractions/8sDdsa"
                  class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Explore
                  <svg
                    class="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 10"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M1 5h12m0 0L9 1m4 4L9 9"
                    />
                  </svg>
                </a>
                {!savedItems.some((savedItem) => savedItem.id === item.id) ? (
                  <IoBookmarkOutline
                    onClick={() => handleSave(item)}
                    className="w-8 h-8 cursor-pointer text-white"
                  />
                ) : (
                  <IoIosBookmark
                    onClick={() => handleSave(item)}
                    className="w-8 h-8 cursor-pointer text-white"
                  />
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Recommender;
