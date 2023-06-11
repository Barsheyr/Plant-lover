import React from "react";
import { blog1, blog2, blog3, blog4, blog5 } from "../assets";
import styles from "../style";

const blogpost = () => {
  return (
    <section className="mt-20">
      <div className="font-Inter mx-auto max-w-2xl flex flex-col px-10 lg:px-0 lg:text-left text-center space-y-5">
        <h1 className="text-6xl"> Latest blog posts </h1>
        <p className="text-[#717171]">
          Evidence also reveals that plants are telling us how to achieve health
          and wholeness for humanity and the earth herself.
        </p>
        <p className="font-bold text-xl"> View all </p>
      </div>

      <div
        className={`lg:${styles.flexCenter}  text-center px-10 lg:px-0 gap-2 mx-auto max-w-6xl mt-14 `}
      >
        <div className="1 space-y-5 flex flex-col items-center justify-center">
          <img src={blog1} alt="" />
          <h2 className="font-Inter text-3xl">
            Decorative touches for your design
          </h2>
          <p className="font-Opensans text-[#58575B] pb-10  text-sm">
            Pharetra vitae sem magna ut duis eu senectus sem risus. Morbi non,
            semper vestibulum euismod accumsan ...
          </p>
        </div>
        <div className="2 space-y-8 flex flex-col items-center justify-center">
          <img src={blog2} alt="" />
          <h2 className="font-Inter text-3xl">
            Giftable scents which warms the heart
          </h2>
          <p className="font-Opensans text-[#58575B] pb-10  text-sm">
            Pharetra vitae sem magna ut duis eu senectus sem risus. Morbi non,
            semper vestibulum euismod accumsan ...
          </p>
        </div>
        <div className="3 space-y-5 flex flex-col items-center justify-center">
          <img src={blog3} alt="" />
          <h2 className="font-Inter text-3xl">
            Creative ideas to make this holiday special
          </h2>
          <p className="font-Opensans text-[#58575B] mb-10 text-sm">
            Pharetra vitae sem magna ut duis eu senectus sem risus. Morbi non,
            semper vestibulum euismod accumsan ...
          </p>
        </div>
      </div>
    </section>
  );
};

export default blogpost;
