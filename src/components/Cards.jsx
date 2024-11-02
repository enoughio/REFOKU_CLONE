import React from "react";
import Card from "./Card";

const Cards = () => {
  return (
    <div className="w-full">
      <div className="max-w-screen-xl mx-auto py-20 gap-3 flex items-center ">
        <Card width={"basis-1/3"} start={true} text={false} />
        <Card width={"basis-2/3"} start={false} text={true} hover="bg-purple-400" />
      </div>
    </div>
  );
};

export default Cards;