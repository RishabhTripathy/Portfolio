import React from "react";
import html from "../assets/skills/html.png";
import js from "../assets/skills/js.png";
import css from "../assets/skills/css.png";
import react from "../assets/skills/react.png";
import jq from "../assets/skills/jq.png";
import bs from "../assets/skills/bs.png";
import gh from "../assets/skills/gh.png";
import ps from "../assets/skills/ps.png";
import tc from "../assets/skills/tc.png";
import nj from "../assets/skills/nj.png";
import ts from "../assets/skills/ts.png";
import sf from "../assets/skills/sf.png";
import fm from "../assets/skills/Framer.png";
import wix from "../assets/skills/wix.png";
import wordpress from "../assets/skills/wordpress.png";
import strapi from "../assets/skills/strapi.png";
import { motion } from "framer-motion";
const Skills = () => {
  const techs = [
    {
      id: 1,
      src: html,
      title: "HTML",
      invert: false,

      style: "shadow-orange-500 "
    },
    {
      id: 2,
      src: css,
      title: "CSS",
      invert: false,

      style: "shadow-blue-500 "
    },
    {
      id: 3,
      src: js,
      title: "JavaScript",
      invert: false,

      style: "shadow-yellow-500 "
    },
    {
      id: 4,
      src: react,
      title: "React",
      invert: false,

      style: "shadow-blue-600 "
    },
    {
      id: 5,
      src: tc,
      title: "Tailwind",
      invert: false,

      style: "shadow-sky-400  "
    },
    {
      id: 6,
      src: bs,
      title: "BootStrap",
      invert: false,

      style: "shadow-purple-500 "
    },
    {
      id: 7,
      src: jq,
      title: "jQuery",
      invert: false,

      style: "shadow-orange-500 "
    },
    {
      id: 8,
      src: ps,
      title: "PhotoShop",
      invert: false,

      style: "shadow-blue-600 "
    },
    {
      id: 9,
      src: gh,
      title: "GitHub",
      invert: false,

      style: "shadow-gray-400 "
    },
    {
      id: 10,
      src: nj,
      title: "Next Js",
      invert: false,

      style: "shadow-purple-600 "
    },
    {
      id: 11,
      src: ts,
      title: "Type Script",
      invert: false,

      style: "shadow-blue-600 "
    },
    {
      id: 12,
      src: sf,
      title: "Shopify",
      invert: false,

      style: "shadow-green-400  "
    },
    {
      id: 13,
      src: fm,
      title: "Framer Motion",


      style: "shadow-green-400  ",
      invert: true
    },
    {
      id: 14,
      src: react,
      title: "React Native",
      invert: false,

      style: "shadow-green-400 "
    },
    {
      id: 15,
      src: wix,
      title: "Wix",
      invert: true,

      style: "shadow-orange-400   "
    },
    {
      id: 16,
      src: wordpress,
      title: "Wordpress",
      invert: false,

      style: "shadow-blue-400  "
    },
    {
      id: 17,
      src: strapi,
      title: "Strapi",
      invert: false,

      style: "shadow-purple-600 "
    }
  ];
  return (
    <div
      name="skills"
      className=" px-8   w-full h-full "
    >
      <div className=" max-w-screen-lg  pt-16 md:pt-32 mx-auto  flex flex-col justify-center h-full w-full  text-white ">
        <div className="">
          <motion.p
            initial={{
              opacity: 0
            }}
            whileInView={{
              opacity: 1
            }}
            transition={{
              delay: 0.2
            }}
            className="text-3xl uppercase font-bold border-b-4 border-gray-300 p-2  inline bg-gradient-to-r from-cyan-500 to-blue-600 bg-clip-text text-transparent"
          >
            My Skills
          </motion.p>

        </div>
        <div className=" w-full grid grid-cols-2 md:grid-cols-3 mt-10  gap-6 text-center  py-4 px-6 sm:px-0    ">
          {techs.map(({ id, src, title, style,invert }) => (
            <div
              key={id}
              className={` shadow-md hover:scale-105 duration-500 py-2 flex flex-col  justify-between items-center  rounded-lg ${style}`}
            >
              <img
                src={src}
                alt="Logo"
                className={`w-1/2 h-20 aspect-square  mb-4 object-contain filter ${invert ? "invert" : ""}`}
              />
              <p className="">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
