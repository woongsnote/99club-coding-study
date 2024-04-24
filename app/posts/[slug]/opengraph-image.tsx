import { getPageDataBySlug } from "@/app/utils/notion";
import { ImageResponse } from "next/og";

export const alt = "99club Coding Study";

export const size = {
  width: 1200,
  height: 630,
};

export const author = "woongsnote";

export const contentType = "image/png";

export default async function Image({ params }: { params: { slug: string } }) {
  const post = await getPageDataBySlug(params.slug);
  const title = post.properties.Title.title[0].plain_text;
  const description = post.properties.Description.rich_text[0].plain_text;

  return new ImageResponse(
    (
      <div
        style={{
          background: "white",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
        }}>
        <h2 style={{ fontSize: 56 }}>{title}</h2>
        <p
          style={{
            fontSize: 24,
            padding: "1rem",
            wordBreak: "keep-all",
            maxWidth: "50%",
          }}>
          {description}
        </p>
        <span
          style={{
            fontSize: 20,
            position: "absolute",
            bottom: "24",
            right: "24",
          }}>
          {author}
        </span>
      </div>
    ),
    {
      ...size,
    }
  );
}
