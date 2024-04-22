import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  getPageContent,
  getPageDataBySlug,
  renderPageContent,
} from "@/app/utils/notion";
import { PostHeader, Post, Comments } from "@/app/components";

type Props = {
  params: { slug: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = await getPageDataBySlug(params.slug);

  const title = post?.properties.Title.title[0].plain_text;
  const description = post?.properties.Description.rich_text[0].plain_text;

  return {
    title: title,
    description: description,
    openGraph: {
      title: title,
      description: description,
    },
  };
}

export default async function PostPage({ params }: Props) {
  const post = await getPageDataBySlug(params.slug);
  try {
    if (!post) {
      throw new Error("Post not found");
    }
  } catch (error) {
    notFound();
  }

  const content = await getPageContent(post.id);

  const html = await renderPageContent(content!);

  return (
    <article className="w-full flex flex-col p-4 rounded-lg mx-auto border-2 m-4">
      <PostHeader
        title={post.properties.Title?.title[0]?.plain_text}
        description={post.properties.Description?.rich_text[0]?.plain_text}
        publishedDate={post.properties.PublishedDate?.date.start}
        problemLink={post.properties.ProblemLink?.url}
        level={post.properties.Level?.select.name}
      />
      <Post content={html} />
      <Comments />
    </article>
  );
}
