import React, { useState } from "react";
import { navLinks } from "../constants";
import { logo } from "../assets";
import styles from "../style";
import { FiSearch, FiHeart } from "react-icons/fi";
import { BsPerson, BsBagCheck } from "react-icons/bs";
import { RiMenu4Fill, RiCloseFill } from "react-icons/ri";

const navbar = () => {
  const [isActive, setIsActive] = useState(false);
  const [nav, setNav] = useState(false);

  return (
    <nav
      className={`${
        isActive ? "bg-black py-[16px]" : "bg-[#BFD5BB]"
      } fixed w-full lg:px-20 px-5 z-30 flex flex-row items-center shadow-xl justify-between py-2 font-Inter text-xl`}
    >
      <div>
        <img src={logo} alt="" />
      </div>

      <ul className={`lg:${styles.flexCenter} gap-8  hidden`}>
        {navLinks.map((nav, index) => (
          <li>
            <a href=""> {nav.title}</a>
          </li>
        ))}
      </ul>

      <div className="lg:flex gap-5 hidden">
        <FiSearch />
        <div className="w-0.5 h-5 bg-slate-600"> </div>

        <BsPerson />
        <FiHeart />
        <BsBagCheck />
      </div>

      <div onClick={() => setNav(!nav)} className="lg:hidden">
        {nav ? <RiCloseFill size={20} /> : <RiMenu4Fill size={20} />}
      </div>

      <div
        className={
          nav
            ? "fixed left-0 flex flex-col justify-center items-center top-0 w-[80%] h-full border-r border-r-yellow-900 bg-[#BFD5BB] ease-in-out duration-500"
            : "fixed left-[-100%]"
        }
      >
        <ul className="text-center space-y-5">
          {navLinks.map((nav, index) => (
            <li>
              <a href=""> {nav.title}</a>
            </li>
          ))}
        </ul>

        <div className="flex flex-row items-center justify-center gap-5 mt-10">
          <FiSearch />
          <div className="w-0.5 h-5 bg-slate-600"> </div>

          <BsPerson />
          <FiHeart />
          <BsBagCheck />
        </div>
      </div>
    </nav>
  );
};

export default navbar;
