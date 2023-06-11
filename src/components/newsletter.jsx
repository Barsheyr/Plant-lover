import React from "react";
import { newslaterbg } from "../assets";

const newsletter = () => {
  return (
    // <div className="absolute lg:top-[35%]  top-[20%] lg:left-[25%] left-[20%] right-[20%] m-auto ">
    <div>
      <h1 className="lg:text-5xl text-3xl font-bold  text-center font-Inter">
        Get a FREE Plant Care Guide <br /> by joining our Newsletter
      </h1>
      <div className="mt-10 flex lg:flex-row flex-col font-Inter">
        <input
          type="email"
          placeholder="Enter Your Email Address Here"
          className="lg:w-[70%] h-12
         bg-[#F3F3F3] pl-5"
        />
        <button className=" lg:w-[30%] h-12 bg-lightgreen text-white">
          Subscribe
        </button>
      </div>
    </div>
  );
};

export default newsletter;
