import { motion } from "framer-motion";
const Links = () => {
  const items = ["Homepage", "Services", "Portfolio", "Contact"];

  const variants = {
    open: {
      transition: { staggerChildren: 0.1 },
    },
    closed: {
      transition: { staggerChildren: 0.05, staggerDirection: -1 },
    },
  };

  const itemVariants = {
    open: {
      y: 0,
      opacity: 1,
    },
    closed: {
      y: 50,
      opacity: 0,
    },
  };

  return (
    <motion.div
      className="flex flex-col text-[40px] absolute w-full h-full items-center justify-center gap-5"
      variants={variants}>
      {items.map((item) => (
        <motion.a
          href={`${item === "Homepage" ? "#" : `#${item}`}`}
          key={item}
          variants={itemVariants}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}>
          {item}
        </motion.a>
      ))}
    </motion.div>
  );
};

export default Links;
