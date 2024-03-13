import React from "react";
import Sidebar from "./Sidebar";
import Maincontent from "./Maincontent";
import LatestArticle from '../LatestArticle'

const RecommendedSingle = () => {
  return (
    <div class="container min-h-screen">
      <div className="flex flex-col md:flex-row gap-8 justify-between mt-5">
        <Maincontent />
        <Sidebar />
      </div>
      <LatestArticle />
    </div>
  );
};

export default RecommendedSingle;
