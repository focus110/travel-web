import React, { useState } from "react";
import logo from "../assets/logo.png";
import { IoMenu } from "react-icons/io5";
import { menu } from "./Constant";
import { IoIosBookmark } from "react-icons/io";
import { Link } from "react-router-dom";

const Menu = ({ handleIsVisible, handleModal }) => {
  const [activeMenu, setActiveMenu] = useState("Home");
  const handleMenuClick = (menu) => {
    setActiveMenu(menu);
  };
  return (
    <div className="shadow">
      <div className="container">
        <div className="flex items-center justify-between py-6">
          <a href="/">
            <img className="w-8 h-8 md:w-12 md:h-12" src={logo} alt="logo" />
          </a>
          <ul className="hidden md:flex items-center space-x-8">
            {menu.map((item, index) => (
              <li key={index} className="">
                <a
                  href={item?.url}
                  className={
                    activeMenu === item?.name
                      ? "text-gray-800"
                      : "text-gray-500"
                  }
                  onClick={() => handleMenuClick(item?.name)}
                >
                  {item?.name}
                </a>
              </li>
            ))}
            <Link to="/favourite">
              <IoIosBookmark className="w-8 h-8 cursor-pointer" />
            </Link>
            <button
              onClick={handleModal}
              class="text-white bg-black hover:bg-[#222] transition ease-in-out duration-150 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
            >
              Sign in
            </button>
          </ul>

          <IoMenu
            onClick={handleIsVisible}
            className="w-8 h-8 md:hidden cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
};

export default Menu;
