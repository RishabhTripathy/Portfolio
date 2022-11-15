import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className=" w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white "
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full ">
        <div className="pb-8 ">

        <p className=" text text-4xl font-bold inline border-b-4 border-gray-500 ">About</p>
        </div>
        <p className="text-xl mt-10 ">
      Hello there! I’m a Website Designer & Developer living in Raipur,Chhattisgarh,India. Since my youngest age I have been passionate about design and art. I grew up with the Internet, and naturally took a path according to this passion. Web design is a way for me to keep track of all my passions. See ya!
      </p>
      <br />
      <p className="text-xl ">
        With a strong emphasis on "Progressive Enhancement", I look for creative ways to push the boundaries of website front-end code without compromising on browser support and performance.
      </p>
      </div>
     
    </div>
  );
};

export default About;
