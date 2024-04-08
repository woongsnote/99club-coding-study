import Link from "next/link";
import { BiRightTopArrowCircle } from "react-icons/bi";
import { TPost } from "@/app/types";
import { Level } from "@/app/components/Level";

const tags = ["99일지", "99클럽", "TIL", "개발자스터디", "코딩테스트", "항해"];

export const PostHeader = ({
  title,
  description,
  level,
  publishedDate,
  problemLink,
}: TPost) => {
  return (
    <section className="border-b items-center flex flex-col pb-4 gap-6">
      <div className="w-full flex justify-between">
        {level && <Level level={level} />}
        <span className="w-fit">{publishedDate}</span>
      </div>
      <h2 className="text-5xl font-black">{title}</h2>
      <p className="text-base">{description}</p>
      <p className="flex gap-x-2 text-sm">
        {tags.map((tag) => (
          <span key={tag}>#{tag}</span>
        ))}
      </p>
      {problemLink && (
        <Link
          href={problemLink}
          className="flex gap-2 items-center hover:text-white rounded-full hover:bg-red-500/80 px-2">
          직접 풀러가기
          <BiRightTopArrowCircle />
        </Link>
      )}
    </section>
  );
};
