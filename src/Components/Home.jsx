import React from "react";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <div
      name="home"
      className="h-full w-full bg-gradient-to-b from-black to-gray-800  "
    >
      <div className="max-w-screen-lg mx-auto  flex flex-col items-center justify-center h-full px-8 md:px-4 md:flex-row ">
        <motion.div
          initial={{
            x: -50,
          }}
          animate={{
            x: 0,
          }}
          transition={{
            delay: 0.2,
            type: "spring",
            stiffness: 100,
            damping: 50,
          }}
          className=" flex  flex-col md:mt-16 mt-32  md:mx-0 "
        >
          <motion.h2
            initial={{
              opacity: 0,
            }}
            whileInView={{
              opacity: 1,
            }}
            transition={{
              delay: 0.2,
            }}
            className="text-3xl font-jost sm:text-7xl text-white font-bold "
          >
            I'm a Frontend Developer
          </motion.h2>
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
            className="text-gray-500 py-8 text-lg max-w-md "
          >
            I am seeking a challenging opportunity in an environment where I
            will be able to utilize my strong organizational skills and ability
            to work well with people. Ready to work for an organization which
            provides me the opportunity to grow my skills and knowledge 
             along with the organization.
          </motion.p>
          <div>
            <Link
              to="skills"
              smooth
              duration={500}
              className=" group hover:scale-110 duration-300 text-white w-fit px-6 py-3 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-600 cursor-pointer "
            >
              My Skills
              <span className="group-hover:rotate-90 duration-300 ">
                <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
              </span>
            </Link>
          </div>
        </motion.div>
        <motion.div
          initial={{
            x: 50,
          }}
          animate={{
            x: 0,
          }}
          transition={{
            delay: 0.2,
            type: "spring",
            stiffness: 100,
            damping: 50,
          }}
          className="md:pt-32 pt-16 "
        >
          <img
            src="../assets/me.jpg"
            alt="My Pic"
            className="rounded-2xl   md:mx-auto md:w-full "
          />
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
