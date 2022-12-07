import React from "react";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div
      name="home"
      className="h-screen w-full bg-gradient-to-b from-black to-gray-800  "
    >
      <div className="max-w-screen-lg mx-auto  flex flex-col items-center justify-center h-full px-4 md:flex-row ">
        <div className=" flex flex-col my-8 h-5/9 ">
          <h2 className="text-3xl sm:text-7xl text-white font-bold ">I'm a Frontend Developer</h2>
          <p className="text-gray-500 py-4 max-w-md ">
            Trained Web Developer with 8 months of Training and development
            experience along with fundamental knowledge of ServiceNow .Created
            various projects & tasks using my skillset. Looking forward to work
            with an enterprising team that can help me acquire an edge over the
            usual, learn and contribute to a good and credible organization of
            repute.
          </p>
          <div>
            <Link to="skills" smooth duration={500} className=" group text-white w-fit px-6 py-3 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-600 cursor-pointer ">
             My Skills
              <span className="group-hover:rotate-90 duration-300 ">
                <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
              </span>
            </Link>
          </div>
        </div>
        <div>
          <img
            src="../assets/me.jpg"
            alt="My Pic"
            className="rounded-2xl mx-auto w-1/2 md:w-full "
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
