import Link from "next/link";
export const Header = () => {
  return (
    <header className="p-2 fixed bg-black/80 w-full top-0 left-0 backdrop-blur-md z-10">
      <Link href="/">
        <h1 className="text-start text-3xl font-black text-red-500">99club</h1>
      </Link>
    </header>
  );
};
