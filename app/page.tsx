import { Suspense } from "react";
import { PostList } from "./components/PostList";
import { getDatabaseData } from "./utils/notion";
import { Hero } from "./components/Hero";
import { Loading } from "./components/Loading";

const LATEST_POSTS = 5;

export default async function Home() {
  const latestPosts = await getDatabaseData(LATEST_POSTS);

  return (
    <>
      <Hero />
      <Suspense fallback={<Loading />}>
        <PostList posts={latestPosts.results} />
      </Suspense>
    </>
  );
}
