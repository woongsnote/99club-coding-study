import { TNotionPage } from "@/app/types";
import { PostCard } from "@/app/components/PostCard";

const postListStyle = `p-2 flex flex-col space-y-6 max-w-4xl mx-auto mt-4`;

export const PostList = ({ posts }: { posts: TNotionPage[] }) => {
  if (posts.length === 0) {
    return <div className={postListStyle}>Coming soon...</div>;
  }

  return (
    <ul className={postListStyle}>
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
              slug={post.properties?.Slug?.rich_text[0]?.plain_text ?? ""}
            />
          </li>
        );
      })}
    </ul>
  );
};
