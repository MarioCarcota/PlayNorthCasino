"use client";
import { TransitionLink } from "@/components/utils/TransitionLink";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

function BtmNavGames() {
  return (
    <div className="lg:flex hidden justify-between text-gray-200 items-center w-full p-4 bg-darkBlue">
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
  );
}

export default BtmNavGames;

const MenuLink = ({ text, href, img }) => {
  return (
    <TransitionLink href={href}>
      <motion.div
        variants={menuLinkVariants}
        className="overflow-hidden flex  items-center gap-1 hover:underline hover:opacity-100 opacity-85 "
      >
        <motion.span variants={menuLinkArrowVariants}>
          <Image src={img} width={30} height={15} alt="" />
        </motion.span>
        <motion.div>
          <span className="flex items-center text-sm font-regular text-text">
            {text}
          </span>
        </motion.div>
      </motion.div>
    </TransitionLink>
  );
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
