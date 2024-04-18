import Image from "next/image";
import { twMerge } from "tailwind-merge";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useRef } from "react";
const Parallax = ({ type }) => {
  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const scaleY = useSpring(scrollYProgress);

  const textTransform = useTransform(scrollYProgress, [0, 1], ["0%", "300%"]);
  const bgTransform = useTransform(scaleY, [0, 1], ["0%", "100%"]);
  const starX = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const starScale = useTransform(scrollYProgress, [0, 1], [1, 5]);
  const planetScale = useTransform(scrollYProgress, [0, 1], [1, 5]);
  const mountainScale = useTransform(scrollYProgress, [0, 1], [1, 1]);

  const variants = {
    initial: { y: -500, opacity: 0, scale: 0.8 },
    animate: {
      y: 0,
      opacity: 1,
      // scale: 1,
      transition: {
        duration: 1.5,
        ease: "easeInOut",
      },
    },
  };

  return (
    <motion.div
      className={twMerge(
        "relative flex justify-center items-center w-full h-full overflow-hidden",
        type === "services"
          ? "bg-gradient-to-b from-[#111827] to-[#0c0c1d]"
          : "bg-gradient-to-b from-[#111827] to-[#505064]"
      )}
      ref={ref}>
      <motion.h1
        className="text-[8em] font-bold z-[2]"
        style={{ y: textTransform }}
        variants={variants}
        initial="initial"
        whileInView={"animate"}>
        {type === "services" ? "What I Do?" : "What I Did?"}
      </motion.h1>
      <motion.div
        className="absolute w-full h-full z-[5]"
        style={{ scale: mountainScale }}>
        <Image
          src={"/mountains.png"}
          alt="mountain"
          layout="fill"
          className="object-cover"
        />
      </motion.div>
      <motion.div
        className="absolute w-full h-full z-[2]"
        style={{ y: bgTransform, scale: planetScale }}>
        <Image
          src={type === "services" ? "/planets.png" : "/sun.png"}
          alt="planets"
          layout="fill"
          className="object-cover"
        />
      </motion.div>
      <motion.div
        className="absolute w-full h-full"
        style={{
          x: starX,
          scale: starScale,
        }}>
        <Image
          src={"/stars.png"}
          alt="stars"
          layout="fill"
          className="bg-cover z-[0]"
        />
      </motion.div>
    </motion.div>
  );
};

export default Parallax;
