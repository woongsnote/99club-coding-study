import Link from "next/link";
import { TPost } from "@/app/types";
import { FormattedDate } from "@/app/components/FormattedDate";
import { Level } from "@/app/components/Level";

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
        {publishedDate && <FormattedDate date={publishedDate} />}
        <div className="flex flex-col">
          {level && <Level level={level} />}
          <h2 className="font-bold text-2xl">{title}</h2>
          <p className="text-sm opacity-80">{description}</p>
        </div>
      </article>
    </Link>
  );
};
