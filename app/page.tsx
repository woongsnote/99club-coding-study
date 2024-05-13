import { Suspense } from "react";
import { getLatestNotionPages } from "@/app/utils/notion";
import { Hero, Loading, PostList } from "@/app/components";
import { LATEST_POSTS } from "@/app/constants";
import { TNotionPage } from "@/app/types";

export default async function Home() {
  let latestPosts: TNotionPage[] | undefined = [];
  latestPosts = await getLatestNotionPages(LATEST_POSTS);

  return (
    <>
      <Hero />
      <Suspense fallback={<Loading arrayLength={LATEST_POSTS} />}>
        {latestPosts ? <PostList posts={latestPosts} /> : <>No Posts</>}
      </Suspense>
    </>
  );
}
