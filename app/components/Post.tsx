export const Post = ({ content }: { content: string }) => {
  return (
    <div
      className="mt-4 w-full prose p-2 lg:max-w-3xl mx-auto break-keep overflow-scroll"
      dangerouslySetInnerHTML={{ __html: content }}
    />
  );
};
