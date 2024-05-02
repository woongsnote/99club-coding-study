import { Suspense } from "react";
import { getLatestNotionPages } from "@/app/utils/notion";
import { Hero, Loading, PostList } from "@/app/components";
import { LATEST_POSTS } from "@/app/lib/constants";
import { TNotionPage } from "@/app/types";

export default async function Home() {
  const latestPosts: TNotionPage[] = await getLatestNotionPages(LATEST_POSTS);

  return (
    <>
      <Hero />
      <Suspense fallback={<Loading arrayLength={LATEST_POSTS} />}>
        <PostList posts={latestPosts!} />
      </Suspense>
    </>
  );
}
