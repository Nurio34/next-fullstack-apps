import {
    CldUploadWidget,
    CloudinaryUploadWidgetResults,
} from "next-cloudinary";
import { Dispatch, SetStateAction } from "react";
import { FaPhotoVideo, FaVideo } from "react-icons/fa";
import { MdEvent, MdOutlinePoll } from "react-icons/md";

function Actions({
    setPostImg,
}: {
    setPostImg: Dispatch<SetStateAction<string>>;
}) {
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
                    <li key={action.id}>
                        {action.id === "photo" ? (
                            <CldUploadWidget
                                uploadPreset="instagram"
                                onSuccess={(
                                    res: CloudinaryUploadWidgetResults,
                                ) => {
                                    if (!res.event) return;
                                    else if (typeof res.info !== "string") {
                                        setPostImg(res.info!.secure_url);
                                    }
                                }}
                            >
                                {({ open }) => (
                                    <button
                                        type="button"
                                        className="flex gap-[0.5vw] items-center capitalize"
                                        onClick={() => open()}
                                    >
                                        {action.icon}
                                        {action.id}
                                    </button>
                                )}
                            </CldUploadWidget>
                        ) : (
                            <button
                                type="button"
                                className="flex gap-[0.5vw] items-center capitalize"
                            >
                                {action.icon}
                                {action.id}
                            </button>
                        )}
                    </li>
                );
            })}
        </ul>
    );
}

export default Actions;
