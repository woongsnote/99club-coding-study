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
      <article className="rounded-lg flex gap-4 items-center overflow-hidden break-keep w-full hover:bg-gray-100 py-2 px-1 hover:drop-shadow-lg dark:hover:bg-gray-800">
        {publishedDate && <FormattedDate date={publishedDate} />}
        <div className="flex flex-col space-y-2">
          {level && <Level level={level} />}
          <h2 className="text-lg lg:text-4xl">{title}</h2>
          <p className="text-sm opacity-80 lg:text-lg">{description}</p>
        </div>
      </article>
    </Link>
  );
};
