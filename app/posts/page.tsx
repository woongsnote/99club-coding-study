import { Suspense } from "react";
import type { Metadata } from "next";
import { getDatabaseData } from "@/app/utils/notion";
import { Loading, PostList } from "@/app/components";
import { Levels } from "../components/Levels";
import { TNotionPage } from "@/app/types";

export const metadata: Metadata = {
  title: "Posts | 99Club",
};

type Props = {
  searchParams: { [key: string]: string };
};

export default async function PostsPage({ searchParams }: Props) {
  let allPosts: TNotionPage[] | undefined = [];

  if (!searchParams || searchParams.level === "All") {
    allPosts = await getDatabaseData();
  } else {
    allPosts = await getDatabaseData(0, searchParams.level);
  }

  return (
    <>
      <Levels />
      <Suspense fallback={<Loading len={allPosts?.length} />}>
        {allPosts && <PostList posts={allPosts} />}
      </Suspense>
    </>
  );
}
