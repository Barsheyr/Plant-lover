import React from "react";
import { banners1, banners2 } from "../assets";
import styles from "../style";

const banners = () => {
  return (
    <div className={`lg:${styles.flexCenter} gap-10 overflow-hidden mt-10`}>
      <div className="relative" data-aos="fade-right" data-aos-delay="100">
        <img src={banners2} alt="" className="h-[70vh] w-full" />

        <div className="absolute lg:top-60 top-[50%]  left-12 text-white font-Inter">
          <h2 className="lg:text-6xl text-3xl">
            Colorful <br /> Indoors
          </h2>
          <p className="text-sm mt-6">SHOP THESE </p>
        </div>
      </div>

      <div className="relative" data-aos="fade-left" data-aos-delay="500">
        <img src={banners1} alt="" className="h-[70vh] w-full" />
        <div className="absolute lg:top-60 top-[50%] left-12 text-white font-Inter">
          <h2 className="lg:text-6xl text-3xl">
            Green <br /> Landscapes
          </h2>
          <p className="text-sm mt-6">SHOP THESE </p>
        </div>
      </div>
    </div>
  );
};

export default banners;
