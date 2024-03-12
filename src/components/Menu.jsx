import React, { useState } from "react";
import logo from "../assets/logo.png";
import { IoMenu } from "react-icons/io5";
import { menu } from "./Constant";

const Menu = ({ handleIsVisible }) => {
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
          <ul className="hidden md:flex space-x-8">
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
          </ul>

          <IoMenu onClick={handleIsVisible} className="w-8 h-8 md:hidden" />
        </div>
      </div>
    </div>
  );
};

export default Menu;
