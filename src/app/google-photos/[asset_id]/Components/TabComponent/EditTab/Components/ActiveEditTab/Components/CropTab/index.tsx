import {
    CloudinaryResourceType,
    CropButtonType,
} from "@/app/google-photos/types";
import { CiPickerEmpty } from "react-icons/ci";
import { MdOutlineRestorePage } from "react-icons/md";
import { FaBackspace, FaSimplybuilt } from "react-icons/fa";
import CropButton from "./Components/CropButton";

function CropTab({ resource }: { resource: CloudinaryResourceType }) {
    const enhancmentButtons: CropButtonType[] = [
        {
            id: "none",
            icon: <CiPickerEmpty size={24} />,
            label: "None",
        },
        {
            id: "square",
            icon: <FaSimplybuilt size={24} />,
            label: "Square",
        },
        {
            id: "landscape",
            icon: <MdOutlineRestorePage size={24} />,
            label: "Landscape",
        },
        {
            id: "portrait",
            icon: <FaBackspace size={24} />,
            label: "Portrait",
        },
    ];

    return (
        <div className="py-[1vh]">
            <h2>Crop & Resize</h2>
            <ul className="grid gap-[2vh] py-[1vh]">
                {enhancmentButtons.map((btn) => {
                    return (
                        <CropButton
                            key={btn.id}
                            btn={btn}
                            resource={resource}
                        />
                    );
                })}
            </ul>
        </div>
    );
}

export default CropTab;
