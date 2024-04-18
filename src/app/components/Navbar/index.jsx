import Image from "next/image";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";

const Sidebar = dynamic(() => import("../Sidebar"), {
  ssr: false,
});
const Navbar = () => {
  return (
    <div className="relative h-[100px] max-w-[1366px] m-auto items-center z-10">
      <Sidebar />
      <div className="flex flex-row justify-between p-5">
        <motion.span
          intial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1.5 }}
          transition={{ duration: 0.5 }}
          className="font-bold">
          DIOMAZING
        </motion.span>
        <div className="socials">
          <div className="flex flex-row gap-2">
            <a
              href="https://www.facebook.com/james.sia.75"
              target="_blank"
              rel="noopener noreferrer">
              <Image
                src={"https://cdn-icons-png.flaticon.com/512/174/174855.png"}
                alt="Facebook"
                title="Facebook"
                width={24}
                height={24}
              />
            </a>
            <a
              href="https://www.instagram.com/james_sia"
              target="_blank"
              rel="noopener noreferrer">
              <Image
                src={"https://cdn-icons-png.flaticon.com/512/174/174864.png"}
                alt="Instagram"
                title="Instagram"
                width={24}
                height={24}
              />
            </a>
            <a
              href="https://www.linkedin.com/in/jamessia/"
              target="_blank"
              rel="noopener noreferrer">
              <Image
                src={"https://cdn-icons-png.flaticon.com/512/174/174861.png"}
                alt="LinkedIn"
                title="LinkedIn"
                width={24}
                height={24}
              />
            </a>
            <a
              href="https://www.youtube.com/channel/UCSsQi2QiJHVzlkqeQ4Zjh_A"
              target="_blank"
              rel="noopener noreferrer">
              <Image
                src={"https://cdn-icons-png.flaticon.com/512/174/174860.png"}
                alt="YouTube"
                title="YouTube"
                width={24}
                height={24}
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
