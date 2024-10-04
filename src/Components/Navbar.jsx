import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";
import { motion } from "framer-motion";
import FlipLink from "../Animation/flipLink";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const links = [
    {
      id: 1,
      link: "home"
    },
    {
      id: 2,
      link: "about"
    },
    {
      id: 4,
      link: "skills"
    },
    {
      id: 5,
      link: "projects"
    },
    {
      id: 6,
      link: "contact"
    }
  ];
  return (
    <div className="flex px-4 py-4 z-50 justify-between text-white items-center w-full h-20 top-0 left-0  fixed bg-gradient-to-b from-black/50 to-transparent">
      <div>
        <motion.a
          href="/"
          className="text-5xl cursor-pointer font-signature ml-2"
          initial={{
            opacity: 0
          }}
          whileInView={{
            opacity: 1
          }}
          transition={{
            delay: 0.2
          }}
        >
          Rishabh
        </motion.a>
      </div>
      <ul className="hidden md:flex">
        {links.map(({ id, link }) => (
          <motion.li
            key={id}
            className="px-4 font-jost cursor-pointer  font-medium  "
            initial={{
              y: -50
            }}
            animate={{
              y: 0
            }}
            transition={{
              type: "spring",
              delay: 0.2
            }}
          >
            <Link className="" to={link} smooth duration={500 }>
              <FlipLink >{link}</FlipLink>
            </Link>
          </motion.li>
        ))}
      </ul>
      <div
        onClick={() => setNav(!nav)}
        className="cursor-pointer pr-4 z-10  md:hidden"
      >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>
      {nav && (
        <ul className="flex flex-col justify-center items-center fixed top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 ">
          {links.map(({ id, link }) => (
            <li key={id} className="px-4 font-medium py-6 text-3xl bg-gradient-to-r from-cyan-500 to-blue-600 bg-clip-text text-transparent uppercase ">
              <Link
                onClick={() => setNav(!nav)}
                to={link}
                smooth
                duration={500}
              >
                {link}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Navbar;
