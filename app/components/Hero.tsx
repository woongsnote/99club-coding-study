import { SocialLinks } from "@/app/components/SocialLinks";

const title = "99Club Coding Test Study";
const description = "코딩테스트 스터디를 진행하면서 푼 문제 모음";

export const Hero = () => {
  return (
    <section className="w-full py-8 flex flex-col items-center gap-2 space-y-4 text-center break-keep lg:py-12">
      <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
        {title}
      </h1>
      <p className="text-lg mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
        {description}
      </p>
      <SocialLinks />
    </section>
  );
};
