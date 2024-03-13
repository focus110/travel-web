import React, { useState } from "react";
import { menu } from "./Constant";
import { motion } from "framer-motion";
import { IoCloseCircleOutline } from "react-icons/io5";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import { IoIosBookmark } from "react-icons/io";

const MobileMenu = ({ isvisible, handleIsVisible, handleModal }) => {
  const [activeMenu, setActiveMenu] = useState("Home");

  const handleMenuClick = (menu) => {
    setActiveMenu(menu);
  };

  const slideInVariants = {
    initial: {
      x: "-100%", // Initial position off-screen to the left
    },
    animate: {
      x: 0, // Animate to the center of the screen
      transition: {
        duration: 0.5, // Animation duration in seconds
        ease: "easeInOut", // Easing function
      },
    },
  };
  if (!isvisible) return null;
  return (
    <motion.div
      variants={slideInVariants}
      initial="initial"
      animate="animate"
      className="bg-white shadow-lg w-[80%] h-screen fixed z-10 p-8  md:hidden"
    >
      <div className="flex items-center justify-between border-b pb-4 mb-4">
        <a href="/">
          <img className="w-8 h-8 md:w-12 md:h-12" src={logo} alt="logo" />
        </a>
        <button>
          <IoCloseCircleOutline
            onClick={handleIsVisible}
            className="w-6 h-6 cursor-pointer"
          />
        </button>
      </div>

      <button
        onClick={() => {
          handleIsVisible();
          handleModal();
        }}
        class="w-full text-white bg-black hover:bg-[#222] transition ease-in-out duration-150 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-5"
      >
        Sign in
      </button>
      <ul className="md:hidden space-y-4 text-left">
        {menu.map((item, index) => (
          <li key={index}>
            <a
              href={item?.url}
              className={
                activeMenu === item?.name ? "text-gray-800" : "text-gray-500"
              }
              onClick={() => handleMenuClick(item?.name)}
            >
              {item?.name}
            </a>
          </li>
        ))}
        <Link to="/favourite" className="flex items-center">
          <IoIosBookmark className="w-8 h-8 cursor-pointer -ml-2" /><p className="text-gray-500">Favourite</p>
        </Link>
      </ul>
    </motion.div>
  );
};

export default MobileMenu;
