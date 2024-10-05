import { useMotionValue, motion, useSpring, useTransform } from "framer-motion";
import React, { useRef } from "react";
import { FiArrowRight } from "react-icons/fi";

export const HoverImageLinks = ({ project }) => {
  console.log(project.reverse());
  const reversedProject = project.reverse();
  return (
    <section className="bg-neutral-950 p-4 md:p-8">
      <div className="mx-auto max-w-5xl">
        {reversedProject.map((item, id) => (
          <Link
            key={id}
            heading={item.title}
            subheading={item.desc}
            imgSrc={item.img}
            href={item.lnk}
          />
        ))}
      </div>
    </section>
  );
};

const Link = ({ heading, imgSrc, subheading, href }) => {
  const ref = useRef(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const top = useTransform(mouseYSpring, [0.5, -0.5], ["40%", "60%"]);
  const left = useTransform(mouseXSpring, [0.5, -0.5], ["60%", "70%"]);

  const handleMouseMove = (e) => {
    const rect = ref.current.getBoundingClientRect();

    const width = rect.width;
    const height = rect.height;

    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;

    x.set(xPct);
    y.set(yPct);
  };

  return (
    <motion.a
      href={href}
      ref={ref}
      target="_blank"
      onMouseMove={handleMouseMove}
      initial="initial"
      whileHover="whileHover"
      className="group relative flex items-center  font-jost justify-between border-b-2 border-neutral-500 py-4 transition-colors duration-500 hover:border-white md:py-8"
    >
      <div>
        <motion.span
          variants={{
            initial: { x: 0 },
            whileHover: { x: -16 }
          }}
          transition={{
            type: "spring",
            staggerChildren: 0.075,
            delayChildren: 0.25
          }}
          className="relative z-10 block text-xl font-bold text-neutral-300 transition-colors duration-500 group-hover:text-white md:text-2xl"
        >
          {heading.split(" ").map((l, i) => (
            <motion.span
              variants={{
                initial: { x: 0 },
                whileHover: { x: 16 }
              }}
              transition={{ type: "spring" }}
              className="inline-block mx-1" // Add margin to each character for better spacing
              key={i}
            >
              {l}
            </motion.span>
          ))}
        </motion.span>
        <span className="relative z-10 mt-2 block text-base text-neutral-300 transition-colors duration-500 group-hover:text-white">
          {subheading}
        </span>
      </div>

      <motion.img
        style={{
          top,
          left,
          translateX: "-50%",
          translateY: "-50%"
        }}
        variants={{
          initial: { scale: 0, rotate: "-12.5deg" },
          whileHover: { scale: 1, rotate: "12.5deg" }
        }}
        transition={{ type: "spring" }}
        src={imgSrc}
        className="absolute z-10 h-24 w-32 rounded-lg object-cover md:h-48 md:w-64"
        alt={`Image representing a link for ${heading}`}
      />

      <motion.div
        variants={{
          initial: {
            x: "25%",
            opacity: 0
          },
          whileHover: {
            x: "0%",
            opacity: 1
          }
        }}
        transition={{ type: "spring" }}
        className="relative z-10 p-4"
      >
        <FiArrowRight className="text-5xl text-white" />
      </motion.div>
    </motion.a>
  );
};
