"use client";
import Image from "next/image";
import { FC } from "react";

interface SocialLinkItemProps {
  imgSrc: string;
  imgAlt: string;
  url: string;
}

const SocialLinkItem: FC<SocialLinkItemProps> = ({ imgAlt, imgSrc, url }) => {
  return (
    <a
      href={url}
      title={imgAlt}
      target="_blank"
      className="hover:scale-110  transition"
    >
      <Image
        width={24}
        height={24}
        alt={imgAlt}
        loading="lazy"
        src={imgSrc}
        className="w-6 h-6 opacity-60 hover:opacity-100 max-h-6"
      />
    </a>
  );
};

export default SocialLinkItem;
