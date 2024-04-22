import Link from "next/link";
export const Header = () => {
  return (
    <header className="px-4 py-1 fixed bg-white/60 w-full top-0 left-0 backdrop-blur-md z-10 flex justify-between border-b items-center text-lg lg:text-2xl">
      <div className="flex container items-center justify-between mx-auto w-full">
        <Link href="/" className="font-black text-red-500 w-fit">
          99Club
        </Link>
        <Link href="/posts" className="text-black hover:text-red-500 font-bold">
          Posts
        </Link>
      </div>
    </header>
  );
};
