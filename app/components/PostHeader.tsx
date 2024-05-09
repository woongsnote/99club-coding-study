import { BiRightTopArrowCircle } from "react-icons/bi";
import { TPost } from "@/app/types";
import { Level, TagList } from "@/app/components";

export const PostHeader = ({
  title,
  description,
  level,
  publishedDate,
  problemLink,
}: TPost) => {
  return (
    <section className="w-full border-b items-center flex flex-col pb-4 gap-6 break-keep">
      <div className="w-full flex justify-between">
        {level && <Level level={level} />}
        <span className="w-fit">{publishedDate}</span>
      </div>
      <h2 className="text-3xl lg:text-5xl font-black">{title}</h2>
      <p className="text-base">{description}</p>
      <TagList />
      {problemLink && (
        <a
          href={problemLink}
          target="_blank"
          className="flex gap-2 items-center hover:text-white rounded-full hover:bg-red-500/80 px-2">
          직접 풀러가기
          <BiRightTopArrowCircle />
        </a>
      )}
    </section>
  );
};
