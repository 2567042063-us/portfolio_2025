"use client";
// import { CldImage } from "next-cloudinary";
import lightgalleryRotate from "lightgallery/plugins/rotate";
import lightgalleryThumbnail from "lightgallery/plugins/thumbnail";
import LightGallery from "lightgallery/react";

import { frozenBody, unfrozenBody } from "@shared/utils/";

import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-rotate.css";
import "lightgallery/css/lg-thumbnail.css";
// import { data } from "./data";
export default function Masonry({ data }: { data: IPhotoItem[] }) {
  return (
    <LightGallery
      elementClassNames="columns-5 gap-2 md:columns-10"
      plugins={[lightgalleryThumbnail, lightgalleryRotate]}
      mode="lg-fade"
      pager={false}
      thumbnail={true}
      rotate={true}
      mobileSettings={{
        controls: false,
        download: false,
        // showCloseIcon: false,
        // rotate: false,
      }}
      onBeforeOpen={frozenBody}
      onAfterClose={unfrozenBody}
    >
      {data.map((item) => (
        <a
          href={`https://res.cloudinary.com/dpzkswl8u/image/upload/v1733583998/lvtd-projects${item.imageUrl}`}
          key={item.id}
          className="relative mb-2 block w-full break-inside-avoid overflow-hidden"
          data-sub-html={`<h4>${item.alt}</h4>
          ${item.description ? `<p>${item.description}</p>` : ""}`}
        >
          <img
            src={`https://res.cloudinary.com/dpzkswl8u/image/upload/v1733583998/lvtd-projects${item.imageUrl}`}
            alt={item.alt}
            className="w-full object-cover"
          />
        </a>
      ))}
    </LightGallery>
  );
}

// <CldImage
// src={item.imageUrl}
// fill
// sizes="100vw"
// alt={item.title}
// style={{
//   objectFit: "cover",
//   objectPosition: "center",
//   width: "100%",
//   height: "100%",
//   maxWidth: "initial",
//   aspectRatio: "3/4",
//   // position: "absolute",
//   // top: "50%",
//   // transform: "translateY(-50%)",
// }}
// />
