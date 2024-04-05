import {
  getPageContent,
  getPageDataBySlug,
  notionClient,
} from "../../utils/notion";
import { Post } from "../../components/Post";
import { notFound } from "next/navigation";
import { NotionRenderer } from "@notion-render/client";
import { Suspense } from "react";
import { Loading } from "../../components/Loading";
import hljsPlugin from "@notion-render/hljs-plugin";

export default async function DetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const post = await getPageDataBySlug(params.slug);

  if (!post) notFound();

  const content = await getPageContent(post.id);

  const notionRenderer = new NotionRenderer({
    client: notionClient,
  });

  notionRenderer.use(hljsPlugin({}));

  const html = await notionRenderer.render(...content);

  //TODO remove any
  return (
    <Suspense fallback={<Loading />}>
      <Post
        title={(post.properties.Title as any).title[0].plain_text}
        description={
          (post.properties.Description as any).rich_text[0].plain_text
        }
        publishedDate={(post.properties.PublishedDate as any).date.start}
        level={(post.properties.Level as any).select.name}
        link={(post.properties.ProblemLink as any).url}
        content={html}
      />
    </Suspense>
  );
}
