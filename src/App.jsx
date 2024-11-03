import React from "react";
import NavBar from "./components/NavBar";
import Work from "./components/Work";
import Stripes from "./components/Stripes";
import Products from "./components/products";
import Marquees from "./components/Marquees";
import Cards from "./components/Cards";
import Footer from "./components/Fotter";
import LocomotiveScroll from 'locomotive-scroll';

const locomotiveScroll = new LocomotiveScroll();

const App = () => {
  return (
    <div className="w-full text-white bg-zinc-900  font-['satoshi_variable']">
      <NavBar />
      <Work />
      <Stripes />
      <Products />
      <Marquees />
      <Cards />
      <Footer />
    </div>
  );
};

export default App;
