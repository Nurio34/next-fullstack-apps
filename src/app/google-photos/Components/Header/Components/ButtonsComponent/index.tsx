"use client";

import { useParams } from "next/navigation";
import CldUploadButtonComponent from "./CldUploadButtonComponent";
import ActionButtons from "./ActionButtons";

function BuutonsComponent() {
    const params = useParams();

    const isParams = Object.keys(params).length > 0;

    return (
        <div>
            {!isParams ? <CldUploadButtonComponent /> : <ActionButtons />}
        </div>
    );
}

export default BuutonsComponent;
