import React, { useState } from "react";
import { menu } from "./Constant";
import { motion } from "framer-motion";
import { IoCloseCircleOutline } from "react-icons/io5";
import logo from "../assets/logo.png";

const MobileMenu = ({ isvisible, handleIsVisible }) => {
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
          <IoCloseCircleOutline onClick={handleIsVisible} className="w-6 h-6" />
        </button>
      </div>
      <ul className="md:hidden space-y-4 text-left">
        {menu.map((item, index) => (
          <li key={index}>
            <a
              href="/"
              className={
                activeMenu === item ? "text-gray-800" : "text-gray-500"
              }
              onClick={() => handleMenuClick(item)}
            >
              {item}
            </a>
          </li>
        ))}
      </ul>
    </motion.div>
  );
};

export default MobileMenu;
