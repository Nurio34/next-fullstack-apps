import { EnhanceButtonType } from "@/app/google-photos/types";
import EnhanceButton from "./Components/EnhanceButton";
import { CiPickerEmpty } from "react-icons/ci";
import { MdOutlineRestorePage } from "react-icons/md";
import { FaBackspace, FaSimplybuilt } from "react-icons/fa";

function EnhanceTab() {
    const enhancmentButtons: EnhanceButtonType[] = [
        {
            id: "none",
            icon: <CiPickerEmpty size={24} />,
            label: "None",
        },
        {
            id: "improve",
            icon: <FaSimplybuilt size={24} />,
            label: "Improve",
        },
        {
            id: "restore",
            icon: <MdOutlineRestorePage size={24} />,
            label: "Restore",
        },
        {
            id: "remove-background",
            icon: <FaBackspace size={24} />,
            label: "Remove Background",
        },
    ];

    return (
        <div className="py-[1vh]">
            <h2>Enhancements</h2>
            <ul className="grid gap-[2vh] py-[1vh]">
                {enhancmentButtons.map((btn) => {
                    return <EnhanceButton key={btn.id} btn={btn} />;
                })}
            </ul>
        </div>
    );
}

export default EnhanceTab;
