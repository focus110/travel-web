import React, { useState } from "react";
import Menu from "../components/Menu";
import Banner from "../components/Banner";
import MobileMenu from "../components/MobileMenu";

const Home = () => {
  const [isvisible, setIsVisible] = useState(false);
  const handleIsVisible = () => {
    setIsVisible(!isvisible);
  };
  return (
    <div className="">
      <MobileMenu isvisible={isvisible} handleIsVisible={handleIsVisible} />
      <Menu handleIsVisible={handleIsVisible} />
      <Banner />
    </div>
  );
};

export default Home;
