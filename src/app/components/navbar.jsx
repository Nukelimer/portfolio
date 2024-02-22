"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import NavLink from "./navLink";
import { motion } from "framer-motion";

const navigationLink = [
  { url: "/", title: "Home" },
  { url: "/about-me", title: "About-Me" },
  { url: "/projects", title: "Projects" },
  { url: "/contact-me", title: "Contact-Me" },
];

const Navbar = () => {
  const [navOpen, setNavOpen] = useState(false);

  const firstVariant = {
    closed: {
      rotate: 0,
    },
    open: {
      rotate: 35,
      backgroundColor: "rgb(225, 225, 225)",
    },
  };
  const secondVariant = {
    closed: {
      opacity: 1,
    },
    open: {
      opacity: 0,
    },
  };
  const thirdVariant = {
    closed: {
      rotate: 0,
    },
    open: {
      rotate: -35,
      backgroundColor: "rgb(225, 225, 225)",
    },
  };

  const navVariant = {
    closed: {
      x: "100vw",
    },
    open: {
      x: 0,
      transition: {
        when: 'beforeChildren',
        staggerChildren: 0.4,
        type: 'tween'
      }
    },
  };

  const navsVariants = {
   
    closed: {
      x: -80,
      opacity: 0,
    },
    open: {
      x:10,
      opacity: 1,
    },
  }

  return (
    <div className="h-full relative flex items-center justify-between px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 ">
      <div className=" hidden md:flex gap-8">
        {navigationLink.map(({ title, url }) => {
          return <NavLink key={url} title={title} url={url} />;
        })}
      </div>
      <div className=" md:hidden lg:flex">
        <Link href={"/"} className="text-sm bg-black rounded-md p-2 py-4">
          <span className="bg-white p-2 rounded-sm mr-1">
            {" "}
            {"\u003C"}
            {"\u003E"}nuke
          </span>
          <span className="text-white">
            limeR{"\u003C"}
            {"/\u003E"}
          </span>
        </Link>
      </div>

      <div className="hidden md:flex gap-4">
        <Link href="#">
          <Image src="/github.png" alt="github" width={24} height={24} />
        </Link>{" "}
        <Link href="#">
          <Image src="/linkedin.png" alt="linkedin" width={24} height={24} />
        </Link>
        <Link href="#">
          <Image src="/pinterest.png" alt="pinterest" width={24} height={24} />
        </Link>
      </div>
      <button
        className="w-12 h-8 fixed flex flex-col justify-between z-50 right-2 overflow-hidden md:hidden"
        onClick={() => setNavOpen((prev) => !prev)}>
        <motion.div
          variants={firstVariant}
          animate={navOpen ? "open" : "closed"}
          className="bg-black h-1 rounded w-full origin-left "></motion.div>
        <motion.div
          variants={secondVariant}
          animate={navOpen ? "open" : "closed"}
          className="bg-black h-1 rounded w-full"></motion.div>
        <motion.div
          variants={thirdVariant}
          animate={navOpen ? "open" : "closed"}
          className="bg-black h-1 rounded w-full origin-left"></motion.div>
      </button>

      {navOpen && (
        <motion.div
          variants={navVariant}
          initial="closed"
          animate="open"
          className="fixed top-0 left-0 flex flex-col bg-slate-800 w-screen h-full z-40 text-white justify-center items-center font-3xl gap-5 ">
          {navigationLink.map(({ title, url }) => {
            return (
              <motion.div variants={navsVariants} transition={{ type: "tween", stiffness:100 }} key={url}>
                <Link className="text-2xl underline" href={url}>
                  {title}
                </Link>
              </motion.div>
            );
          })}
        </motion.div>
      )}
    </div>
  );
};

export default Navbar;
