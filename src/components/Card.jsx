import React from "react";
import { IoIosArrowRoundForward } from "react-icons/io";

const Card = ({ width, start, text, hover}) => {
  return (
    <div className={`${width} min-h-[25rem] hover:${hover} flex flex-col justify-between rounded-md bg-zinc-800 p-5 `}
    >
      <div className="w-full ">
        <div className="flex justify-between items-center">
          <h4>heading</h4>
          <IoIosArrowRoundForward />
        </div>
        <h1 className="font-medium text-[2rem] py-[1rem]">what to do</h1>
      </div>
      <div className="w-full  mt-[19vh]">
        {start && (
          <h1 className="text-[3rem] font-bold tracking-tight leading-none">
            Start a Project
          </h1>
        )}

        {text && (
          <>
            <button className="w-[10vw] h-[3vw] rounded-full mt-2 border-[.01rem]">
              Contact Us
            </button>
            <p className="text-sm mt-[.7rem] text-zinc-500 font-semibold">
              Lorem ipsum dolor sit amet consectetur adipisicing.
            </p>
          </>
        )}
      </div>
    </div>
  );
};

export default Card;
