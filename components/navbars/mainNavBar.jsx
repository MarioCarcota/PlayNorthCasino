"use client";
import { motion } from "framer-motion";
import { ArrowRight, MenuIcon, Star, XIcon } from "lucide-react";
import { useState } from "react";
import TopNavDisclaimer from "./topBands/disclaimer";
import { TransitionLink } from "../utils/TransitionLink";

const MainNavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <TopNavDisclaimer href={"#"}>
        Play only if over 18 and remember it can cause addiction! - Chance of
        winning
      </TopNavDisclaimer>
      <nav className="bg-white p-4 border-b-[1px] border-gray-200 flex items-center justify-between relative">
        <NavLeft setIsOpen={setIsOpen} isOpen={isOpen} />
        <NavRight />
        <NavMenu isOpen={isOpen} />
      </nav>
    </>
  );
};

const Logo = () => {
  return (
    <div className="flex justify-center items-center gap-1">
      <Star fill="#f4c430" stroke="#f4c430" size={30} />
      <h1 className="text-3xl text-darkBlue font-bold">Play North</h1>
    </div>
  );
};

const NavLeft = ({ setIsOpen, isOpen }) => {
  return (
    <div className="flex items-center gap-6">
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="block lg:hidden text-gray-950 text-2xl"
        onClick={() => setIsOpen((pv) => !pv)}
      >
        {isOpen ? <XIcon /> : <MenuIcon />}
      </motion.button>
      <Logo />
    </div>
  );
};

const NavRight = () => {
  return (
    <div className="md:flex hidden items-center gap-4">
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="px-4 py-2 text-darkBlue/80 text-light whitespace-nowrap"
      >
        <TransitionLink href={"#"}> Sign Back In</TransitionLink>
      </motion.button>
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="px-8 py-3 bg-blue text-text font-bold rounded whitespace-nowrap"
      >
        <TransitionLink href={"#"}> Start Playing!</TransitionLink>
      </motion.button>
    </div>
  );
};

const NavMenu = ({ isOpen }) => {
  return (
    <motion.div
      variants={menuVariants}
      initial="closed"
      animate={isOpen ? "open" : "closed"}
      className="absolute p-4 bg-white shadow-lg left-0 right-0 top-full origin-top flex flex-col gap-4"
    >
      <MenuLink text="Casino Live" />
      <MenuLink text="Slot" />
      <MenuLink text="Table" />
      <MenuLink text="Sport" />

      <div className="flex items-center mt-4 justify-center flex-col gap-2 w-full">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-4 py-2 text-darkBlue  whitespace-nowrap"
        >
          <TransitionLink href={"#"}> Sign Back In</TransitionLink>
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-8 w-full py-3 bg-blue text-text font-bold rounded whitespace-nowrap"
        >
          <TransitionLink href={"#"}> Start Playing!</TransitionLink>
        </motion.button>
      </div>
    </motion.div>
  );
};

const MenuLink = ({ text }) => {
  return (
    <motion.a
      variants={menuLinkVariants}
      rel="nofollow"
      href="#"
      className="h-[30px] overflow-hidden font-medium text-lg flex items-start gap-2"
    >
      <motion.span variants={menuLinkArrowVariants}>
        <ArrowRight className="h-[30px] text-gray-950" />
      </motion.span>
      <motion.div whileHover={{ y: -30 }}>
        <span className="flex items-center h-[30px] text-gray-500">{text}</span>
        <span className="flex items-center h-[30px] text-indigo-600">
          {text}
        </span>
      </motion.div>
    </motion.a>
  );
};

export default MainNavBar;

const menuVariants = {
  open: {
    scaleY: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.1,
    },
  },
  closed: {
    scaleY: 0,
    transition: {
      when: "afterChildren",
      staggerChildren: 0.1,
    },
  },
};

const menuLinkVariants = {
  open: {
    y: 0,
    opacity: 1,
  },
  closed: {
    y: -10,
    opacity: 0,
  },
};

const menuLinkArrowVariants = {
  open: {
    x: 0,
  },
  closed: {
    x: -4,
  },
};
