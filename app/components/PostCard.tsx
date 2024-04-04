import Link from "next/link";
import { TPost } from "../types";

export const PostCard = ({
  title,
  description,
  publishedDate,
  slug,
}: TPost) => {
  return (
    <Link href={`/${slug}`} className="">
      <article className="text-3xl p-2 rounded-lg flex flex-col gap-2 hover:bg-red-500/90 overflow-hidden break-keep">
        <h2 className="font-bold">{title}</h2>
        <div className="flex justify-between">
          <p className="text-sm font-extralight">{description}</p>
          <span className="text-sm">{publishedDate}</span>
        </div>
      </article>
    </Link>
  );
};
