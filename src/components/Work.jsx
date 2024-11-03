import React, { useState } from "react";
import { motion, useScroll } from "framer-motion";

const Work = () => {
  const [images, setImages] = useState([
    {
      url: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef09178195ce0073e38f3_Refokus%20Tools-1.png",
      top: "50%",
      left: "50%",
      isActive: true,
    },
    {
      url: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef0accfe1b3e66bc55462_Refokus%20Tools.png",
      top: "56%",
      left: "44%",
      isActive: false,
    },
    {
      url: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef0acbc45cb2f4fc5c6b2_Yahoo.png",
      top: "45%",
      left: "56%",
      isActive: false,
    },
    {
      url: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef092455ce2cf591e52d1_Rainfall.png",
      top: "60%",
      left: "53%",
      isActive: false,
    },
    {
      url: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef0ac7e7179d210dc41f0_Summon.png",
      top: "43%",
      left: "40%",
      isActive: false,
    },
    {
      url: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef0af108a465002975acd_Showcase%20Websites%20(1).png",
      top: "65%",
      left: "55%",
      isActive: false,
    },
  ]);

  const { scrollYProgress } = useScroll();

  
  // useMotionValueEvent(scrollYProgress, "change", (latest) => {
    //   setActive(latest);
    // });
    

  // Handler to set active images based on the current scroll position
  function setActive(arr) {
    setImages((prev) => {
      return prev.map((item, index) => {
       return arr.indexOf(index) === -1
          ? { ...item, isActive: false }
          : { ...item, isActive: true };
      });
    });
  }



  // Scroll listener
  scrollYProgress.on("change", (latest) => {
    const scrollPercentage = Math.floor(latest * 100);
    switch (scrollPercentage) {
      case 0:
        setActive([]);
        break;
      case 1:
        setActive([0]);
        break;
      case 2:
        setActive([0, 1]);
        break;
      case 3:
        setActive([0, 1, 2]);
        break;
      case 4:
        setActive([0, 1, 2, 3]);
        break;
      case 5:
        setActive([0, 1, 2, 3, 4]);
        break;
      default:
        setActive([0, 1, 2, 3, 4, 5]);
        break;
    }
  });

  return (
    <div className="w-full">
      <div className="relative max-w-screen-xl mx-auto text-center leading-none ">
        <h1 className="text-[40vw] select-none tracking-tight font-medium">
          work
        </h1>
        <div className="absolute w-full h-full top-0 left-0">
          {images.map((image, index) =>
            image.isActive ? (
              <img
                className="absolute rounded-lg w-[15vw] h-[15vw] translate-y-[-50%] translate-x-[-50%]"
                style={{
                  top: image.top,
                  left: image.left,
                }}
                src={image.url}
                key={index}
                alt={`Image ${index}`}
              />
            ) : null
          )}
        </div>
      </div>
    </div>
  );
};

export default Work;
