import React, { useState } from "react";
import Product from "./product";
import { motion } from "framer-motion";
import arqitel from "../assets/arqitel.mp4";
import ttr from "../assets/ttr.mp4";
import yir from "../assets/yir.mp4";
import yahoo from "../assets/yahoo.mp4";
import rainfall from "../assets/rainfall.mp4";

const Products = () => {
  var products = [
    {
      title: "Arqitel",
      description:
        "With a continuous 3D animation, we showcase Arqitel approach and show how migration data translates into real estate.",
      live: true,
      isCase: false,
    },
    {
      title: "TTR",
      description:
        "We've created an interactive site using generative AI to allow users to engage with our thinking about Ai, industry trends and design.",
      live: true,
      isCase: false,
    },
    {
      title: "YIR 2022",
      description:
        "Our second year was filled with great events, exciting projects, awards and amazing people - so we made another showcase to celebrate.",
      live: true,
      isCase: false,
    },
    {
      title: "Yahoo!",
      description:
        "We enhanced the New York Fashion Week, by creating a fully digital AR fashion experience for Yahoo and Maisie Wilen, featuring holographic 3D models and an integrated web shop.",
      live: true,
      isCase: true,
    },
    {
      title: "Rainfall",
      description:
        "We crafted a website for Rainfall Ventures, developing prototypes and custom code that ultimately allows their team to update content regularly and with ease.",
      live: true,
      isCase: true,
    },
  ];

  const [pos, setPos] = useState(0);
  const HandelPos = (val) => {
    setPos(val * 22);
  };

  return (
    <div className="mt-[6vw] relative">
      {products.map((Prod, index) => {
        return (
          <Product
            item={Prod}
            HandelPos={HandelPos}
            count={index}
            key={index}
          />
        );
      })}
      <div className="absolute top-0 w-full h-full pointer-events-none ">
        <motion.div
          animate={{ y: pos + `rem` }}
          initial={{ y: pos }}
          transition={{ ease: [0.65, 0, 0.35, 1], duration: 0.5 }}
          className={`  widnow w-[35%] h-[22rem]  absolute left-[24%] overflow-hidden rounded-md `}
        >
          <motion.div
            animate={{ y: -pos + "rem" }}
            transition={{ ease: [0.65, 0, 0.35, 1], duration: 0.5 }}
            className="rounded-md overflow-hidden w-full h-full "
          >
            {" "}
            <video
              src={arqitel}
              className="object-cover overflow-hidden w-full h-full "
              muted
              loop
              autoPlay
            ></video>
          </motion.div>
          <motion.div
            animate={{ y: -pos + "rem" }}
            transition={{ ease: [0.65, 0, 0.35, 1], duration: 0.5 }}
            className="rounded-md overflow-hidden w-full h-full"
          >
            {" "}
            <video
              src={ttr}
              className="object-cover overflow-hidden w-full h-full"
              muted
              loop
              autoPlay
            ></video>
          </motion.div>
          <motion.div
            animate={{ y: -pos + "rem" }}
            transition={{ ease: [0.65, 0, 0.35, 1], duration: 0.5 }}
            className="rounded-md overflow-hidden w-full h-full"
          >
            {" "}
            <video
              src={yir}
              className="object-cover overflow-hidden w-full h-full"
              muted
              loop
              autoPlay
            ></video>
          </motion.div>
          <motion.div
            animate={{ y: -pos + "rem" }}
            transition={{ ease: [0.65, 0, 0.35, 1], duration: 0.5 }}
            className="rounded-md overflow-hidden w-full h-full"
          >
            {" "}
            <video
              src={yahoo}
              className="object-cover overflow-hidden w-full h-full"
              muted
              loop
              autoPlay
            ></video>
          </motion.div>
          <motion.div
            animate={{ y: -pos + "rem" }}
            transition={{ ease: [0.65, 0, 0.35, 1], duration: 0.5 }}
            className="rounded-md overflow-hidden w-full h-full"
          >
            {" "}
            <video
              src={rainfall}
              className="object-cover overflow-hidden w-full h-full"
              muted
              loop
              autoPlay
            ></video>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Products;
