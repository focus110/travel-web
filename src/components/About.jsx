import React from "react";
import Title from "./Title";

const About = () => {
  return (
    <div className="container md:pt-8">
      <Title title={`Welcome to Colchester`} />
      <div className="flex flex-col md:flex-row items-center justify-center md:space-x-8">
        <img
          className="md:w-[400px] rounded-[10px]"
          src="https://cdn.pixabay.com/photo/2023/06/27/10/51/pier-8091934_1280.jpg"
          alt=""
        />
        <p className="md:w-[50%] text-light-grey text-left mt-8 md:mt-0">
          Greetings to Colchester! Once hailed as Britain's First City and the
          former capital of Roman Britain, our illustrious history spans over
          2000 years. When you explore our city, you'll find the historic center
          brimming with heritage at every turn. In 2022, Colchester was granted
          contemporary city status during the Queen's Platinum Jubilee
          celebrations, affirming that our identity extends beyond the past.
          Colchester of the 21st Century stands as a vibrant, modern destination
          with top-notch visitor attractions, cultural sites, and a plethora of
          excellent options for dining, drinking, and shopping. Venturing beyond
          the city center opens up opportunities to explore renowned
          destinations like Mersea Island and...
        </p>
      </div>
    </div>
  );
};

export default About;
