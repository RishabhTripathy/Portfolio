import React from "react";
import html from "../images/html.png";
import js from "../images/js.png";
import css from "../images/css.png";
import react from "../images/react.png";
import jq from "../images/jq.png";
import bs from "../images/bs.png";
import gh from "../images/gh.png";
import ps from "../images/ps.png";
import tc from "../images/tc.png";
const Skills = () => {
  const techs = [
    {
      id: 1,
      src: html,
      title: "HTML",
      style: "shadow-orange-500 ",
    },
    {
      id: 2,
      src: css,
      title: "CSS",
      style: "shadow-blue-500 ",
    },
    {
      id: 3,
      src: js,
      title: "JavaScript",
      style: "shadow-yellow-500 ",
    },
    {
      id: 4,
      src: react,
      title: "React",
      style: "shadow-blue-600 ",
    },
    {
      id: 5,
      src: tc,
      title: "Tailwind",
      style: "shadow-sky-400 ",
    },
    {
      id: 6,
      src: bs,
      title: "BootStrap",
      style: "shadow-purple-500 ",
    },
    {
      id: 7,
      src: jq,
      title: "jQuery",
      style: "shadow-orange-500 ",
    },
    {
      id: 8,
      src: ps,
      title: "PhotoShop",
      style: "shadow-blue-600 ",
    },
    {
      id: 9,
      src: gh,
      title: "GitHub",
      style: "shadow-gray-400 ",
    },
  ];
  return (
    <div
      name="skills"
      className="bg-gradient-to-b from-gray-800 to-black w-full h-screen "
    >
      <div className=" max-w-screen-lg mx-auto p-4 flex flex-col justify-center h-full w-full  text-white ">
        <div className=" mt-10 pt-6 ">
          <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline ">
            My Skills
          </p>
          <p className="py-8 md:py-16 ">These are the technologies I've worked with.</p>
        </div>
        <div className=" w-full grid grid-cols-3 sm:grid-cols-3   gap-6 text-center     py-6 px-6 sm:px-0   ">
          
          
          
          
          {techs.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
            >
              <img src={src} alt="" className="w-20 mx-auto " />
              <p>{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
