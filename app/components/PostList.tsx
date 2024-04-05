import { PostCard } from "./PostCard";

export const PostList = ({ posts }: { posts: any[] }) => {
  console.log(posts[0].properties);
  return (
    <ul className="m-2 p-2 flex flex-col gap-y-4 max-w-3xl mx-auto">
      {posts.map((post) => {
        return (
          <li key={post.id}>
            <PostCard
              title={post.properties?.Title?.title[0]?.plain_text ?? ""}
              description={
                post.properties?.Description?.rich_text[0]?.plain_text ?? ""
              }
              publishedDate={post.properties?.PublishedDate?.date.start}
              level={post.properties?.Level?.select.name}
              problemLink={"post.properties.ProblemLink"}
              slug={post.properties?.Slug?.rich_text[0]?.plain_text ?? ""}
            />
          </li>
        );
      })}
    </ul>
  );
};
