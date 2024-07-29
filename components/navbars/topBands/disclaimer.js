"use client";
import { TransitionLink } from "@/components/utils/TransitionLink";
import React from "react";

function TopNavDisclaimer({ children, href }) {
  return (
    <TransitionLink href={href}>
      <div className="hover:underline opacity-70 flex justify-center text-gray-200 font-light text-center text-xs items-center w-full p-2 bg-darkBlue hover:bg-darkBlue/90">
        {children}
      </div>
    </TransitionLink>
  );
}

export default TopNavDisclaimer;
