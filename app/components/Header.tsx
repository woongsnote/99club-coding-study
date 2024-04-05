import Link from "next/link";
export const Header = () => {
  return (
    <header className="p-2 fixed bg-white/60 w-full top-0 left-0 backdrop-blur-md z-10 flex justify-between border-b items-center">
      <Link href="/" className="text-2xl font-black text-red-500 w-fit">
        99Club
      </Link>
      <nav>
        <Link href="/posts" className="text-black hover:text-red-500 font-bold">
          Posts
        </Link>
      </nav>
    </header>
  );
};
