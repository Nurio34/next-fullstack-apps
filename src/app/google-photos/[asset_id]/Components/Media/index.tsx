import { CloudinaryResourceType } from "@/app/google-photos/types";
import { CldImage } from "next-cloudinary";
import React from "react";

function Media({ resource }: { resource: CloudinaryResourceType }) {
    return (
        <CldImage
            key={resource.asset_id}
            src={resource.public_id}
            alt={resource.display_name}
            width={resource.width}
            height={resource.height}
            sizes="(min-width: 1024px) 1024px, (min-width: 768px) 768px, (min-width: 480px) 480px,"
            className=" absolute top-0 left-0 -z-10"
            restore
        />
    );
}

export default Media;
