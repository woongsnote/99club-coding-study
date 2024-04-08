import { Suspense } from "react";
import { getDatabaseData } from "@/app/utils/notion";
import { Hero, Loading, PostList } from "@/app/components";

const LATEST_POSTS = 5;

export default async function Home() {
  const latestPosts = await getDatabaseData(LATEST_POSTS);

  return (
    <>
      <Hero />
      <Suspense fallback={<Loading len={LATEST_POSTS} />}>
        <PostList posts={latestPosts} />
      </Suspense>
    </>
  );
}
