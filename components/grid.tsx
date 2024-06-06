export default function Grid() {
  const data = [
    {
      title: "Total revenue",
      value: "$2.6M",
      percentageChange: "+4.5%",
      comparisonText: "from last week",
    },
    {
      title: "Average order value",
      value: "$455",
      percentageChange: "-0.5%",
      comparisonText: "from last week",
    },
    {
      title: "Tickets sold",
      value: "5,888",
      percentageChange: "+4.5%",
      comparisonText: "from last week",
    },
    {
      title: "Pageviews",
      value: "823,067",
      percentageChange: "+21.2%",
      comparisonText: "from last week",
    },
  ];

  const table_data = [
    {
      "Order number": 3000,
      "Purchase date": "May 9, 2024",
      Customer: "Leslie Alexander",
      Event: "Bear Hug: Live in Concert",
      Amount: "$80.00",
    },
    {
      "Order number": 3001,
      "Purchase date": "May 5, 2024",
      Customer: "Michael Foster",
      Event: "Six Fingers — DJ Set",
      Amount: "$299.00",
    },
    {
      "Order number": 3002,
      "Purchase date": "Apr 28, 2024",
      Customer: "Dries Vincent",
      Event: "We All Look The Same",
      Amount: "$150.00",
    },
    {
      "Order number": 3003,
      "Purchase date": "Apr 23, 2024",
      Customer: "Lindsay Walton",
      Event: "Bear Hug: Live in Concert",
      Amount: "$80.00",
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
                className="inline-flex items-center gap-x-1.5 rounded-md px-1.5 py-0.5 text-sm/5 font-medium sm:text-xs/5 
              forced-colors:outline bg-lime-400/20 text-lime-700 group-data-[hover]:bg-lime-400/30 dark:bg-lime-400/10
               dark:text-lime-300 dark:group-data-[hover]:bg-lime-400/15"
              >
                {item.percentageChange}
              </span>{" "}
              <span className="text-zinc-500">{item.comparisonText}</span>
            </div>
          </div>
        );
      })}
    </div>
  );
}
