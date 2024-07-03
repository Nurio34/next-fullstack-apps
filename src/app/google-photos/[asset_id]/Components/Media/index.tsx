import { CloudinaryResourceType } from "@/app/google-photos/types";
import { useAppSelector } from "@/providers/reduxjs-provider/hooks";
import { CldImage } from "next-cloudinary";
import { PlaceholderValue } from "next/dist/shared/lib/get-img-props";
import React from "react";

function Media({ resource }: { resource: CloudinaryResourceType }) {
    const { transformations } = useAppSelector((s) => s.tab);

    const shimmer = (w: number, h: number) => `
  <svg width="${w}" height="${h}" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <defs>
      <linearGradient id="g">
        <stop stop-color="#333" offset="20%" />
        <stop stop-color="#222" offset="50%" />
        <stop stop-color="#333" offset="70%" />
      </linearGradient>
    </defs>
    <rect width="${w}" height="${h}" fill="#333" />
    <rect id="r" width="${w}" height="${h}" fill="url(#g)" />
    <animate xlink:href="#r" attributeName="x" from="-${w}" to="${w}" dur="1s" repeatCount="indefinite"  />
  </svg>`;

    const toBase64 = (str: string) =>
        typeof window === "undefined"
            ? Buffer.from(str).toString("base64")
            : window.btoa(str);

    const dataUrl: PlaceholderValue = `data:image/svg+xml;base64,${toBase64(
        shimmer(600, 400),
    )}`;

    return (
        <CldImage
            priority
            key={resource.asset_id}
            src={resource.public_id}
            alt={resource.display_name}
            fill
            sizes="(min-width: 1024px) 1024px, (min-width: 768px) 768px, (min-width: 480px) 480px,"
            className=" absolute top-0 left-0 -z-10"
            {...transformations}
            placeholder={dataUrl}
        />
    );
}

export default Media;
