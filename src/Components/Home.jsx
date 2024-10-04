import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";

const Home = () => {
  return (
    <div
      name="home"
      className="h-full w-full bg-gradient-to-b from-black to-gray-800  "
    >
      <div className="max-w-screen-lg mx-auto  grid md:grid-cols-2  lg:pt-0 items-center  h-full px-8 md:px-4 grid-cols-1 ">
        <motion.div
          initial={{
            x: -50
          }}
          animate={{
            x: 0
          }}
          transition={{
            delay: 0.2,
            type: "spring",
            stiffness: 100,
            damping: 50
          }}
          className=" flex  flex-col lg:order-first order-last mt-16   md:mx-0 "
        >
          <motion.h2
            initial={{
              opacity: 0
            }}
            whileInView={{
              opacity: 1
            }}
            transition={{
              delay: 0.2
            }}
            className="text-3xl font-jost  sm:text-6xl  text-white font-bold "
          >
            Hi, I am Rishabh <br />
            <span className="bg-gradient-to-r from-cyan-500 to-blue-600 bg-clip-text text-transparent">
              {" "}
              <Typewriter
                words={["Web Developer", "App Developer"]}
                loop={false}
                cursor
                cursorColor="#06b6d4"
                cursorStyle="|"
                typeSpeed={80}
                deleteSpeed={40}
                delaySpeed={1000}
              />
            </span>
          </motion.h2>
          <motion.p
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
            className="text-gray-500 py-8 text-lg max-w-md "
          >
            I thrive on building innovative websites that merge aesthetics with
            functionality. My approach combines creativity and technical
            expertise to provide you with solutions that elevate your brand.
            Whether you're seeking to enhance your online presence or launch a
            new project, I’m committed to delivering exceptional results that
            leave a lasting impression.
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
            x: 50
          }}
          animate={{
            x: 0
          }}
          transition={{
            delay: 0.2,
            type: "spring",
            stiffness: 100,
            damping: 50
          }}
          className="md:pt-32 pt-16 "
        >
          <img
            src="../assets/me.jpg"
            alt="My Pic"
            className="rounded-2xl  mt-8 lg:mt-0  md:mx-auto md:w-full "
          />
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
