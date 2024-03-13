import React from "react";
import { CiClock1 } from "react-icons/ci";
import Title from "./Title";

const OpeningTimes = ({ pass }) => {
  return (
    <div className="gap-4 border-2 border-gray-300 py-4 mb-8">
      <div className="flex gap-4 border-b-2 border-gray-300 px-4 pb-4">
        <CiClock1 className="w-8 h-8" />

        <Title name="Opening Times" />
      </div>

      <div className="px-4 pt-5">
        <div className="mb-4">
          <h2 className="text-left font-bold  text-black">Term Time</h2>
          <p className="text-left text-gray-500">
            Thursday to Saturday 10:00 - 17:00
          </p>
          <p className="text-left text-gray-500">Sunday 11:00 - 17:00</p>
        </div>

        <div className="mb-4">
          <p className="text-left font-bold  text-black">School Holidays</p>
          <p className="text-left text-gray-500">
            Monday to Saturday 10:00 - 17:00
          </p>
          <p className="text-left text-gray-500">Sunday 11:00 - 17:00</p>
        </div>

        <p className="text-left text-gray-500 mb-5">
          Book in advance for cheapest tickets
        </p>
        <p className="text-left text-gray-500">
          Closed Christmas and Boxing Day, New Year's Day and Easter Sunday
        </p>
      </div>
    </div>
  );
};

export default OpeningTimes;
