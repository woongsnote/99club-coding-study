import { MetadataRoute } from "next";
import { getDatabaseData } from "./utils/notion";
import { BASE_URL } from "./lib/constants";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const posts = await getDatabaseData();

  if (!posts) return [];

  return posts.map((post) => ({
    url: `${BASE_URL}/posts/${post.properties.Slug.rich_text[0].plain_text}`,
    lastModified: post.last_edited_time,
    changeFrequency: "daily",
  }));
}
