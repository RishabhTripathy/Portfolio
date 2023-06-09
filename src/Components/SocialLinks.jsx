import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";

const SocialLinks = () => {
  const links = [
    {
      id: 1,
      child: (
        <>
          LinkedIn
          <FaLinkedin size={25} />
        </>
      ),
      href: "https://www.linkedin.com/in/rishabh-tripathy-5554331ba/",
      style: "rounded-tr-md",
    },
    {
      id: 2,
      child: (
        <>
          GitHub <FaGithub size={25} />
        </>
      ),
      href: "https://github.com/RishabhTripathy",
      // style:'rounded-tr-md'
    },
    {
      id: 3,
      child: (
        <>
          Email id <HiOutlineMail size={25} />
        </>
      ),
      href: "mailto:rishabhtripathy@hotmail.com",
    },
    {
      id: 4,
      child: (
        <>
          Resume <BsFillPersonLinesFill size={25} />
        </>
      ),
      href: "Rishabh Tripathy .pdf",
      style: "rounded-br-md",
      download: true,
    },
  ];
  return (
    <div className="flex flex-col top-[35%] left-0 fixed">
      <ul>
        {links.map(({ id, child, href, style, download }) => (
          <li
            key={id}
            className={
              "flex justify-between items-center bg-opacity-80 bg-gray-900 w-40 h-14 px-4 ml-[-115px] md:ml-[-100px] hover:rounded-md duration-300 hover:ml-[-10px] " +
              " " +
              style
            }
          >
            <a
              href={href}
              className="flex justify-between z-40  items-center w-full text-white"
              download={download}
              target="_blank"
              rel="noreferrer"
            >
              {child}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SocialLinks;
