import Header from "@/components/header";
import Nav from "@/components/nav";
import Image from "next/image";

export default function Home() {
  return (
    <main
      className="relative flex min-h-svh 
    w-full bg-white max-lg:flex-col lg:bg-zinc-100 dark:bg-zinc-900 dark:lg:bg-zinc-950"
    >
      <Header />

      <div>
        <Nav className="fixed inset-y-0 left-0 w-64 max-lg:hidden" />
      </div>
    </main>
  );
}
