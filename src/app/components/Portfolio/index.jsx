import { useRef, useState, useEffect } from "react";
import Section from "../Section";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
const portfolioItems = [
  {
    id: 1,
    title: "E-commerce Website",
    img: "https://images.pexels.com/photos/8657665/pexels-photo-8657665.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    desc: "A fully responsive e-commerce website built with modern technologies such as React.js and Node.js. Includes features like user authentication, product search, and secure payment processing.",
  },
  {
    id: 2,
    title: "Mobile App Development",
    img: "https://images.pexels.com/photos/8657160/pexels-photo-8657160.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    desc: "An innovative mobile app designed for iOS and Android platforms using Flutter framework. Offers seamless user experience, real-time updates, and integration with various APIs.",
  },
  {
    id: 3,
    title: "Data Analytics Dashboard",
    img: "https://images.pexels.com/photos/16042675/pexels-photo-16042675/free-photo-of-yellow-podium.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    desc: "A comprehensive data analytics dashboard created with Python and Django framework. Provides insightful visualizations, customizable reports, and data-driven decision-making tools.",
  },
];

const Single = ({ item }) => {
  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
    // offset: ["end start", "start end"],
  });

  const yUpAnimate = useTransform(scrollYProgress, [0, 1], [-500, 500]);

  return (
    <section
      className="h-[100vh] w-full overflow-auto"
      style={{
        scrollSnapAlign: "center",
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        color: "lightgray",
        textDecoration: "none",
        textDecorationColor: "inherit",
      }}>
      <div className="flex items-center justify-center h-full w-full overflow-hidden">
        <div className="flex flex-row items-center justify-center gap-12 max-w-[1366px] h-full m-auto px-[10%]">
          <div className="flex-1 h-[50%]" ref={ref}>
            <motion.img
              src={item.img}
              alt={item.title}
              className="object-cover w-full h-full cursor-pointer rounded-3xl"
            />
          </div>
          <motion.div
            className="flex flex-col flex-1 gap-8"
            style={{ y: yUpAnimate }}>
            <h2 className="text-5xl">{item.title}</h2>
            <p className="text-gray-400 text-xl">{item.desc}</p>
            <button className="bg-[#ec9d07] text-black px-5 py-2 border-none rounded-xl w-[200px] cursor-pointer">
              See Demo
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
const Portfolio = () => {
  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  return (
    <div
      className="relative w-full bg-gradient-to-b from-[#111827] to-[#505064]"
      ref={ref}>
      <div className="sticky top-0 left-0">
        <h1 className="pt-5 text-center text-[#ec9d07] text-[65px] font-bold ">
          Featured Works
        </h1>
        <motion.div
          className="h-[10px] bg-white"
          style={{ scaleX }}></motion.div>
      </div>
      {portfolioItems.map((item) => (
        <Single key={item.id} item={item} />
      ))}
    </div>
  );
};

export default Portfolio;
