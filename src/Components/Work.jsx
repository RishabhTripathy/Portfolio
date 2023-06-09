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
            Work Experience
          </motion.p>
        </div>
        <ul className="">
          <motion.li
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
            className="flex flex-col tracking-widest  gap-2"
          >
            <span className="text-xl font-bold underline underline-offset-2">
              Criss Cross Lab
            </span>
            <span className="font font-semibold">Ducat Education</span>
            <span className="text-slate-400 text-md">
              December 2022 - Present
            </span>
          </motion.li>
          <br />
          <motion.li
            initial={{
              opacity: 0,
            }}
            whileInView={{
              opacity: 1,
            }}
            transition={{
              delay: 0.5,
              duration: 1,
            }}
            className="flex flex-col gap-2 tracking-widest"
          >
            <span className="text-xl font-bold underline underline-offset-2">
              Internship Trainee
            </span>
            <span className="font font-semibold">Ducat Education</span>
            <span className="text-slate-400 text-md">
              May 2022 - December 2022 (7 months)
            </span>
          </motion.li>
        </ul>
      </div>
    </div>
  );
};
