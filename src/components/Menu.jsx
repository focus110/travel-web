import React from "react";
import logo from "../assets/logo.png";

const Menu = () => {
  const menu = ["Home", "Recommender", "Plan", "Blog"];
  return (
    <div className="container">
      <div className="flex items-center justify-between py-8">
        <a href="/">
          <img className="w-8 h-8 md:w-12 md:h-12" src={logo} alt="logo" />
        </a>
        <ul className="flex space-x-8">
          {menu.map((item, index) => (
            <li key={index} className="text-lg">
              <a href="/"> {item}</a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Menu;
