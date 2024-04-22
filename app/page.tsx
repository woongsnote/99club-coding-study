import { Suspense } from "react";
import { getLatestPosts } from "@/app/utils/notion";
import { Hero, Loading, PostList } from "@/app/components";
import { LATEST_POSTS } from "@/app/lib/constants";

export default async function Home() {
  const latestPosts = await getLatestPosts();

  return (
    <>
      <Hero />
      <Suspense fallback={<Loading arrayLength={LATEST_POSTS} />}>
        <PostList posts={latestPosts!} />
      </Suspense>
    </>
  );
}
