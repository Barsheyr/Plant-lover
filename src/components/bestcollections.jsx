import React from "react";
import styles from "../style";

// import best coll pic
import { bestcol1, bestcol2, bestcol3, bcflower1, bcflower2 } from "../assets";

const bestcollections = () => {
  return (
    <section className="relative lg:h-[100vh] min-h-[100vh]">
      <img src={bcflower1} alt="" className="absolute right-0" />
      <div
        className="mx-auto container px-10 lg:px-0"
        data-aos="fade-down"
        data-aos-delay="500"
      >
        <div className="lg:flex flex-col justify-center items-right mx-auto max-w-5xl pt-32 lg:px-44 space-y-9">
          <h5 className="text-greenish font-Cursor text-[50px] text-left">
            Most Popular
          </h5>
          <h1 className="text-5xl font-Inter tracking-widest">
            Indoor Air Purifier Plants <br /> for your Living Space
          </h1>
          <p className="text-smallParagraph font-Inter">
            Scientific research indicates that plants communicate with insects,
            animals, human beings and other plants in order to keep themselves
            alive and safe. Evidence also reveals that plants are telling us how
            to achieve health and wholeness for humanity and the earth herself.
          </p>
          <a href="" className="font-Inter font-bold text-lg">
            View all products
          </a>
        </div>
      </div>

      {/* <img src={bcflower2} alt="" className=" absolute top-9 z-0" /> */}

      <div className="flex flex-col items-center  gap-5 lg:pl-32 px-10 lg:flex-row lg:place-content-end  mt-14 overflow-hidden">
        <div data-aos="fade-right" data-aos-delay="700">
          <img src={bestcol1} alt="" className="w-100" />
          <p className="font-Inter text-xl mt-5"> Cane plants </p>
        </div>

        <div data-aos="fade-down" data-aos-delay="700">
          <img src={bestcol2} alt="" />
          <p className="font-Inter text-xl mt-5"> Ficus plants </p>
        </div>

        <div className="w-50" data-aos="fade-left" data-aos-delay="700">
          <img src={bestcol3} alt="" className="" />
          <p className="font-Inter text-xl mt-5 mb-20"> Vinca vines </p>
        </div>
      </div>
    </section>
  );
};

export default bestcollections;
