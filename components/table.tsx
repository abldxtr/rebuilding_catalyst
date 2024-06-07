export default function Table() {
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

  const table_header = [
    "Order number",
    "Purchase date",
    "Customer",
    "Event",
    "Amount",
  ];

  return (
    <div>
      <h2 className="mt-14 text-base/7 font-semibold text-zinc-950 sm:text-sm/6 dark:text-white">
        Recent orders
      </h2>
      <div>
        <div className="mt-4 [--gutter:theme(spacing.6)] lg:[--gutter:theme(spacing.10)] -mx-[--gutter] overflow-x-auto whitespace-nowrap">
          <div className="inline-block min-w-full align-middle sm:px-[--gutter]">
            <table className="min-w-full text-left text-sm/6 text-zinc-950 dark:text-white">
              <thead className="text-zinc-500 dark:text-zinc-400  ">
                <tr
                  className="border-b border-b-zinc-950/10 px-4 py-2 font-medium first:pl-[var(--gutter,theme(spacing.2))] 
                  last:pr-[var(--gutter,theme(spacing.2))] dark:border-b-white/10 sm:first:pl-1 sm:last:pr-1"
                >
                  {table_header.map((item, index) => {
                    return (
                      <th
                        key={index}
                        className="border-b border-b-zinc-950/10 px-4 py-2 font-medium first:pl-[var(--gutter,theme(spacing.2))] 
                      last:pr-[var(--gutter,theme(spacing.2))] dark:border-b-white/10 sm:first:pl-1 sm:last:pr-1"
                      >
                        {item}
                      </th>
                    );
                  })}
                </tr>
              </thead>

              <tbody>
                {table_data.map((item, index) => {
                  return (
                    <tr
                      key={index}
                      className="has-[[data-row-link][data-focus]]:outline
                       has-[[data-row-link][data-focus]]:outline-2 
                       has-[[data-row-link][data-focus]]:-outline-offset-2
                        has-[[data-row-link][data-focus]]:outline-blue-500 dark:focus-within:bg-white/[2.5%] hover:bg-zinc-950/[2.5%]
                         dark:hover:bg-white/[2.5%]"
                    >
                      <td
                        className="relative px-4 first:pl-[var(--gutter,theme(spacing.2))] last:pr-[var(--gutter,theme(spacing.2))] border-b 
                      border-zinc-950/5 dark:border-white/5 py-4 sm:first:pl-1 sm:last:pr-1"
                      >
                        <a href="/">{item["Order number"]}</a>
                      </td>
                      <td
                        className="text-zinc-500 relative px-4 first:pl-[var(--gutter,theme(spacing.2))] last:pr-[var(--gutter,theme(spacing.2))] 
                      border-b border-zinc-950/5 dark:border-white/5 py-4 sm:first:pl-1 sm:last:pr-1"
                      >
                        <a href="/">{item["Purchase date"]}</a>
                      </td>
                      <td
                        className="relative px-4 first:pl-[var(--gutter,theme(spacing.2))] last:pr-[var(--gutter,theme(spacing.2))] border-b 
                      border-zinc-950/5 dark:border-white/5 py-4 sm:first:pl-1 sm:last:pr-1"
                      >
                        <a href="/">{item.Customer}</a>
                      </td>
                      <td
                        className="relative px-4 first:pl-[var(--gutter,theme(spacing.2))] last:pr-[var(--gutter,theme(spacing.2))] border-b 
                      border-zinc-950/5 dark:border-white/5 py-4 sm:first:pl-1 sm:last:pr-1"
                      >
                        <a href="/">{item.Event}</a>
                      </td>
                      <td
                        className="text-zinc-500 relative px-4 first:pl-[var(--gutter,theme(spacing.2))] last:pr-[var(--gutter,theme(spacing.2))]
                         border-b border-zinc-950/5 
                        dark:border-white/5 py-4 sm:first:pl-1 sm:last:pr-1"
                      >
                        <a href="/">{item.Amount}</a>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
