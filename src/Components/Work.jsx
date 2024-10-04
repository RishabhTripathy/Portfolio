import React from "react";
import { motion } from "framer-motion";

export const Work = () => {
  return (
    <div
      name="Experience"
      className=" w-full h-full px-8 pt-16 md:pt-32  bg-gradient-to-b from-black to-gray-800 text-white "
    >
      <div className="max-w-screen-lg  mx-auto flex flex-col justify-center w-full h-full ">
        <div className="pb-8 ">
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
            className=" text font-jost text-3xl uppercase font-bold inline border-b-4 border-gray-300 bg-gradient-to-r from-cyan-500 to-blue-600 bg-clip-text text-transparent"
          >
            Work Experience
          </motion.p>
        </div>
        <ul className="">
          <motion.li
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
            className="flex flex-col tracking-widest  gap-2"
          >
            <span className="text-xl font-bold underline underline-offset-2">
              Frontend Developer
            </span>
            <span className="font font-semibold">Beam & Words</span>
            <span className="text-slate-400 text-md">April 2022 - Present</span>
          </motion.li>
          <br />
          <motion.li
            initial={{
              opacity: 0
            }}
            whileInView={{
              opacity: 1
            }}
            transition={{
              delay: 0.5,
              duration: 1
            }}
            className="flex flex-col tracking-widest  gap-2"
          >
            <span className="text-xl font-bold underline underline-offset-2">
              Web Developer
            </span>
            <span className="font font-semibold"> Criss Cross Lab</span>
            <span className="text-slate-400 text-md">
              December 2022 - March 2024
            </span>
          </motion.li>
          <br />
          <motion.li
            initial={{
              opacity: 0
            }}
            whileInView={{
              opacity: 1
            }}
            transition={{
              delay: 0.7,
              duration: 1
            }}
            className="flex flex-col gap-2 tracking-widest"
          >
            <span className="text-xl font-bold underline underline-offset-2">
              Web Developer
            </span>
            <span className="font font-semibold">36Octa Elements Pvt. Ltd</span>
            <span className="text-slate-400 text-md">
              February 2022 - December 2022
            </span>
          </motion.li>
        </ul>
      </div>
    </div>
  );
};
