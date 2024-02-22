"use client";

import { motion } from "framer-motion";

const ContactMePage = () => {
  const message = "Shoot me a mail.";

  return (
    <motion.div
      className="h-full "
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 2 }}>
      <div className="h-full flex flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48">
        <div className="h-1/2 flex justify-center items-center lg:w-1/2 lg:h-full lg:jutify-center lg:items-center lg:flex lg:pr-2 ">
          <div className="text-6xl items-center justify-center text-center lg:text-4xl">
            {message.split("").map((letter, index) => {
              return (
                <motion.span
                  key={index}
                  initial={{ opacity: 1 }}
                  animate={{ opacity: 0 }}
                  transition={{
                    duration: 4,
                    type: "tween",
                    repeat: Infinity,
                    delay: index * 0.1,
                  }}>
                  {letter}
                </motion.span>
              );
            })}
            📧
          </div>
        </div>
        <form
          action=""
          className="h-1/2 lg:justify-center lg:flex lg:flex-col  rounded-md lg:w-1/2 lg:h-full bg-white">
          <div className="  flex flex-col px-2 py-2 justify-center w-full mb-6">
            <label htmlFor="mail-address" className="font-semibold">
              Your Email Address:
            </label>

            <input
              type="text"
              name="text"
              id="text"
              className="p-4 border-b-2 border-black focus:outline-none focus:border-b-2 focus:border-black"
            />
          </div>

          <div className="flex flex-col px-2 py-2 justify-center w-full">
            <label htmlFor="text" className="font-semibold">
              Hey Remi.
            </label>
            <input
              type="text"
              name="text"
              id="text"
              className="p-12 border-b-2 border-black focus:outline-none focus:border-b-2 focus:border-black"
            />
          </div>

          <div className="px-2 py-6">
            <button className="bg-slate-800 text-white py-2 px-8 mt-2 w-full flex justify-center items-center rounded-sm  ">
              Send
            </button>
          </div>
        </form>
      </div>
    </motion.div>
  );
};

export default ContactMePage;
