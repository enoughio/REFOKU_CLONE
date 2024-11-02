import React from "react";
import Button from "./Button";

const Product = ({ item }) => {
  const { title, description, live, isCase } = item;

  return (
    <div className="w-full  py-5 text-white">
      <div className="max-w-screen-xl mx-auto flex items-center justify-between w-[60%] py-[2vh]">
        <h1 className="text-6xl capitalize font-semibold">{title}</h1>
        <div className="dets w-1/3 flex flex-col gap-4">
          <p>{description}</p>
          <div className="flex items-center gap-4">
            {live && <Button text="Live Demo" />}
            {isCase && <Button text="Case Study" />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
