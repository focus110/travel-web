import React from "react";
import { IoTicketOutline } from "react-icons/io5";
import Title from "./Title";

const Pricing = () => {
  return (
    <div className="gap-4 border-2 border-gray-300 py-4 mb-8">
      <div className="flex gap-4 border-b-2 border-gray-300 px-4 pb-4">
        <IoTicketOutline className="w-8 h-8" />
        <Title name="Pricing & Tickets" />
      </div>

      <div className="px-4 pt-5">
        <div className="mb-4">
          <p className="text-left text-gray-500">General Admission</p>
          <p className="text-left text-gray-500">Adult £12.50</p>
          <p className="text-left text-gray-500">Child (5-15) £8.50</p>
          <p className="text-left text-gray-500">
            Family (up to 5 people, 2 adults max.) £39.50
          </p>
          <p className="text-left text-gray-500">Concession £10.00</p>
          <p className="text-left text-gray-500">Art Fund Member £6.25</p>
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

export default Pricing;
