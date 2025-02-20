import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div
      name="about"
      className=" w-full h-full pt-16 md:pt-32 px-4   text-white "
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
            className=" text font-jost text-3xl uppercase font-bold inline border-b-4 border-gray-300 bg-gradient-to-r from-cyan-500 to-blue-600 bg-clip-text text-transparent"
          >
            About
          </motion.p>
        </div>
        <motion.p
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
          className="text-xl mt-10 "
        >
          Hello there! I’m a Front-end Developer from Raipur, Chhattisgarh,
          India. Since my youngest age I have been passionate about design and
          art. I grew up with the Internet, and naturally took a path according
          to this passion. Web Development is a way for me to keep track of all
          my passions. See ya!
        </motion.p>
        <br />
        <motion.p
          initial={{
            opacity: 0,
          }}
          whileInView={{
            opacity: 1,
          }}
          transition={{
            delay: 0.,
            duration: 1,
          }}
          className="text-xl "
        >
          With a strong emphasis on "Progressive Enhancement", I look for
          creative ways to push the boundaries of website front-end code without
          compromising on browser support and performance.
        </motion.p>
      </div>
    </div>
  );
};

export default About;
