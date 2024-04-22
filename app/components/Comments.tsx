"use client";
import Giscus from "@giscus/react";

export const Comments = () => {
  return (
    <Giscus
      id="comments"
      repo="woongsnote/99club-coding-study"
      repoId="R_kgDOLpkd7g"
      category="Comments"
      categoryId="DIC_kwDOLpkd7s4CeiV4"
      mapping="pathname"
      term="Welcome to @giscus/react component!"
      reactionsEnabled="1"
      emitMetadata="0"
      inputPosition="top"
      theme="light_protanopia"
      lang="en"
      loading="lazy"
    />
  );
};
