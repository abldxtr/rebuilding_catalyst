import {
  Icon1,
  Icon10,
  Icon2,
  Icon3,
  Icon4,
  Icon5,
  Icon6,
  Icon7,
  Icon8,
  Icon9,
} from "@/components/icone";

export default function Nav_sec_2() {
  const items = [
    {
      name: "Home",
      icone: (
        <Icon1 className="size-6 sm:size-5 fill-zinc-500 group-hover:fill-zinc-950  " />
      ),
    },
    {
      name: "Events",
      icone: (
        <Icon2 className="size-6 sm:size-5 fill-zinc-500 group-hover:fill-zinc-950  " />
      ),
    },
    {
      name: "Orders",
      icone: (
        <Icon3 className="size-6 sm:size-5 fill-zinc-500 group-hover:fill-zinc-950  " />
      ),
    },
    {
      name: "Setting",
      icone: (
        <Icon4 className="size-6 sm:size-5 fill-zinc-500 group-hover:fill-zinc-950  " />
      ),
    },
  ];

  const items2 = [
    "Bear Hug: Live in Concert",
    "Six Fingers — DJ Set",
    "We All Look The Same",
    "Viking People",
  ];

  const items3 = [
    {
      name: "Support",
      icone: (
        <Icon5 className="size-6 sm:size-5 fill-zinc-500 group-hover:fill-zinc-950  " />
      ),
    },
    {
      name: "Changelog",
      icone: (
        <Icon6 className="size-6 sm:size-5 fill-zinc-500 group-hover:fill-zinc-950  " />
      ),
    },
  ];

  return (
    <div className="flex flex-1 flex-col overflow-y-auto p-4 [&>[data-slot=section]+[data-slot=section]]:mt-8">
      <div className="flex flex-col gap-0.5">
        {items.map((item, index) => {
          return (
            <a
              key={index}
              href="/"
              className="group relative cursor-default rounded-lg px-3.5 py-2.5 focus:outline-none sm:px-3 sm:py-1.5 text-left
                      hover:bg-zinc-950/5
                     disabled:opacity-50  
                       items-center flex gap-3
                         "
            >
              {index === 0 && (
                <div className="absolute inset-y-2 -left-4 w-0.5 rounded-full bg-zinc-950 dark:bg-white" />
                // className="size-6 sm:size-5 fill-zinc-500 group-hover:fill-zinc-950  "
                //
              )}
              {item.icone}
              <div className="font-inter text-zinc-950 dark:text-white text-base/6 sm:text-sm/6 font-medium group-hover:text-zinc-950 ">
                {item.name}
              </div>
            </a>
          );
        })}

        {/* 2 */}

        <div className="max-lg:hidden mt-8 flex flex-col gap-0.5">
          <h3 className="mb-1 px-2 text-xs/6 font-medium text-zinc-500 dark:text-zinc-400">
            Upcoming Events
          </h3>
          {items2.map((item, index) => {
            return (
              <a
                key={index}
                href="/"
                className="group relative  cursor-default rounded-lg px-3.5 py-2.5 focus:outline-none sm:px-3 sm:py-1.5 text-left
                      hover:bg-zinc-950/5
                     disabled:opacity-50  
                       items-center flex gap-3
                         "
              >
                <div
                  className="font-inter text-zinc-950 dark:text-white text-base/6 sm:text-sm/6
                 font-medium group-hover:text-zinc-950 "
                >
                  {item}
                </div>
              </a>
            );
          })}
        </div>

        {/* 3 */}

        <div className="mt-8">
          {items3.map((item, index) => {
            return (
              <a
                key={index}
                href="/"
                className="group relative cursor-default rounded-lg px-3.5 py-2.5 focus:outline-none sm:px-3 sm:py-1.5 text-left
                      hover:bg-zinc-950/5
                     disabled:opacity-50  
                       items-center flex gap-3
                         "
              >
                {/* {index === 0 && (
                  <div className="absolute inset-y-2 -left-4 w-0.5 rounded-full bg-zinc-950 dark:bg-white" />
                )} */}
                {item.icone}
                <div className="font-inter text-zinc-950 dark:text-white text-base/6 sm:text-sm/6 font-medium group-hover:text-zinc-950 ">
                  {item.name}
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
}
