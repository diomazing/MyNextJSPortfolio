"use client";

import "../../globals.css";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const Cursor = () => {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const mouseMove = (e) => {
      setCursorPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", mouseMove);

    return () => {
      window.removeEventListener("mousemove", mouseMove);
    };
  }, []);

  return (
    <motion.div
      className="w-12 h-12 rounded-full border-2 border-white z-[999] hidden md:fixed"
      animate={{
        x: cursorPosition.x + 10,
        y: cursorPosition.y + 10,
      }}></motion.div>
  );
};

export default Cursor;
