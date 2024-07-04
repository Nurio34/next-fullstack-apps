import { useAppSelector } from "@/providers/reduxjs-provider/hooks";
import { getCldImageUrl } from "next-cloudinary";

function SaveButton({ src }: { src: string }) {
    const { transformations } = useAppSelector((s) => s.tab);

    const ObjectToSave = Object.fromEntries([
        ...Object.entries(transformations).filter(([key, _]) => key !== "crop"),
        ["src", src],
        ["format", "default"],
    ]);

    const saveImage = () => {
        console.log(ObjectToSave);

        const url = getCldImageUrl(ObjectToSave);
        console.log(url);
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
