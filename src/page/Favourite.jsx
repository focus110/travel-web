import React, { useEffect, useState } from "react";
import { IoIosClose } from "react-icons/io";
import { Link } from "react-router-dom";
import Title from "../components/Title";

const Favourite = () => {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const savedItems = JSON.parse(localStorage.getItem("favorites")) || [];
    setFavorites(savedItems);
  }, []);

  const removeFav = () => {};

  return (
    <div className="container min-h-screen">
      <Title title={`My Favourite`} />
      {/* <ul>
        {favorites.map((item, index) => (
          <li key={index}>{item.title}</li>
        ))}
      </ul> */}

      <div className="grid gap-4 grid-cols-1 md:grid-cols-3">
        <Link
          to="#"
          className="relative h-[200px] flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl"
        >
          <IoIosClose
            onClick={removeFav}
            className="absolute top-8 right-8 text-right text-black w-8 h-8 cursor-pointer"
          />
          <img
            className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"
            src="/docs/images/blog/image-4.jpg"
            alt=""
          />
          <div className="flex flex-col justify-between p-4 leading-normal">
            <h5 className="text-left mb-2 text-2xl font-bold tracking-tight text-gray-900">
              Noteworthy technology acquisitions 2021
            </h5>
            <p className="text-left mb-3 font-normal text-gray-700">
              Here are the biggest enterprise technology acquisitions of 2021 so
              far, in reverse chronological order.
            </p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Favourite;
