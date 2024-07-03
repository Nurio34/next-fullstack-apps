import { EditTabType } from "@/app/google-photos/types";
import { CiCrop } from "react-icons/ci";
import { FaMagic } from "react-icons/fa";
import { IoIosColorFilter } from "react-icons/io";
import EditTabTbns from "./Components/EditTabTbns";
import ActiveEditTab from "./Components/ActiveEditTab";
import EnhanceTab from "./Components/ActiveEditTab/Components/EnhanceTab";
import CropTab from "./Components/ActiveEditTab/Components/CropTab";
import FilterTab from "./Components/ActiveEditTab/Components/FilterTab";

function EditTab() {
    const editTabs: EditTabType[] = [
        {
            id: "enhance",
            icon: <FaMagic />,
            tab: <EnhanceTab />,
        },
        {
            id: "crop",
            icon: <CiCrop />,
            tab: <CropTab />,
        },
        {
            id: "filter",
            icon: <IoIosColorFilter />,
            tab: <FilterTab />,
        },
    ];

    return (
        <div>
            <EditTabTbns editTabs={editTabs} />
            <ActiveEditTab editTabs={editTabs} />
        </div>
    );
}

export default EditTab;
