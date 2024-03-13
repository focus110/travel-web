import React from "react";
import logo from "../assets/logo.png";

const Logo = ({ size }) => {
  return (
    <img className={`${!size ? "w-12 h-12" : size}`} src={logo} alt="logo" />
  );
};

export default Logo;
