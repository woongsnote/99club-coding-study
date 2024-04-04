import { Suspense } from "react";
import { Loading } from "../components/Loading";
import { getPageData } from "../utils/notion";

const tags = ["99일지", "99클럽", "TIL", "개발자스터디", "코딩테스트", "항해"];

export default async function DetailPage() {
  const post = await getPageData("f73b946c7dba421dbc6499dd4a1abb48");
  //TODO why type error
  const { properties } = post;

  const title = properties.title.title[0].plain_text;
  const description = properties.description.rich_text[0].plain_text;

  return (
    <Suspense fallback={<Loading />}>
      <article className="prose text-white prose-invert mx-auto border p-2 min-h-screen rounded-lg m-4">
        <span className="my-0 text-red-500 text-sm rounded-lg font-black">
          Beginner
        </span>
        <h2 className="my-2">{title}</h2>
        <p className="break-keep">{description}</p>
        <p className="flex gap-2">
          {tags.map((tag) => (
            <span key={tag}>#{tag}</span>
          ))}
        </p>
        {/* TODO add Content blocks */}
      </article>
    </Suspense>
  );
}
