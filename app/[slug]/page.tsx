import {
  getPageContent,
  getPageDataBySlug,
  notionClient,
} from "../utils/notion";
import { Post } from "../components/Post";
import { notFound } from "next/navigation";
import { NotionRenderer } from "@notion-render/client";
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

  console.log("Post: ", post);
  console.log("Description", post.properties.Description);
  return (
    <Post
      title={(post.properties.Title as any).title[0].plain_text}
      description={(post.properties.Description as any).rich_text[0].plain_text}
      content={html}
    />
  );
}
