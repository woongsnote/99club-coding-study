import { MetadataRoute } from "next";
import { getDatabaseData } from "./utils/notion";

const BASE_URL = "https://99club-coding-study.vercel.app";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const posts = await getDatabaseData();

  return posts.map((post) => ({
    url: `${BASE_URL}/posts/${post.url}`,
    lastModified: post.last_edited_time,
    priority: 0.8,
    changeFrequency: "daily",
  }));
}
