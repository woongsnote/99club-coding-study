export const Post = ({ content }: { content: string }) => {
  return (
    <div
      className="text-xl mt-4 w-full prose break-keep prose-sm"
      dangerouslySetInnerHTML={{ __html: content }}
    />
  );
};
