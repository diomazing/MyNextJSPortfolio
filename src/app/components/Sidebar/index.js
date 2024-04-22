import { useEffect, useState } from "react";
import Links from "./Links";
import ToggleButton from "./ToggleButton";
import { motion } from "framer-motion";

const Sidebar = () => {
  const [open, setOpen] = useState(false);
  const variants = {
    open: {
      clipPath: "circle(1200px at 50px 50px)",
      transition: { type: "spring", stiffness: 200, damping: 40 },
    },
    closed: {
      clipPath: "circle(30px at 50px 50px)",
      transition: { delay: 0.5, type: "spring", stiffness: 400, damping: 40 },
    },
  };

  return (
    <motion.div
      className="relative flex flex-col justify-center items-center bg-white text-black z-20"
      animate={open ? "open" : "closed"}>
      <motion.div
        className="fixed top-0 left-0 bottom-0 w-full bg-white md:w-[400px]"
        variants={variants}>
        <Links />
      </motion.div>
      <ToggleButton setOpen={setOpen} />
    </motion.div>
  );
};

export default Sidebar;
