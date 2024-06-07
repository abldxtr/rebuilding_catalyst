import Grid from "./grid";
import { Select_icon } from "./icone";
import Table from "./table";

export default function Main() {
  return (
    <div
      className="grow p-6 lg:rounded-lg lg:bg-white lg:p-10 lg:shadow-sm lg:ring-1 lg:ring-zinc-950/5
     dark:lg:bg-zinc-900 dark:lg:ring-white/10"
    >
      <div className="mx-auto max-w-6xl">
        {/* 1 */}
        <h1 className="text-2xl/8 font-semibold text-zinc-950 sm:text-xl/8 dark:text-white">
          Good afternoon, Erica
        </h1>
        {/* 2 */}
        <div className="mt-8 flex items-end justify-between">
          {/* left */}
          <h2 className="text-base/7 font-semibold text-zinc-950 sm:text-sm/6 dark:text-white">
            Overview
          </h2>

          {/* right */}
          <div>
            <div
              className="group relative block w-full before:absolute before:inset-px before:rounded-[calc(theme(borderRadius.lg)-1px)] 
            before:bg-white before:shadow dark:before:hidden after:pointer-events-none after:absolute after:inset-0 after:rounded-lg 
            after:ring-inset after:ring-transparent  "
            >
              <select
                name="period"
                id="aadjfldjflj"
                className="relative block w-full appearance-none rounded-lg py-[calc(theme(spacing[2.5])-1px)] 
                sm:py-[calc(theme(spacing[1.5])-1px)] pl-[calc(theme(spacing[3.5])-1px)] pr-[calc(theme(spacing.10)-1px)] 
                sm:pl-[calc(theme(spacing.3)-1px)] sm:pr-[calc(theme(spacing.9)-1px)] [&_optgroup]:font-semibold text-base/6 text-zinc-950 
                placeholder:text-zinc-500 sm:text-sm/6 dark:text-white dark:*:text-white border border-zinc-950/10 hover:border-zinc-950/20
                 dark:border-white/10 dark:hover:border-white/20 bg-transparent dark:bg-white/5 dark:*:bg-zinc-800 focus:outline-none 
                  "
              >
                <option value="last_week">last week</option>
                <option value="last_two">last two weeks</option>
                <option value="last_month">last month</option>
                <option value="last_quarter">last quarter</option>
              </select>
              {/* icon */}
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                <Select_icon className="size-5 stroke-zinc-500 group-has-[[data-disabled]]:stroke-zinc-600 sm:size-4 dark:stroke-zinc-400 " />
              </div>
            </div>
          </div>
        </div>
        {/* 3 */}
        <Grid />

        {/* table */}

        <Table />
      </div>
    </div>
  );
}
