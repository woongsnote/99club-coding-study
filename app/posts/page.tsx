import { Suspense } from "react";
import type { Metadata } from "next";
import { getDatabaseData } from "@/app/utils/notion";
import { Loading, PostList } from "@/app/components";

export const metadata: Metadata = {
  title: "Posts | 99Club",
};

export default async function PostsPage() {
  const allPosts = await getDatabaseData();

  return (
    <Suspense fallback={<Loading len={allPosts.length} />}>
      <PostList posts={allPosts} />
    </Suspense>
  );
}
