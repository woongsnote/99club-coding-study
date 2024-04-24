import { Suspense } from "react";
import type { Metadata } from "next";
import { getAllPosts, getPostsByLevel } from "@/app/utils/notion";
import { Loading, PostList, Levels } from "@/app/components";
import { TNotionPage } from "@/app/types";

export const metadata: Metadata = {
  title: "Posts",
};

type Props = {
  searchParams: { [key: string]: string };
};

export default async function PostsPage({ searchParams }: Props) {
  let allPosts: TNotionPage[] | undefined = [];

  if (!searchParams || searchParams.level === "All") {
    allPosts = await getAllPosts();
  } else {
    allPosts = await getPostsByLevel(searchParams.level);
  }

  return (
    <>
      <Levels />
      <Suspense fallback={<Loading arrayLength={allPosts?.length} />}>
        {allPosts ? <PostList posts={allPosts} /> : <>No Posts</>}
      </Suspense>
    </>
  );
}
