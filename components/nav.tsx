import Nav_sec_1 from "./nav_sec_1";
import Nav_sec_2 from "./nav_sec_2";
import Nav_sec_3 from "./nav_sec_3";

export default function Nav({
  className,
  className2 = "flex h-full flex-col",
}: {
  className: string;
  className2: string;
}) {
  return (
    <div className={className}>
      <nav className={className2}>
        {/* 1 */}
        <Nav_sec_1 />

        {/* 2 */}
        <Nav_sec_2 />

        {/* 3 */}
        <Nav_sec_3 />
      </nav>
    </div>
  );
}
