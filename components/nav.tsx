"use client";

import Nav_sec_1 from "./nav_sec_1";
import Nav_sec_2 from "./nav_sec_2";
import Nav_sec_3 from "./nav_sec_3";
import { motion } from "framer-motion";
import classNames from "classnames";
import { Close_icon, Menue_icon } from "./icone";
import React from "react";
import { useStatee } from "@/contexts/ContextProvider";

type Prop = {
  setAct: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function Nav({
  className,
  className2 = "flex h-full flex-col",
}: {
  className: string;
  className2: string;
}) {
  const { openNav, openNavHandler } = useStatee();

  return (
    <motion.div
      className={className}
      initial={{ x: -100, opacity: 0 }}
      animate={{ x: 0, opacity: 1, transition: { duration: 0.3 } }}
      exit={{ x: -100, opacity: 0 }}
    >
      <nav className={className2}>
        {/* close icon */}
        {openNav && (
          <div className="-mb-3 px-4 pt-3">
            <button
              className={classNames(
                "cursor-default  flex  group items-center gap-3 rounded-lg px-2 py-2.5 text-left",
                "text-base/6 font-medium text-zinc-950 sm:py-2 sm:text-sm/5",
                "hover:bg-zinc-950/5 dark:text-white",
                // openM && "bg-zinc-950/5 pointer-events-none",
              )}
              onClick={() => openNavHandler(false)}
            >
              <Close_icon
                className={classNames(
                  "size-6 sm:size-5 fill-zinc-500  shrink-0 group-hover:fill-zinc-950 ",
                  // openM ? "fill-zinc-950 " : "fill-zinc-500",
                )}
              />
            </button>
          </div>
        )}
        {/* 1 */}
        <Nav_sec_1 />

        {/* 2 */}
        <Nav_sec_2 />

        {/* hael beyn do ta */}
        {/* {close && <div className="mt-8 flex-1" />} */}

        {/* 3 */}
        <Nav_sec_3 />
      </nav>
    </motion.div>
  );
}
