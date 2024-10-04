import React from "react";
import { motion } from "framer-motion";

import p1 from "../assets/projects/project1.png";
import p2 from "../assets/projects/project2.png";
import p3 from "../assets/projects/project3.png";
import p4 from "../assets/projects/project4.png";
import p5 from "../assets/projects/project5.png";
import p6 from "../assets/projects/project6.png";
import p7 from "../assets/projects/project7.png";
import p8 from "../assets/projects/project8.png";
import p9 from "../assets/projects/project9.png";
import p10 from "../assets/projects/project10.png";
import p11 from "../assets/projects/project11.png";
import p12 from "../assets/projects/project12.png";
import { HoverImageLinks } from "./projectDetails";

export default function Projects() {
  const project = [
    {
      id: 1,
      img: p1,
      lnk: "https://rishabhtripathymusic.vercel.app/",
      title: "My Artist Profile",
      desc: "Html, Css, Javascript, Next js, Type script, Tailwind css, Framer Motion etc"
    },
    {
      id: 2,
      img: p2,
      lnk: "https://www.pagodacenturion.com/",
      title: "Pagoda Centurion",
      desc: "Html, Css, Javascript, Next js, Tailwind css, AOS etc"
    },
    {
      id: 3,
      img: p3,
      lnk: "https://justhomestay.in/",
      title: "Just Home Stay",
      desc: "Html, Css, Javascript, Next js, Tailwind css, AOS etc"
    },
    {
      id: 4,
      img: p4,
      lnk: "https://scoreme.in/",
      title: "ScoreMe",
      desc: "Html, Css, Javascript, Next js, Tailwind css etc"
    },
    {
      id: 5,
      img: p5,
      lnk: "https://www.resurgentindia.com/",
      title: "Resurgent Legal",
      desc: "Html, Css, Javascript, Next js, Tailwind css etc"
    },
    {
      id: 6,
      img: p6,
      lnk: "https://theahomesmanali.com/",
      title: "The Thea Homes",
      desc: "Html, Css, Javascript, Next js, Tailwind css, AOS etc"
    },
    {
      id: 7,
      img: p7,
      lnk: "https://gurugramplot.com/",
      title: "The Gurugram Plot",
      desc: "Html, Css, Javascript, NocoDb, Next js, Tailwind css, AOS, NoCo Db, Api Integration etc"
    },
    {
      id: 8,
      img: p8,
      lnk: "https://www.reyarpgreen.com/",
      title: "REY ARP NIGERIA LIMITED",
      desc: "Html, Css, Wix"
    },
    {
      id: 9,
      img: p9,
      lnk: "https://moochuu.in/",
      title: "Moo Chuu India",
      desc: "Html, Css, Shopify, Shopify Liquid etc"
    },
    {
      id: 10,
      img: p10,
      lnk: "https://abbyevents.in/",
      title: "Abby Events",
      desc: "Html, Css, Javascript, Wordpress, Next js, Tailwind Css   etc"
    },
    {
      id: 11,
      img: p11,
      lnk: "https://suncitystudios.in/",
      title: "Suncity Studios",
      desc: "Html, Css, Javascript, React, Tailwind Css, Framer Motion, Strapi etc"
    },
    {
      id: 12,
      img: p12,
      lnk: "https://moonshotmedia.in/",
      title: "Moonshot Media",
      desc: "Html, Css, Javascript, React, Tailwind Css, Framer Motion, Strapi etc"
    }
  ];

  return (
    <div
      name="projects"
      className=" w-full h-full pt-16 md:pt-32 px-4  bg-gradient-to-b from-gray-800 to-black text-white "
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full ">
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
            className=" text text-3xl uppercase font-jost font-bold inline border-b-4 border-gray-300 bg-gradient-to-r from-cyan-500 to-blue-600 bg-clip-text text-transparent "
          >
            Projects
          </motion.p>
        </div>
        <motion.div
          initial={{
            opacity: 0
          }}
          whileInView={{
            opacity: 1
          }}
          transition={{
            delay: 0.3,
            duration: 1
          }}
          className="hidden lg:block"
        >
          <HoverImageLinks project={project} />
        </motion.div>
        <motion.div
          initial={{
            opacity: 0
          }}
          whileInView={{
            opacity: 1
          }}
          transition={{
            delay: 0.3,
            duration: 1
          }}
          className="text-xl grid md:grid-cols-3 lg:hidden gap-8 grid-cols-1 mt-10 "
        >
          {project.reverse().map((item, id) => (
            <div
              key={id}
              className="card w-auto  shadow-md hover:scale-110 group duration-700 shadow-blue-900 flip-card-inner  flip-card-front image-full"
            >
              <figure className="">
                <img src={item.img} alt="Shoes" className="" />
              </figure>
              <div className="card-body  shadow-xl text-center  ">
                <h2 className="card-title justify-center group-hover:text-white duration-700 font-jost">
                  {item.title}
                </h2>
                <p className="text-sm group-hover:text-white duration-700">
                  {item.desc}
                </p>
                <div className="card-actions justify-center mt-8">
                  <a
                    href={item.lnk}
                    target="_blank"
                    rel="noreferrer"
                    className="btn group-hover:scale-125 hover:text-white duration-300  btn-circle"
                  >
                    View Now
                  </a>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
