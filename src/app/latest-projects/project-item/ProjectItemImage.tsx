"use client";

import { CldImage } from "next-cloudinary";

type Props = {
  alt: string;
  src: string;
};

export default function ProjectItemImage({ alt, src }: Props) {
  return (
    <CldImage
      alt={alt}
      src={src}
      priority
      width={500}
      height={500}
      sizes="(max-width: 768px) 100vw"
      style={{
        objectFit: "contain",
        objectPosition: "center",
      }}
    />
  );
}
