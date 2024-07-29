"use client";
import { motion } from "framer-motion";
import { ArrowRight, MenuIcon, Star, XIcon } from "lucide-react";
import { useState } from "react";
import TopNavDisclaimer from "./topBands/disclaimer";
import { TransitionLink } from "../utils/TransitionLink";
import Image from "next/image";
import BtmNavGames from "./lowerBands/categories";

const MainNavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <TopNavDisclaimer href={"#"}>
        Play only if over 18 and remember it can cause addiction! - Chance of
        winning
      </TopNavDisclaimer>
      <nav className="bg-white z-50 p-4 border-b-[1px] border-gray-200 flex items-center justify-between relative">
        <NavLeft setIsOpen={setIsOpen} isOpen={isOpen} />
        <NavRight />
        <NavMenu isOpen={isOpen} />
      </nav>
      <BtmNavGames />
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
      className="absolute h-[85vh] p-4 bg-blue shadow-lg left-0 right-0 top-full origin-top justify-between flex flex-col gap-4"
    >
      <div className="flex flex-col gap-4">
        <MenuLink
          href="/"
          text="Lobby"
          img="https://cdn-kansino-production-cdn-bucket.s3.eu-central-1.amazonaws.com/cms/Categories_dark_bg_0eb30fbc84.svg"
        />
        <MenuLink
          href="/popular"
          text="Popular"
          img="https://cdn-kansino-production-cdn-bucket.s3.eu-central-1.amazonaws.com/cms/Popular_dark_bg_c9667faa91.svg"
        />
        <MenuLink
          href="/new"
          text="New"
          img="https://cdn-kansino-production-cdn-bucket.s3.eu-central-1.amazonaws.com/cms/New_dark_bg_d047844e38.svg"
        />
        <MenuLink
          href="/classic"
          text="Classic"
          img="https://cdn-kansino-production-cdn-bucket.s3.eu-central-1.amazonaws.com/cms/Classics_dark_bg_ecdc6f9cc0.svg"
        />
        <MenuLink
          href="/slots"
          text="Slots"
          img="https://cdn-kansino-production-cdn-bucket.s3.eu-central-1.amazonaws.com/cms/Slots_dark_bg_be7c830681.svg"
        />
        <MenuLink
          href="/jackpots"
          text="Jackpots"
          img="https://cdn-kansino-production-cdn-bucket.s3.eu-central-1.amazonaws.com/cms/Jackpots_dark_bg_61e9825dff.svg"
        />
        <MenuLink
          href="/dream-drop"
          text="Dream Drop"
          img="https://cdn-kansino-production-cdn-bucket.s3.eu-central-1.amazonaws.com/cms/Dream_drop_small_dark_v2_08f4a8c2ae.svg"
        />
        <MenuLink
          href="/table-games"
          text="Table Games"
          img="https://cdn-kansino-production-cdn-bucket.s3.eu-central-1.amazonaws.com/cms/Table_games_dark_bg_dd2cd06812.svg"
        />
        <MenuLink
          href="/arcade"
          text="Arcade"
          img="https://cdn-kansino-production-cdn-bucket.s3.eu-central-1.amazonaws.com/cms/Arcade_small_dark_2335e69b91.svg"
        />
        <MenuLink
          href="/all-games"
          text="All Games"
          img="https://cdn-kansino-production-cdn-bucket.s3.eu-central-1.amazonaws.com/cms/All_games_dark_bg_aff77bfc69.svg"
        />
      </div>

      <div className="flex items-center mt-4 justify-center flex-col gap-2 w-full">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-4 py-2 text-text  whitespace-nowrap"
        >
          <TransitionLink href={"#"}> Sign Back In</TransitionLink>
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-8 w-full py-3 bg-accentBlue text-darkBlue font-bold rounded whitespace-nowrap"
        >
          <TransitionLink href={"#"}> Start Playing!</TransitionLink>
        </motion.button>
      </div>
    </motion.div>
  );
};

const MenuLink = ({ text, href, img }) => {
  return (
    <TransitionLink href={href}>
      <motion.div
        variants={menuLinkVariants}
        className="overflow-hidden font-medium text-lg flex  items-center gap-2"
      >
        <motion.span variants={menuLinkArrowVariants}>
          <Image src={img} width={40} height={20} alt="" />
        </motion.span>
        <motion.div>
          <span className="flex items-center text-text">{text}</span>
        </motion.div>
      </motion.div>
    </TransitionLink>
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
