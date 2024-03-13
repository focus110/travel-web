import React from "react";
import OpeningTimes from "../../components/Recommended/OpeningTimes";
import Pricing from "../../components/Recommended/Pricing";

const Sidebar = () => {
  return (
    <div className="md:w-[30%]">
      <OpeningTimes />
      <Pricing />
    </div>
  );
};

export default Sidebar;
