import React from "react";
import { category1, category2, category3 } from "../assets";
import styles from "../style";

const categories = () => {
  return (
    <div className=" flex lg:flex-row flex-col  items-center justify-between gap-10 mx-auto container">
      <div className="relative">
        <img src={category1} alt="" className="" />
        <div className="absolute top-72 left-12 text-white font-Inter">
          <h2 className="text-4xl">
            Green <br /> Landscapes
          </h2>
          <p className="text-sm mt-6">SHOP THESE </p>
        </div>
      </div>

      <div className="relative">
        <img src={category2} alt="" className="" />
        <div className="absolute top-72 left-12 text-white font-Inter">
          <h2 className="text-4xl">
            Colorful <br /> Indoors
          </h2>
          <p className="text-sm mt-6">SHOP THESE </p>
        </div>
      </div>

      <div className="relative">
        <img src={category3} alt="" />
        <div className="absolute top-72 left-12 text-white font-Inter">
          <h2 className="text-4xl">
            Flowering <br /> Plants
          </h2>
          <p className="text-sm mt-6">SHOP THESE </p>
        </div>
      </div>
    </div>
  );
};

export default categories;
