"use client";

import { CldImage } from "next-cloudinary";

type Props = {
  alt: string;
  src: string;
};

export default function ProjectItemImage({alt, src}: Props) {
  return (
    <CldImage
      fill
      alt={alt}
      src={src}
      priority
      sizes="(max-width: 768px) 100vw"
      style={{
        objectFit: "contain",
        objectPosition: "center",
      }}
    />
  );
};

{/* <Image
      fill
      alt={project.name}
      src={project.image}
      style={{
        objectFit: "contain",
        objectPosition: "center",
      }}
    /> */}
