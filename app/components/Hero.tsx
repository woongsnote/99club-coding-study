import { SocialLinks } from "@/app/components/SocialLinks";

export const Hero = () => {
  return (
    <section className="w-full py-8 flex flex-col items-center gap-2 space-y-4 text-center break-keep lg:py-12">
      <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
        99클럽 코테 스터디
      </h1>
      <p className="text-lg mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
        스터디를 진행하면서 푼 프로그래머스 문제들에 대한 기록입니다.
      </p>
      <SocialLinks />
    </section>
  );
};
