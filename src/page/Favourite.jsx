import React, { useEffect, useState } from "react";
import { IoIosClose } from "react-icons/io";
import { Link } from "react-router-dom";
import Title from "../components/Title";
import { MdDelete } from "react-icons/md";

const Favourite = () => {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const savedItems = JSON.parse(localStorage.getItem("favorites")) || [];
    setFavorites(savedItems);
  }, []);

  const handleRemove = (index) => {
    const updatedFavorites = [...favorites];
    updatedFavorites.splice(index, 1);
    setFavorites(updatedFavorites);
    localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
  };

  return (
    <div className="container min-h-screen">
      <Title title={`My Favourite`} />
      <ul className="grid gap-4 grid-cols-1 md:grid-cols-3 mb-8">
        {favorites.map((item, index) => (
          <Link
            key={index}
            to="#"
            className="relative h-[200px] flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl"
          >
            <MdDelete
              onClick={() => handleRemove(index)}
              className="absolute bottom-4 right-4 text-right text-black w-8 h-8 cursor-pointer"
            />
            <img
              className="object-cover w-full h-28 object-top md:h-[200px] md:w-48 md:rounded-none"
              src={item.img}
              alt=""
            />
            <div className="flex flex-col justify-between p-4 leading-normal">
              <h5 className="text-left mb-2 text-xl font-bold tracking-tight text-gray-900">
                {item.title}
              </h5>
              <p className="text-left mb-3 font-normal text-gray-700">
                {/* {item.about} */}
              </p>
            </div>
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default Favourite;
