import Header from "@/components/header";
import Main from "@/components/main";
import Nav from "@/components/nav";

export default function Home() {
  return (
    <main className="flex flex-1 flex-col pb-2 lg:min-w-0 lg:pl-64 lg:pr-2 lg:pt-2">
      <Header />

      <div>
        <Nav
          className="fixed z-2 inset-y-0 left-0 w-64 max-lg:hidden"
          className2="flex h-full flex-col"
        />
      </div>

      <Main />
    </main>
  );
}
