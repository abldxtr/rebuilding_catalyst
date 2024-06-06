"use client";

import classNames from "classnames";
import { useRef, useState } from "react";
import { useOnClickOutside } from "usehooks-ts";

export default function Nav_sec_1() {
  const [open, setOpen] = useState(false);
  const [out, setOut] = useState(false);

  const ref = useRef(null);

  const handleClickOutside = () => {
    // Your custom logic here
    console.log("clicked outside");
    console.log(open, out);

    setOpen(false);
    setOut(true);
  };

  useOnClickOutside(ref, handleClickOutside);

  return (
    <div
      className="flex flex-col border-b border-zinc-950/5 p-4
     dark:border-white/5 "
    >
      <div className="relative">
        <button
          className={classNames(
            "cursor-default  flex w-full group items-center gap-3 rounded-lg px-2 py-2.5 text-left",
            "text-base/6 font-medium text-zinc-950 sm:py-2 sm:text-sm/5",
            "hover:bg-zinc-950/5 dark:text-white",
            open && "bg-zinc-950/5 pointer-events-none	",
          )}
          onClick={() => {
            setOpen(!open);

            // if (open === true && out === true) {
            //   setOpen(false);
            //   console.log("first");
            //   console.log(open, out);
            // } else {
            //   setOpen(true);
            //   console.log("second");
            //   console.log(open, out);
            // }
          }}
        >
          <img
            src="https://catalyst-demo.tailwindui.com/teams/catalyst.svg"
            alt="logo"
            className=" shrink-0 sm:size-6 size-7
             outline outline-1 -outline-offset-1 
            outline-black/20 rounded-full "
          />
          <p className=" sm:text-sm/5 text-zinc-950 font-medium text-base/6  ">
            Catalyst
          </p>
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
              d="M4.22 6.22a.75.75 0 0 1 1.06 0L8 8.94l2.72-2.72a.75.75 0 1 1 1.06 1.06l-3.25 3.25a.75.75 0 0 1-1.06 0L4.22 7.28a.75.75 0 0 1 0-1.06Z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </button>

        {open && (
          <div className="absolute top-[50px] left-[-5px] z-30" ref={ref}>
            <div
              className="min-w-80  lg:min-w-64 
                       isolate w-max rounded-xl p-1 outline outline-1 outline-transparent focus:outline-none overflow-y-auto
                        bg-white/75 backdrop-blur-xl dark:bg-zinc-800/75 shadow-lg ring-1 ring-zinc-950/10 dark:ring-inset 
                        dark:ring-white/10  "
            >
              <a
                href="/"
                className="group cursor-default rounded-lg px-3.5 py-2.5 focus:outline-none sm:px-3 sm:py-1.5 text-left
               text-base/6 text-zinc-950 sm:text-sm/6 dark:text-white forced-colors:text-[CanvasText] hover:bg-blue-500
                hover:text-white data-[disabled]:opacity-50 forced-color-adjust-none 
                   items-center flex
                     "
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="size-5 sm:size-4 text-zinc-500 group-hover:text-white sm:mr-2 mr-2.5 -ml-0.5 "
                >
                  <path
                    fillRule="evenodd"
                    d="M11.828 2.25c-.916 0-1.699.663-1.85 1.567l-.091.549a.798.798 0 0 1-.517.608 7.45 7.45 0 0 0-.478.198.798.798 0 0 1-.796-.064l-.453-.324a1.875 1.875 0 0 0-2.416.2l-.243.243a1.875 1.875 0 0 0-.2 2.416l.324.453a.798.798 0 0 1 .064.796 7.448 7.448 0 0 0-.198.478.798.798 0 0 1-.608.517l-.55.092a1.875 1.875 0 0 0-1.566 1.849v.344c0 .916.663 1.699 1.567 1.85l.549.091c.281.047.508.25.608.517.06.162.127.321.198.478a.798.798 0 0 1-.064.796l-.324.453a1.875 1.875 0 0 0 .2 2.416l.243.243c.648.648 1.67.733 2.416.2l.453-.324a.798.798 0 0 1 .796-.064c.157.071.316.137.478.198.267.1.47.327.517.608l.092.55c.15.903.932 1.566 1.849 1.566h.344c.916 0 1.699-.663 1.85-1.567l.091-.549a.798.798 0 0 1 .517-.608 7.52 7.52 0 0 0 .478-.198.798.798 0 0 1 .796.064l.453.324a1.875 1.875 0 0 0 2.416-.2l.243-.243c.648-.648.733-1.67.2-2.416l-.324-.453a.798.798 0 0 1-.064-.796c.071-.157.137-.316.198-.478.1-.267.327-.47.608-.517l.55-.091a1.875 1.875 0 0 0 1.566-1.85v-.344c0-.916-.663-1.699-1.567-1.85l-.549-.091a.798.798 0 0 1-.608-.517 7.507 7.507 0 0 0-.198-.478.798.798 0 0 1 .064-.796l.324-.453a1.875 1.875 0 0 0-.2-2.416l-.243-.243a1.875 1.875 0 0 0-2.416-.2l-.453.324a.798.798 0 0 1-.796.064 7.462 7.462 0 0 0-.478-.198.798.798 0 0 1-.517-.608l-.091-.55a1.875 1.875 0 0 0-1.85-1.566h-.344ZM12 15.75a3.75 3.75 0 1 0 0-7.5 3.75 3.75 0 0 0 0 7.5Z"
                    clipRule="evenodd"
                  />
                </svg>
                <div className="font-inter ">Settings</div>
              </a>
              {/* line */}
              <div
                className=" mx-3 my-1 h-px border-0 bg-zinc-950/5 sm:mx-3 
              dark:bg-white/10 "
              />
              {/* end line */}
              {/* sub menue */}
              <a
                href="/"
                className="group cursor-default rounded-lg px-3.5 py-2.5 focus:outline-none sm:px-3 sm:py-1.5 text-left
               text-base/6 text-zinc-950 sm:text-sm/6 dark:text-white forced-colors:text-[CanvasText] hover:bg-blue-500
                hover:text-white data-[disabled]:opacity-50 forced-color-adjust-none 
                   items-center flex
                     "
              >
                <img
                  src="https://catalyst-demo.tailwindui.com/teams/catalyst.svg"
                  alt="logo"
                  className=" shrink-0 sm:size-5 size-6
             outline outline-1 -outline-offset-1 
            outline-black/20 rounded-full sm:mr-2 mr-2.5 -ml-0.5"
                />
                <div className="font-inter ">Catalyst</div>
              </a>
              <a
                href="/"
                className="group cursor-default rounded-lg px-3.5 py-2.5 focus:outline-none sm:px-3 sm:py-1.5 text-left
               text-base/6 text-zinc-950 sm:text-sm/6 dark:text-white forced-colors:text-[CanvasText] hover:bg-blue-500
                hover:text-white data-[disabled]:opacity-50 forced-color-adjust-none 
                   items-center flex
                     "
              >
                <img
                  src="https://catalyst-demo.tailwindui.com/teams/catalyst.svg"
                  alt="logo"
                  className=" shrink-0 sm:size-5 size-6
             outline outline-1 -outline-offset-1 
            outline-black/20 rounded-full sm:mr-2 mr-2.5 -ml-0.5"
                />
                <div className="font-inter ">Big Events</div>
              </a>

              {/* line */}
              <div
                className=" mx-3 my-1 h-px border-0 bg-zinc-950/5 sm:mx-3 
              dark:bg-white/10 "
              />
              {/* end line */}
              {/* sub menue */}
              <a
                href="/"
                className="group cursor-default rounded-lg px-3.5 py-2.5 focus:outline-none sm:px-3 sm:py-1.5 text-left
               text-base/6 text-zinc-950 sm:text-sm/6 dark:text-white forced-colors:text-[CanvasText] hover:bg-blue-500
                hover:text-white data-[disabled]:opacity-50 forced-color-adjust-none 
                   items-center flex
                     "
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  aria-hidden="true"
                  data-slot="icon"
                  className="size-5 sm:size-4 text-zinc-500 group-hover:text-white sm:mr-2 mr-2.5 -ml-0.5 "
                >
                  <path d="M8.75 3.75a.75.75 0 0 0-1.5 0v3.5h-3.5a.75.75 0 0 0 0 1.5h3.5v3.5a.75.75 0 0 0 1.5 0v-3.5h3.5a.75.75 0 0 0 0-1.5h-3.5v-3.5Z"></path>
                </svg>
                <div className="font-inter ">New team...</div>
              </a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
