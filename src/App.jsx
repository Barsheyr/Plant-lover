import React from "react";
import styles from "./style";
import "./App.css";

import Aos from "aos";
import "aos/dist/aos.css";

import {
  Navbar,
  Header,
  Banners,
  Bestcollections,
  Blogpost,
  Categories,
  Footer,
  Newsletter,
} from "./components";
import { newslaterbg } from "./assets";

const App = () => {
  Aos.init({
    duration: 2000,
    delay: 400,
  });

  return (
    <div className="">
      <div>
        <Navbar />

        <div className="relative">
          <Header />
        </div>

        <Banners />

        <div className="bg-[#BFD5BB]">
          <Bestcollections />
        </div>

        <div className="relative">
          {/* <img src={newslaterbg} alt="" className=" mt-10 h-[80vh]" /> */}
          <Newsletter />
        </div>
        <Categories />

        <Blogpost />

        <Footer />
      </div>
    </div>
  );
};

export default App;
