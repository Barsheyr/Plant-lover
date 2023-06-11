import React from "react";
import { hero, hflower1, hflower2 } from "../assets";
import { contentsleft, contentsright } from "../constants";
import styles from "../style";

const header = () => {
  return (
    <div className=" w-full lg:h-[100vh] overflow-hidden pt-[10%]  relative">
      <img className="absolute top-20 right-[1%]" src={hflower1} alt="" />
      <div className="flex flex-col md:px-10 lg:px-5 lg:flex lg:flex-row items-center justify-between lg:mt-0 mt-[25%] mx-auto max-w-5xl">
        <ul className="lg:w-1/3" data-aos="fade-right" data-aos-delay="500">
          {contentsleft.map((con, index) => (
            <li key={con.id}>
              <div className="flex gap-10 font-Inter mt-10 lg:px-0 px-10">
                <div>
                  <p className="bg-circleColor w-14 h-14 text-white rounded-full px-6 py-3.5">
                    {con.id}
                  </p>
                </div>
                <div className="space-y-2">
                  <h4 className="text-headerColor text-xl font-bold">
                    {con.title}
                  </h4>
                  <p className="text-smallParagraph text-sm"> {con.content} </p>
                </div>
              </div>
            </li>
          ))}
        </ul>

        <img
          src={hero}
          alt=""
          className="lg:w-1/3"
          data-aos="fade-down"
          data-aos-delay="500"
        />

        <ul className=" lg:w-1/3" data-aos="fade-left" data-aos-delay="500">
          {contentsright.map((conr, index) => (
            <li key={conr.id}>
              <div className="flex gap-10 font-Inter mt-10 lg:px-0 px-10">
                <div className="">
                  <p className="bg-circleColor w-14 h-14 text-white rounded-full px-6 py-3.5">
                    {conr.id}
                  </p>
                </div>
                <div className="space-y-2">
                  <h4 className="text-headerColor text-xl font-bold">
                    {conr.title}
                  </h4>
                  <p className="text-smallParagraph text-sm">{conr.content}</p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <img src={hflower2} alt="" className=" absolute top-[70%]" />
    </div>
  );
};

export default header;
