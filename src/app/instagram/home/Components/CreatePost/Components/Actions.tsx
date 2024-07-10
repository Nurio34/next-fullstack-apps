import { FaPhotoVideo, FaVideo } from "react-icons/fa";
import { MdEvent, MdOutlinePoll } from "react-icons/md";

function Actions() {
    const actions = [
        {
            id: "photo",
            icon: <FaPhotoVideo />,
        },
        { id: "video", icon: <FaVideo /> },
        { id: "poll", icon: <MdOutlinePoll /> },
        { id: "event", icon: <MdEvent /> },
    ];

    return (
        <ul className="flex gap-[1vw] py-[1vh] ">
            {actions.map((action) => {
                return (
                    <li
                        key={action.id}
                        className="flex gap-[0.5vw] items-center capitalize"
                    >
                        {action.icon}
                        {action.id}
                    </li>
                );
            })}
        </ul>
    );
}

export default Actions;
