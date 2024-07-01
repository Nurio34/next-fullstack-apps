"use client";

import { ResourceType } from "@/app/google-photos/types";
import React from "react";
import { CldImage } from "next-cloudinary";
function Media({ resource, index }: { resource: ResourceType; index: number }) {
    console.log(resource);

    return (
        <figure className={`relative aspect-square`}>
            <CldImage
                priority={index === 0}
                key={resource.asset_id}
                src={resource.secure_url}
                alt={resource.display_name}
                fill
                sizes="(min-width: 1200px) 320px, (min-width: 768px) calc(33.33vw - 2vw), (min-width: 480px) calc(50vw - 2vw), 100vw"
            />
        </figure>
    );
}

export default Media;
