import React from "react";
import { logo } from "../assets";

const footer = () => {
  return (
    <footer className="min-h-[40vh] mt-20 bg-[#BFD5BB]">
      <div className="mx-auto max-w-6xl">
        <div className="py-20 text-center flex flex-col lg:flex-row item-center justify-between ">
          <div>
            <h1 className="text-greenish font-Cursor text-5xl">PlantLover .</h1>
          </div>

          <div className="mt-10 lg:mt-0">
            <h1 className="text-2xl font-Inter"> Pages </h1>
            <ul className="space-y-2 mt-2 font-Inter text-[#646464]">
              <li>
                <a href="#"> Main Page </a>
              </li>
              <li>
                <a href="#"> Our Story </a>
              </li>
              <li>
                <a href="#"> Blog </a>
              </li>
              <li>
                <a href="#"> Contact Us </a>
              </li>
              <li>
                <a href="#"> FAQ </a>
              </li>
              <li>
                <a href="#"> Privacy </a>
              </li>
            </ul>
          </div>

          <div className="mt-10 lg:mt-0">
            <h1 className="text-2xl font-Inter"> Shop </h1>
            <ul className="space-y-2 mt-2 font-Inter text-[#646464]">
              <li>
                <a href="#"> All collections </a>
              </li>
              <li>
                <a href="#"> Collection </a>
              </li>
              <li>
                <a href="#"> Product Page </a>
              </li>
            </ul>
          </div>

          <div className="mt-10 lg:mt-0">
            <h1 className="text-2xl font-Inter"> Follow Us </h1>
            <ul className="space-y-2 mt-2 font-Inter text-[#646464]">
              <li>
                <a href="#"> Instagram </a>
              </li>
              <li>
                <a href="#"> Facebook </a>
              </li>
              <li>
                <a href="#"> Twitter </a>
              </li>
              <li>
                <a href="#"> Pinterest </a>
              </li>
              <li>
                <a href="#"> Youtube </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="h-0.5 w-full bg-gray-400"></div>

        <div className="font-Inter py-10 p">
          &copy; 2023 PlantLover. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default footer;
