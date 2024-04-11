import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

const variants = {
  initial: {
    x: 500,
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
};

const brandingVariants = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      duration: 4,
      staggerChildren: 1,
    },
  },
};
const Services = () => {
  const ref = useRef();
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  return (
    <>
      <motion.div
        className="flex flex-col h-full justify-between bg-gradient-to-b from-[#0c0c1d]"
        variants={variants}
        initial="initial"
        ref={ref}
        animate={isInView && "animate"}>
        {/*** to-[#111827] **/}
        <motion.div
          className="flex-1 flex self-end items-center gap-[20px] "
          variants={variants}>
          <p className="font-weight-200 text-lg text-gray-500 text-right ">
            I focus on helping your brand grow
            <br />
            and move forward
          </p>
          <hr className="w-[500px] border-t-[0.5px] border-gray-700" />
        </motion.div>
        <motion.div
          className="flex-2 flex flex-col items-center "
          variants={variants}>
          {/* title */}
          <div className="flex flex-row justify-center items-center gap-5 w-full">
            <div className="relative w-[300px] h-[100px]">
              <Image
                src={"/people.webp"}
                alt="people"
                layout="fill"
                className="object-cover rounded-[50px] "
              />
            </div>

            <h1 className="text-[96px] font-light">
              <motion.span
                className=" font-bold"
                whileHover={{
                  scale: 1.1,
                  color: "#ec9d07",
                  cursor: "pointer",
                }}>
                BUILD
              </motion.span>{" "}
              Projects
            </h1>
          </div>
          <div className="flex flex-row gap-5 items-center">
            <h1 className="text-[96px] font-light">
              <motion.span
                className=" font-bold"
                whileHover={{
                  scale: 1.1,
                  color: "#ec9d07",
                  cursor: "pointer",
                }}>
                CREATE
              </motion.span>{" "}
              Solutions
            </h1>

            <button className="w-[300px] h-[100px] rounded-[50px] bg-[#ec9d07] border-none text-3xl cursor-pointer text-black">
              WHAT I DO?
            </button>
          </div>
        </motion.div>
        <motion.div
          className="flex-2 flex flex-row justify-center items-center h-[50%] max-w-[1366px] m-auto"
          variants={brandingVariants}
          initial="initial"
          whileInView={"animate"}>
          {/* box */}

          <motion.div
            className="flex flex-col gap-y-5 p-10 border-[0.5px] border-gray-500"
            whileHover={{
              scale: 1.1,
              backgroundColor: "lightGray",
              color: "black",
              border: "none",
              borderRadius: "50px",
              transitionDuration: "0.5s",
              transitionTimingFunction: "ease-in-out",
            }}
            variants={brandingVariants}>
            <h2 className="font-bold text-2xl">Branding</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione
              rem possimus dolores, perferendis maxime aliquid magnam ad
              laboriosam. Voluptatem expedita, magni dolorem deleniti corrupti
              cumque!
            </p>
            <motion.button
              className="p-5 bg-[#ec9d07] border-none cursor-pointer text-black font-bold"
              whileHover={{
                scale: 1.1,
                borderRadius: "50px",
              }}>
              Go
            </motion.button>
          </motion.div>
          <motion.div
            className="flex flex-col gap-y-5 p-10 border-[0.5px] border-gray-500"
            whileHover={{
              scale: 1.1,
              backgroundColor: "lightGray",
              color: "black",
              border: "none",
              borderRadius: "50px",
              transitionDuration: "0.5s",
              transitionTimingFunction: "ease-in-out",
            }}
            variants={brandingVariants}>
            <h2 className="font-bold text-2xl">Branding</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione
              rem possimus dolores, perferendis maxime aliquid magnam ad
              laboriosam. Voluptatem expedita, magni dolorem deleniti corrupti
              cumque!
            </p>
            <motion.button
              className="p-5 bg-[#ec9d07] border-none cursor-pointer text-black font-bold"
              whileHover={{
                scale: 1.1,
                borderRadius: "50px",
              }}>
              Go
            </motion.button>
          </motion.div>
        </motion.div>
      </motion.div>
    </>
  );
};

export default Services;
