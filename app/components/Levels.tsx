import Link from "next/link";
import { Level } from "./Level";
import { PROBLEM_LEVELS as levels } from "@/app/lib/constants";

export const Levels = () => {
  return (
    <div className="w-full mx-auto max-w-4xl px-2 items-center flex-1 flex py-3 mt-4 gap-2">
      {levels.map((level) => (
        <Link href={`/posts/?level=${level}`} key={level}>
          <Level level={level}></Level>
        </Link>
      ))}
    </div>
  );
};
