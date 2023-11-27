import React, { useState } from "react";
import Menu from "../components/Menu";
import Banner from "../components/Banner";
import MobileMenu from "../components/MobileMenu";
import Footer from "../components/Footer";

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
      <Footer />
    </div>
  );
};

export default Home;
