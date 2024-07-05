import { CloudinaryResourceType } from "@/app/google-photos/types";
import { useAppSelector } from "@/providers/reduxjs-provider/hooks";
import axios from "axios";
import { getCldImageUrl } from "next-cloudinary";

function SaveButton({ resource }: { resource: CloudinaryResourceType }) {
    const { public_id } = resource;

    const { transformations } = useAppSelector((s) => s.tab);

    const ObjectToSave = Object.fromEntries([
        ...Object.entries(transformations),
        ["src", public_id],
        ["format", "default"],
        ["quality", "default"],
    ]);

    const saveImage = async () => {
        const url = getCldImageUrl(ObjectToSave);

        const result = await fetch("/google-photos/api/upload", {
            method: "POST",
            body: JSON.stringify({ url, public_id }),
        });

        const data = await result.json();
        console.log(data);
    };

    return (
        <div className="flex gap-[2vw]">
            <button
                className="btn btn-success text-success-content grow"
                onClick={saveImage}
            >
                SaveButton
            </button>
            <select
                name="save"
                id="save"
                className="bg-success rounded-md min-w-12"
            ></select>
        </div>
    );
}

export default SaveButton;
