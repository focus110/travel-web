import React from "react";
import logo from "../assets/logo.png";
import { IoMenu } from "react-icons/io5";
import { menu } from "./Constant";

const Menu = ({ handleIsVisible }) => {
  return (
    <div className="container">
      <div className="flex items-center justify-between py-6">
        <a href="/">
          <img className="w-8 h-8 md:w-12 md:h-12" src={logo} alt="logo" />
        </a>
        <ul className="hidden md:flex space-x-8">
          {menu.map((item, index) => (
            <li key={index} className="text-lg">
              <a href="/"> {item}</a>
            </li>
          ))}
        </ul>

        <IoMenu onClick={handleIsVisible} className="w-8 h-8 md:hidden" />
      </div>
    </div>
  );
};

export default Menu;
