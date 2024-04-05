import { Level } from "./Level";

interface PostProps {
  title: string;
  description: string;
  content: string;
  publishedDate: string;
  level: string;
}

const tags = ["99일지", "99클럽", "TIL", "개발자스터디", "코딩테스트", "항해"];

export const Post = (props: PostProps) => {
  const { title, description, content, publishedDate, level } = props;
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
      </section>
      <div
        className="text-xl mt-4 w-full prose break-keep prose-sm"
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </article>
  );
};
