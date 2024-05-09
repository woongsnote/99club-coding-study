import Link from "next/link";
import { Logo } from "./Logo";
import { ThemeSwitcher } from "./ThemeSwitcher";
export const Header = () => {
  return (
    <header className="px-4 py-1 fixed bg-background/80 w-full top-0 left-0 backdrop-blur-md z-10 flex justify-between items-center text-lg lg:text-2xl">
      <div className="flex container items-center justify-between mx-auto w-full">
        <Logo />
        <div className="flex gap-4 items-center">
          <Link href="/posts" className="hover:text-red-500 font-bold">
            Posts
          </Link>
          <ThemeSwitcher />
        </div>
      </div>
    </header>
  );
};
