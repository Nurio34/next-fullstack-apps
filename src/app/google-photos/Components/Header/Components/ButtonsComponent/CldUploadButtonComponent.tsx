import { useResources } from "@/app/google-photos/hooks/useResources";
import {
    CldUploadButton,
    CloudinaryUploadWidgetInfo,
    CloudinaryUploadWidgetResults,
} from "next-cloudinary";
import { FaCloudUploadAlt } from "react-icons/fa";

function CldUploadButtonComponent() {
    const { addResources } = useResources({
        disableFetch: true,
    });

    const handleOnSuccess = async (result: CloudinaryUploadWidgetResults) => {
        if (result.info) {
            await addResources([
                result.info,
            ] as Array<CloudinaryUploadWidgetInfo>);
        }
    };

    return (
        <CldUploadButton
            signatureEndpoint="/google-photos/api/sign-cloudinary-params"
            className="flex gap-[1vw] items-center"
            onSuccess={handleOnSuccess}
            options={{
                autoMinimize: true,
                tags: [String(process.env.NEXT_PUBLIC_CLOUDINARY_LIBRARY_TAG)],
            }}
        >
            <FaCloudUploadAlt size={24} className=" text-primary" />
            <span className=" bg-gradient-to-br from-secondary to-accent bg-clip-text text-transparent font-bold text-lg">
                Upload
            </span>
        </CldUploadButton>
    );
}

export default CldUploadButtonComponent;
