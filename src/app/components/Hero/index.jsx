import Image from "next/image";
import { motion } from "framer-motion";
const textVariants = {
  intial: {
    x: -500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1.5,
      staggerChildren: 0.1,
    },
  },
  scrollButton: {
    y: 10,
    opacity: 0,
    transition: {
      duration: 2,
      repeat: Infinity,
    },
  },
};

const sliderVariants = {
  intial: {
    x: 0,
    opacity: 0,
  },
  animate: {
    x: "-220%",
    opacity: 1,
    transition: {
      repeat: Infinity,
      repeatType: "mirror",
      duration: 20,
    },
  },
};
const Hero = () => {
  return (
    <>
      <div className="relative h-[calc(100vh-100px)] bg-gradient-to-b from-transparent to-gray-900 overflow-hidden">
        <div className="flex max-w-[1366px] h-full m-auto ">
          <motion.div
            className="flex flex-col justify-center h-full w-[50%] gap-5"
            variants={textVariants}
            initial="intial"
            animate="animate">
            <motion.h2
              className="text-[30px] font-bold text-violet-700 tracking-[10px]"
              variants={textVariants}>
              JAMES SIA
            </motion.h2>
            <motion.h1
              className="text-[88px] font-bold text-white leading-none"
              variants={textVariants}>
              Developer. Engineer. Editor.
            </motion.h1>
            <div className="flex flex-row gap-4" style={{ zIndex: 2 }}>
              <motion.button
                className="p-5 border font-medium border-white rounded-md bg-transparent hover:cursor-pointer"
                variants={textVariants}
                whileHover={{
                  scale: 1.1,
                  color: "#000",
                  backgroundColor: "#fff",
                }}
                whileTap={{ scale: 0.9 }}>
                Latest Works
              </motion.button>
              <motion.button
                className="p-5 border font-medium border-white rounded-md bg-transparent  hover:cursor-pointer "
                variants={textVariants}
                whileHover={{
                  scale: 1.1,
                  color: "#000",
                  backgroundColor: "#fff",
                }}
                whileTap={{ scale: 0.9 }}>
                Contact Me
              </motion.button>
            </div>
            <motion.div
              className="mt-5"
              style={{ filter: "invert(100%)" }}
              variants={textVariants}
              animate="scrollButton">
              <Image
                src={"/scroll.png"}
                width={50}
                height={50}
                alt="Scroll Down"
              />
            </motion.div>
            <motion.div
              className="absolute text-[50vh] w-[50%] font-bold text-[#ffffff09] bottom-[-120px] whitespace-nowrap opacity-95 z-0"
              variants={sliderVariants}
              initial="initial"
              animate="animate">
              Developer. Engineer. Editor.
            </motion.div>
          </motion.div>
        </div>
        <div className="absolute h-full top-0 right-0">
          <Image src={"/hero.png"} width={950} height={950} alt="My Picture" />
        </div>
      </div>
    </>
  );
};

export default Hero;
