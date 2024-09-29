import Link from "next/link";
import { FaFacebook, FaGithub, FaInstagram } from "react-icons/fa";
import { GiRaven } from "react-icons/gi";

interface FooterLink {
  name: string;
  href: string;
}

interface SocialLink extends FooterLink {
  icon: (props: React.SVGProps<SVGSVGElement>) => JSX.Element;
}

const resources: FooterLink[] = [
  { name: "React", href: "https://ja.react.dev/" },
  { name: "Flowbite", href: "https://flowbite.com" },
  { name: "Tailwind CSS", href: "https://tailwindcss.com/" },
];

const follow: FooterLink[] = [
  { name: "Github", href: "https://github.com/themesberg/flowbite" },
  { name: "Discord", href: "https://discord.gg/4eeurUVvTy" },
];

const socialLinks: SocialLink[] = [
  {
    name: "Facebook",
    href: "#",
    icon: (props: React.SVGProps<SVGSVGElement>) => <FaFacebook {...props} />,
  },
  {
    name: "Instagram",
    href: "#",
    icon: (props: React.SVGProps<SVGSVGElement>) => <FaInstagram {...props} />,
  },
  {
    name: "GitHub",
    href: "#",
    icon: (props: React.SVGProps<SVGSVGElement>) => <FaGithub {...props} />,
  },
];

interface FooterLinkSectionProps {
  title: string;
  links: FooterLink[];
}

const FooterLinkSection: React.FC<FooterLinkSectionProps> = ({
  title,
  links,
}) => (
  <div>
    <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
      {title}
    </h2>
    <ul className="text-gray-600 dark:text-gray-400">
      {links.map((link) => (
        <li key={link.name} className="mb-4">
          <Link href={link.href} className="hover:underline">
            {link.name}
          </Link>
        </li>
      ))}
    </ul>
  </div>
);

export const Footer: React.FC = () => {
  return (
    <footer className="p-4 bg-white sm:p-6 dark:bg-gray-800">
      <div className="mx-auto max-w-screen-xl">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
            <Link href="/" className="flex items-center">
              <GiRaven className="text-3xl mr-1" />
              <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                RAYVEN
              </span>
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
            <FooterLinkSection title="リソース" links={resources} />
            <FooterLinkSection title="フォロー" links={follow} />
          </div>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
            © 2024
            <Link href="/" className="hover:underline">
              株式会社RAYVEN™
            </Link>
          </span>
          <div className="flex mt-4 space-x-6 sm:justify-center sm:mt-0">
            {socialLinks.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
              >
                <span className="sr-only">{item.name}</span>
                <item.icon className="w-5 h-5" aria-hidden="true" />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};
