"use client";
import { motion } from "framer-motion";

const Homepage = () => {
  return (
    <motion.div
      className="h-full bg-gradient-to-b from-slate-100 to-blue-100"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 2 }}>
      <div className="h-full flex flex-col md:flex-row justify-center items-center px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48  m-auto ">
        <div className=" h-1/2 flex justify-center lg:h-3/4">
          <img src="/IMG_6468_2.png" alt="avatar" className={" object-cover"} />
        </div>

        <div className=" h-1/2 md:w-1/2 md:justify-center md:items-center md:flex md:flex-col md:self-center">
          <h1 className="text-3xl font-bold pt-2 md:text-5xl ">
            Breaking, Learning and Fixing Digital Puzzles.
          </h1>
          <p className="py-6 text-justify">
            Dive into the dynamic world of breaking, fixing, and learning
            digital puzzles within my portfolio, where each project is a
            testament to resilience, creativity, and the relentless pursuit of
            mastering the intricacies of the digital landscape.
          </p>
          <div className="">
            <button className=" py-2 px-4 bg-white mx-3 text-black rounded ring-1 ring-black">
              Project
            </button>
            <button className=" py-2 px-4 bg-black mx-3 text-white rounded">
              Contact Me
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Homepage;
