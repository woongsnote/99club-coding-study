import Link from "next/link";
import { TPost } from "../types";
import { FormattedDate } from "./FormattedDate";
import { Level } from "./Level";

export const PostCard = ({
  title,
  description,
  publishedDate,
  slug,
  level,
}: TPost) => {
  return (
    <Link href={`/posts/${slug}`}>
      <article className="p-2 rounded-lg flex gap-4 items-center overflow-hidden break-keep w-full">
        <FormattedDate date={publishedDate!} />
        <div className="flex flex-col">
          {level && <Level level={level} />}
          <h2 className="font-bold text-2xl">{title}</h2>
          <p className="text-sm opacity-80">{description}</p>
        </div>
      </article>
    </Link>
  );
};
