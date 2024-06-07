import classNames from "classnames";

export default function Grid() {
  const data = [
    {
      title: "Total revenue",
      value: "$2.6M",
      percentageChange: "+4.5",
      comparisonText: "from last week",
    },
    {
      title: "Average order value",
      value: "$455",
      percentageChange: "-0.5",
      comparisonText: "from last week",
    },
    {
      title: "Tickets sold",
      value: "5,888",
      percentageChange: "+4.5",
      comparisonText: "from last week",
    },
    {
      title: "Pageviews",
      value: "823,067",
      percentageChange: "+21.2",
      comparisonText: "from last week",
    },
  ];

  return (
    <div className="mt-4 grid gap-8 sm:grid-cols-2 xl:grid-cols-4">
      {/* 1 */}
      {data.map((item, index) => {
        return (
          <div key={index}>
            <hr
              role="presentation"
              className="w-full border-t border-zinc-950/10 dark:border-white/10"
            />
            <div className="mt-6 text-lg/6 font-medium sm:text-sm/6">
              {item.title}
            </div>
            <div className="mt-3 text-3xl/8 font-semibold sm:text-2xl/8">
              {item.value}
            </div>
            <div className="mt-3 text-sm/6 sm:text-xs/6">
              <span
                className={classNames(
                  "inline-flex items-center gap-x-1.5 rounded-md px-1.5 py-0.5 text-sm/5 font-medium sm:text-xs/5",
                  item.percentageChange >= 0
                    ? " bg-lime-400/20 text-lime-700 group-hover:bg-lime-400/30 dark:bg-lime-400/10 dark:text-lime-300 dark:group-hover:bg-lime-400/15 "
                    : " bg-pink-400/15 text-pink-700 group-hover:bg-pink-400/25 dark:bg-pink-400/10 dark:text-pink-400 dark:group-hover:bg-pink-400/20",
                )}
              >
                {item.percentageChange}%
              </span>{" "}
              <span className="text-zinc-500">{item.comparisonText}</span>
            </div>
          </div>
        );
      })}
    </div>
  );
}
