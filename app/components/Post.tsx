interface PostProps {
  title: string;
  description: string;
  content: string;
}

const tags = ["99일지", "99클럽", "TIL", "개발자스터디", "코딩테스트", "항해"];

export const Post = (props: PostProps) => {
  const { title, description, content } = props;

  return (
    <article className="w-full mb-10 flex flex-col items-center pt-20 max-w-3xl mx-auto">
      <h2 className="text-5xl font-black text-white mb-4">{title}</h2>
      <p className="my-2 text-xl">{description}</p>
      <p className="flex gap-2 text-sm">
        {tags.map((tag) => (
          <span key={tag}>#{tag}</span>
        ))}
      </p>
      <div
        className="text-xl mt-4 w-full leading-10 prose prose-invert text-white"
        dangerouslySetInnerHTML={{ __html: content }}
      ></div>
    </article>
  );
};
