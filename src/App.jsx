import React from "react";
import NavBar from "./components/NavBar";
import Work from "./components/Work";
import Stripes from "./components/Stripes";

const App = () => {
  return (
    <div className="w-full h-screen text-white bg-zinc-900 font-['satoshi_variable']">
        <NavBar />
        <Work />
      <Stripes />
    </div>
  );
};

export default App;
