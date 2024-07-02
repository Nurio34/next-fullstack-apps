"use client";

import { CldUploadButton } from "next-cloudinary";
import { FaCloudUploadAlt } from "react-icons/fa";

function CldUploadButtonComponent() {
    return (
        <CldUploadButton
            signatureEndpoint="/google-photos/api/sign-cloudinary-params"
            className="flex gap-[1vw] items-center"
        >
            <FaCloudUploadAlt size={24} className=" text-primary" />
            <span className=" bg-gradient-to-br from-secondary to-accent bg-clip-text text-transparent font-bold text-lg">
                Upload
            </span>
        </CldUploadButton>
    );
}

export default CldUploadButtonComponent;
