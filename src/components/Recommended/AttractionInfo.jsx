import React from "react";
import { IoIosInformationCircleOutline } from "react-icons/io";
import Title from "./Title";

const AttractionInfo = () => {
  return (
    <div className="gap-4 border-2 border-gray-300 py-4 mb-8">
      <div className="flex gap-4 border-b-2 border-gray-300 px-4 pb-4">
        <IoIosInformationCircleOutline className="w-8 h-8" />

        <Title name=" Attraction Information" />
      </div>

      <div className="px-4 pt-5">
        <div className="mb-4">
          <p className="text-left text-gray-500">
            Ever wanted to turn back the clock? Or more specifically, go back in
            time to AD 878? If you have a thirst for epic events in history,
            you'll love browsing through artefacts and watching Anglo-Saxon life
            unfold in the present moment... Step into a cutting-edge immersive
            storytelling experience and uncover the fascinating history in
            Anglo-Saxon England. Learn all about the legacy of King Alfred and
            meet ordinary Anglo folks from the slave and the thief to the
            soldier. Curious? Read on for the ultimate guide to this unique
            immersive experience
          </p>
        </div>
        <p className="text-left text-gray-500 mb-5">
          Book in advance for cheapest tickets
        </p>
        <p className="text-left text-gray-500">
          Find other attractions similar to 878 AD by visiting our attraction
          tickets section.
        </p>
      </div>
    </div>
  );
};

export default AttractionInfo;
