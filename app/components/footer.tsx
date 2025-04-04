"use client";

import React from "react";
import { socialLinks } from "../config";

const YEAR = new Date().getFullYear();

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

export default function Footer() {
  return (
    <small className="block lg:mt-24 mt-16 text-[#1C1C1C] dark:text-[#D4D4D4]">
      <time>© {YEAR}</time> <a className="no-underline">holyfata</a>
      <SocialLinks />
    </small>
  );
}
