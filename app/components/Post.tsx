import Link from "next/link";
import { BiRightTopArrowCircle } from "react-icons/bi";
import { Level } from "./Level";

interface PostProps {
  title: string;
  description: string;
  content: string;
  publishedDate: string;
  level: string;
  link: string;
}

const tags = ["99일지", "99클럽", "TIL", "개발자스터디", "코딩테스트", "항해"];

export const Post = (props: PostProps) => {
  const { title, description, content, publishedDate, level, link } = props;
  return (
    <article className="w-full flex flex-col p-4 rounded-lg max-w-3xl mx-auto border-2">
      <div className="w-full flex justify-between mb-4">
        <Level level={level} />
        <span className="w-fit">{publishedDate}</span>
      </div>
      <section className="border-b items-center flex flex-col pb-4 gap-4">
        <h2 className="text-5xl font-black">{title}</h2>
        <p className="text-base">{description}</p>
        <p className="flex gap-x-2 text-sm">
          {tags.map((tag) => (
            <span key={tag}>#{tag}</span>
          ))}
        </p>
        <Link
          href={link}
          className="flex gap-2  items-center hover:text-white rounded-full hover:bg-red-500/80 px-2">
          직접 풀러가기
          <BiRightTopArrowCircle />
        </Link>
      </section>
      <div
        className="text-xl mt-4 w-full prose break-keep prose-sm"
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </article>
  );
};
