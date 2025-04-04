import Link from "next/link";
import { socialLinks } from "../config";

function SocialLink(props: {
  href: string;
  icon: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
}) {
  const { href, icon: Icon } = props;
  return (
    <a href={href} target="_blank" rel="noopener noreferrer">
      <Icon />
    </a>
  );
}

function SocialLinks() {
  return (
    <div className="flex text-lg gap-3.5 float-right transition-opacity duration-300 hover:opacity-90">
      {socialLinks.map((link) => (
        <SocialLink key={link.text} href={link.href} icon={link.icon} />
      ))}
    </div>
  );
}

export function Navbar() {
  return (
    <nav className="lg:mb-16 mb-12 py-5">
      <div className="flex flex-col md:flex-row md:items-center justify-between">
        <div className="flex items-center">
          <Link href="/" className="text-3xl font-semibold">
            HolyFata
          </Link>
        </div>
        <div className="flex flex-row gap-4 mt-6 md:mt-0 md:ml-auto items-center">
          <SocialLinks />
        </div>
      </div>
    </nav>
  );
}
