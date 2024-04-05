import Link from "next/link";
import { BiLogoBlogger, BiLogoGithub, BiLogoGmail } from "react-icons/bi";

type socialLink = {
  title: string;
  link: string;
  icon: React.ReactNode;
};
const links: socialLink[] = [
  {
    title: "blog",
    link: "https://woongsnote.dev",
    icon: <BiLogoBlogger size={24} />,
  },
  {
    title: "github",
    link: "https://github.com/woongsnote",
    icon: <BiLogoGithub size={24} />,
  },
  {
    title: "email",
    link: "mailto:woongsnote@gmail.com",
    icon: <BiLogoGmail size={24} />,
  },
];
export const SocialLinks = () => {
  return (
    <div className="flex gap-4">
      {links.map(({ title, link, icon }) => (
        <Link
          key={title}
          href={link}
          target="_blank"
          className="hover:text-red-500">
          {icon}
        </Link>
      ))}
    </div>
  );
};
