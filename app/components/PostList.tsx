import { PostCard } from "./PostCard";

//TODO using infinity scroll to show posts
//TODO type
type TPost = {
  id: string;
  properties: {
    title: { title: { plain_text: string }[] };
    description: { rich_text: { plain_text: string }[] };
    slug: { rich_text: { plain_text: string }[] };
  };
};

export const PostList = ({ posts }: { posts: TPost[] }) => {
  return (
    <ul className="m-2 p-2 flex flex-col gap-y-4 max-w-3xl mx-auto">
      {posts.map((post) => {
        return (
          <li key={post.id}>
            <PostCard
              title={post.properties?.title?.title[0]?.plain_text ?? ""}
              description={
                post.properties?.description?.rich_text[0]?.plain_text ?? ""
              }
              publishedDate=""
              slug={post.properties?.slug?.rich_text[0]?.plain_text ?? ""}
            />
          </li>
        );
      })}
    </ul>
  );
};
