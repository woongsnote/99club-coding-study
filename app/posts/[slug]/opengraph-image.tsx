import { getPageDataBySlug } from "@/app/utils/notion";
import { ImageResponse } from "next/og";

export const alt = "99club Coding Study";

export const size = {
  width: 1200,
  height: 630,
};

export const author = "by woongsnote";

export const contentType = "image/png";

export const tags = `#99일지, #99클럽, #TIL, #개발자스터디, #코딩테스트, #항해`;

export default async function Image({ params }: { params: { slug: string } }) {
  const post = await getPageDataBySlug(params.slug);
  const title = post.properties.Title.title[0].plain_text;
  const description = post.properties.Description.rich_text[0].plain_text;

  return new ImageResponse(
    (
      <div
        style={{
          background: `linear-gradient(to top, rgb(229, 124, 102), rgb(181, 133, 111))`,
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          color: "white",
          textShadow: `rgba(0, 0, 0, 0.4) 2px 2px 4px`,
          border: "none",
        }}
      >
        <h2 style={{ fontSize: 56 }}>{title}</h2>
        <p
          style={{
            fontSize: 24,
            padding: "1rem",
            wordBreak: "keep-all",
            maxWidth: "50%",
          }}
        >
          {description}
        </p>
        <span
          style={{
            fontSize: 20,
          }}
        >
          {author}
        </span>
        <p style={{ position: "absolute", bottom: "12", fontSize: "16" }}>
          {tags}
        </p>
      </div>
    ),
    {
      ...size,
    }
  );
}
