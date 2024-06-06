"use client";

import classNames from "classnames";
import { Menue_icon } from "./icone";
import { useRef, useState } from "react";
import { Icon10, Icon7, Icon8, Icon9 } from "./icone";
import { useOnClickOutside } from "usehooks-ts";
import Nav from "./nav";
import { motion, AnimatePresence } from "framer-motion";
import { useStatee } from "@/contexts/ContextProvider";

export default function Header() {
  const { openNav, openNavHandler } = useStatee();
  const [openM, setOpenM] = useState(false);
  const [openA, setOpenA] = useState(false);
  const refM = useRef(null);
  const refA = useRef(null);

  const handleClickOutside = () => {
    // Your custom logic here
    // console.log("clicked outside");

    setOpenA(false);
  };
  const handleClickOutside_Menue = () => {
    // Your custom logic here
    // console.log("clicked outside");

    openNavHandler(false);
  };

  useOnClickOutside(refA, handleClickOutside);
  useOnClickOutside(refM, handleClickOutside_Menue);

  const profile_items = [
    {
      name: "My account",
      icone: (
        <Icon7 className="size-5 sm:size-4 text-zinc-500 group-hover:text-white sm:mr-2 mr-2.5 -ml-0.5  " />
      ),
    },
    {
      name: "Privacy policy",
      icone: (
        <Icon8 className="size-5 sm:size-4 text-zinc-500 group-hover:text-white sm:mr-2 mr-2.5 -ml-0.5   " />
      ),
    },
    {
      name: "Share feedback",
      icone: (
        <Icon9 className="size-5 sm:size-4 text-zinc-500 group-hover:text-white sm:mr-2 mr-2.5 -ml-0.5   " />
      ),
    },
    {
      name: "Sign out",
      icone: (
        <Icon10 className="size-5 sm:size-4 text-zinc-500 group-hover:text-white sm:mr-2 mr-2.5 -ml-0.5   " />
      ),
    },
  ];

  return (
    <header className="flex items-center px-4 lg:hidden py-2.5 w-full justify-between">
      {/* left */}
      <div>
        <div>
          <button
            className={classNames(
              "cursor-default  flex w-full group items-center gap-3 rounded-lg px-2 py-2.5 text-left",
              "text-base/6 font-medium text-zinc-950 sm:py-2 sm:text-sm/5",
              "hover:bg-zinc-950/5 dark:text-white",
              openNav && "bg-zinc-950/5 pointer-events-none",
            )}
            onClick={() => openNavHandler(true)}
          >
            <Menue_icon
              className={classNames(
                "size-6 sm:size-5  shrink-0 group-hover:fill-zinc-950 ",
                openNav ? "fill-zinc-950 " : "fill-zinc-500",
              )}
            />
          </button>
        </div>
        {/* menue */}
        <AnimatePresence>
          {openNav && (
            <div>
              {/* screen */}
              <motion.div
                className="fixed inset-0 bg-black/30 opacity-100"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, transition: { duration: 0.3 } }}
                exit={{ opacity: 0, transition: { duration: 0.3 } }}
              />

              {/* menue */}
              <div className="relative" ref={refM}>
                <Nav
                  // close={true}
                  // setAct={setOpenM}
                  className="fixed left-0 inset-y-0 w-full max-w-80 p-2"
                  className2="flex h-full flex-col rounded-lg bg-white shadow-sm ring-1 ring-zinc-950/5 dark:bg-zinc-900 dark:ring-white/10"
                />
              </div>
            </div>
          )}
        </AnimatePresence>
      </div>

      {/* right */}

      <div className="relative">
        <button
          className={classNames(
            "cursor-default  flex w-full group items-center gap-3 rounded-lg px-2 py-2.5 text-left",
            "text-base/6 font-medium text-zinc-950 sm:py-2 sm:text-sm/5",
            "hover:bg-zinc-950/5 dark:text-white",
            openA && "bg-zinc-950/5 pointer-events-none",
          )}
          onClick={(e) => {
            console.log(openA);
            // e.stopPropagation();
            // e.nativeEvent.stopImmediatePropagation();
            setOpenA(!openA);
            // if (e.target === e.chi) {
            // }
          }}
        >
          <img
            src="https://catalyst-demo.tailwindui.com/users/erica.jpg"
            alt="logo"
            className=" shrink-0  size-5
             outline outline-1 -outline-offset-1 
            outline-black/20 rounded-[20%] "
          />
        </button>
        {/* submenue */}
        {openA && (
          <div className=" absolute top-[42px] left-[-215px]" ref={refA}>
            <div
              className="min-w-64 z-30 lg:min-w-64
            isolate w-max rounded-xl p-1 outline outline-1 outline-transparent focus:outline-none overflow-y-auto bg-white/75
            backdrop-blur-xl dark:bg-zinc-800/75 shadow-lg ring-1 ring-zinc-950/10 dark:ring-inset
            dark:ring-white/10 "
            >
              {profile_items.map((item, index) => {
                return (
                  <>
                    <a
                      key={index}
                      href="/"
                      className="group cursor-default rounded-lg px-3.5 py-2.5 focus:outline-none sm:px-3 sm:py-1.5 text-left
               text-base/6 text-zinc-950 sm:text-sm/6 dark:text-white forced-colors:text-[CanvasText] hover:bg-blue-500
                hover:text-white data-[disabled]:opacity-50 forced-color-adjust-none 
                   items-center flex
                     "
                    >
                      {item.icone}
                      <div className="font-inter ">{item.name}</div>
                    </a>
                    {/* line */}
                    {(index === 0 || index === 2) && (
                      <div
                        className=" mx-3 my-1 h-px border-0 bg-zinc-950/5 sm:mx-3 
            dark:bg-white/10 "
                      />
                    )}
                  </>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
