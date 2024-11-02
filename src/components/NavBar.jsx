import React from "react";
import Button from "./Button";

const NavBar = () => {
  return (
    <div className="flex justify-between items-center max-w-screen-xl mx-auto py-5  border-b-[1px]">
      <div className=" flex  gap-10 ">
        <img
          src="https://assets-global.website-files.com/6334198f239547d0f9cd84b3/63349803431f1562dccf1802_refokus%20logo.svg"
          alt="logo"
        />
        <div className="links mx-16 flex items-center gap-10">
          {["Home", "Work", "Culture", "", "news"].map((elem, i) => {
            return (
              <>
                <div key={i} className="flex items-center gap-2">
                  {elem.length === 0 ? (
                    <span className="w-[1px] h-5 bg-zinc-400"></span>
                  ) : (
                    i === 1 && (
                      <span
                        style={{
                          boxShadow: "0 0 0.25em #00FF19",
                        }}
                        className="w-[3px] h-[3px] rounded-full bg-green-600"
                      ></span>
                    )
                  )}
                  <a href="#">{elem}</a>
                </div>
              </>
            );
          })}
        </div>
      </div>

      <Button />
    </div>
  );
};

export default NavBar;
