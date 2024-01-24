import React, { useState } from "react";
import Title from "../components/Title";
import { activities, categories } from "../components/Constant";

const Plan = () => {
  const [selectedActivity, setSelectedActivity] = useState("all");

  const handleActivityChange = (activity) => {
    setSelectedActivity(activity);
  };

  const filteredActivities =
    selectedActivity === "all"
      ? categories
      : categories.filter((item) => item.category === selectedActivity);
  return (
    <div className={`container ${activities.length !== 0 ? "" : "h-screen"}`}>
      <Title title={`Plan`} />
      <div>
        <h4 className="text-4xl text-left mb-2">Things to Do</h4>
        <p className="text-[20px] leading-[1.5] text-left mb-14 text-[#333333]">
          Colchester and its surrounding area offer a diverse range of
          activities, attractions, and places to explore. Whether you're with
          family or planning a date, there's something for everyone, regardless
          of the duration of your stay or the weather conditions. All of
          Colchester's top attractions are covered, providing a comprehensive
          guide to the best things to do in the city. Whether you're spending a
          few hours or an entire week in Colchester, there's a curated selection
          of themes to help you plan a perfect day out based on your interests
          and budget. In the city center, museums, galleries, historic
          buildings, and heritage sites await exploration. Combined with
          excellent entertainment options and fantastic shopping experiences,
          your trip may inspire you to extend your stay. Venturing beyond the
          city, Colchester Zoo stands out as a top attraction, complemented by
          scenic walks and cycling routes that showcase the area's natural
          beauty. For families with children, the Great For Kids page provides
          tailored recommendations, while budget-conscious visitors can explore
          tips on enjoying Colchester For Free. To stay updated on events, the
          What's On Calendar is a valuable resource, offering insights into the
          city's vibrant events program. After a day of sightseeing, unwind in a
          restaurant or bar, and perhaps experience the friendly nightlife that
          Colchester has to offer.
        </p>
        <div className="flex overflow-x-scroll py-4 no-scrollbar space-x-2">
          {filteredActivities.map((item, index) => (
            <button
              // onClick={() => handleActivityChange(item)}
              className={`${
                item === selectedActivity
                  ? "bg-[#111111] text-white"
                  : "bg-gray-100"
              } grid p-4 mb-4 hover:bg-[#111111] hover:text-white ease-in-out duration-300`}
              key={index}
            >
              {item}
            </button>
          ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 space-x-0">
          {activities.map((item, index) => (
            <div className="md:w-[300px]  mb-8 md:mb-8">
              <img
                className="w-[300px] h-[300px] mb-2 object-cover"
                src={item?.img}
                alt={item.title}
              />
              <div className="pb-4">
                <a
                  href={"/plan/" + index}
                  // href={"/blog/" + item.title.split(" ").join("-")}
                  className="hover:text-gray-500 duration-75"
                >
                  <h4 className="text-lg mb-4 text-left">{item.title}</h4>
                </a>
                <p className="text-sm text-left mb-2">
                  {item.about.slice(0, 150)}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Plan;
