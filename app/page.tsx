import { Suspense } from "react";
import { PostList } from "./components/PostList";
import { getDatabaseData } from "./utils/notion";

export default async function Home() {
  
  const posts = await getDatabaseData();

  return (
    <>
      <Suspense fallback={<span>Loading...</span>}>
        <PostList posts={posts.results} />
      </Suspense>
    </>
  );
}
