import React, { Suspense } from "react";
import { PostList } from "../components/PostList";
import { getDatabaseData } from "../utils/notion";

export default async function page() {
  const allPosts = await getDatabaseData();

  return (
    <Suspense fallback={<span>Loading...</span>}>
      <PostList posts={allPosts.results} />
    </Suspense>
  );
}
