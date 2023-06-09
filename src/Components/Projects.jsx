import React from "react";
import { motion } from "framer-motion";
import p1 from "../images/project1.png"
import p2 from "../images/Project2.png"
import p3 from "../images/project3.png"
import p4 from "../images/project4.png"
import p5 from "../images/project5.png"
import p6 from "../images/project6.png"

export default function Projects() {
    const project = [{
        id:1,
        img:p1,
        lnk:"https://rishabhtripathymusic.vercel.app/",
        title:"My Artist Profile",
        desc:"Html, Css, Javascript, Next js, Type script, Tailwind css, Framer Motion etc"
    },
    {
        id:2,
        img:p2,
        lnk:"https://www.pagodacenturion.com/",
        title:"Pagoda Centurion",
        desc:"Html, Css, Javascript, Next js, Tailwind css, AOS etc"
    },
    {
        id:3,
        img:p3,
        lnk:"https://justhomestay.in/",
        title:"Just Home Stay",
        desc:"Html, Css, Javascript, Next js, Tailwind css, AOS etc"
    },
    {
        id:4,
        img:p4,
        lnk:"https://scoreme.in/",
        title:"ScoreMe",
        desc:"Html, Css, Javascript, Next js, Tailwind css etc"
    },
    {
        id:5,
        img:p5,
        lnk:"https://www.resurgentlegal.com/",
        title:"Resurgent Legal",
        desc:"Html, Css, Javascript, Next js, Tailwind css etc"
    },
    {
        id:6,
        img:p6,
        lnk:"https://theahomesmanali.com/",
        title:"The Thea Homes",
        desc:"Html, Css, Javascript, Next js, Tailwind css, AOS etc"
    },
  ]
  return (
    <div
      name="projects"
      className=" w-full h-full pt-16 md:pt-32 px-4  bg-gradient-to-b from-gray-800 to-black text-white "
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full ">
        <div className="">
          <motion.p
            initial={{
              opacity: 0,
            }}
            whileInView={{
              opacity: 1,
            }}
            transition={{
              delay: 0.2,
            }}
            className=" text text-4xl font-bold inline border-b-4 border-gray-500 "
          >
            Projects
          </motion.p>
        </div>
        <motion.div
          initial={{
            opacity: 0,
          }}
          whileInView={{
            opacity: 1,
          }}
          transition={{
            delay: 0.3,
            duration: 1,
          }}
          className="text-xl grid md:grid-cols-3 gap-8 grid-cols-1 mt-10 "
        >
          {project.map((item,id)=>(
            <div key={id} className="card w-auto shadow-md hover:scale-110 duration-700 shadow-blue-900 image-full">
            <figure>
              <img
                src={item.img}
                alt="Shoes"
                className=""
              />
            </figure>
            <div className="card-body ">
              <h2 className="card-title">{item.title}</h2>
              <p className="text-sm">{item.desc}</p>
              <div className="card-actions justify-center mt-8">
                <a href={item.lnk} target="_blank" rel="noreferrer" className="btn hover:scale-125 duration-300 btn-circle">View Now</a>
              </div>
            </div>
          </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
