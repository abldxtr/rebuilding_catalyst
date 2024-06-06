"use client";

import { useRef, useState } from "react";
import classNames from "classnames";
import { Icon10, Icon7, Icon8, Icon9 } from "./icone";
import { useOnClickOutside } from "usehooks-ts";
import { useStatee } from "@/contexts/ContextProvider";

export default function Nav_sec_3() {
  const { Toggle, openG } = useStatee();

  const ref = useRef(null);
  const [open, setOpen] = useState(false);
  const handleClickOutside = () => {
    // Your custom logic here
    // console.log("clicked outside");
    setOpen(false);
  };

  useOnClickOutside(ref, handleClickOutside);

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
    <div
      className="max-lg:hidden relative flex flex-col border-t border-zinc-950/5 p-4
     dark:border-white/5 [&>[data-slot=section]+[data-slot=section]]:mt-2.5"
    >
      <button
        className={classNames(
          "cursor-default  flex w-full group items-center gap-3 rounded-lg px-2 py-2.5 text-left",
          "text-base/6 font-medium text-zinc-950 sm:py-2 sm:text-sm/5",
          "hover:bg-zinc-950/5 dark:text-white",
          open && "bg-zinc-950/5 pointer-events-none ",
          // openG && "hover:bg-red-400",
        )}
        onClick={() => {
          setOpen(!open);
        }}
      >
        <img
          src="https://catalyst-demo.tailwindui.com/users/erica.jpg"
          alt="logo"
          className=" shrink-0  size-10
             outline outline-1 -outline-offset-1 
            outline-black/20 rounded-[20%] "
        />
        <div className="flex flex-col ">
          <p className=" block truncate text-sm/5 font-medium text-zinc-950 dark:text-white ">
            Erica
          </p>
          <p className=" block truncate text-xs/5 font-normal text-zinc-500 dark:text-zinc-400  ">
            erica@exampl.com
          </p>
        </div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="size-5 shrink-0 fill-zinc-500 sm:size-4 ml-auto group-hover:fill-zinc-950  "
          viewBox="0 0 16 16"
          fill="currentColor"
          aria-hidden="true"
          data-slot="icon"
        >
          <path
            fill-rule="evenodd"
            d="M11.78 9.78a.75.75 0 0 1-1.06 0L8 7.06 5.28 9.78a.75.75 0 0 1-1.06-1.06l3.25-3.25a.75.75 0 0 1 1.06 0l3.25 3.25a.75.75 0 0 1 0 1.06Z"
            clip-rule="evenodd"
          ></path>
        </svg>
      </button>

      {open && (
        <div className=" absolute top-[-160px] left-[10px]" ref={ref}>
          <div
            className="min-w-80 z-30 lg:min-w-64
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
  );
}
