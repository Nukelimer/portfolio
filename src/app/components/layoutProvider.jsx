"use client";

import { usePathname } from "next/navigation";
import Navbar from "./navbar";
import {
  AnimatePresence,
  easeIn,
  easeInOut,
  easeOut,
  motion,
} from "framer-motion";
const LayoutProvider = ({ children }) => {
  const pathName = usePathname();
  return (
    <AnimatePresence mode="wait">
      <div
        key={pathName}
        className="w-screen h-screen bg-gradient-to-b from-slate-100 to-blue-100">
        <motion.div
          className="h-screen w-screen fixed bg-slate-800 rounded-b-md "
          animate={{ height: "0vh" }}
          exit={{
            height: "100vh",
          }}
          transition={{ duration: 0.2, ease: easeInOut }}
        />

        <motion.div
          className="capitalize text-4xl fixed left-0 right-0 top-0 bottom-0 text-white cursor-default w-fit h-fit z-20 flex justify-center items-center m-auto"
          initial={{ opacity: 1 }}
          animate={{ opacity: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4, ease: "easeIn" }}>
          {pathName.substring(1)}
        </motion.div>

        <motion.div
          className="h-screen w-screen fixed bg-slate-800 rounded-b-md"
          animate={{ height: "0vh", transition: { delay: 1 } }}
          initial={{
            height: "100vh",
          }}
          transition={{ duration: 0.4, ease: easeOut }}
        />

        <div className="h-24">
          <Navbar />
        </div>
        <div className="h-[calc(100vh-6rem)]">{children}</div>
      </div>
    </AnimatePresence>
  );
};

export default LayoutProvider;
