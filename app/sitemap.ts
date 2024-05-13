import { MetadataRoute } from "next";
import { getAllPosts } from "./utils/notion";
import { BASE_URL } from "./constants";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const allPosts = await getAllPosts();

  if (!allPosts) return [];

  return allPosts.map((post) => ({
    url: `${BASE_URL}/posts/${post.properties.Slug.rich_text[0].plain_text}`,
    lastModified: post.last_edited_time,
    changeFrequency: "daily",
  }));
}
