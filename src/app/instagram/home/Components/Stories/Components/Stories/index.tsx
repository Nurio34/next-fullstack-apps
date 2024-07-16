import { useAppSelector } from "@/providers/reduxjs-provider/hooks";
import AddStory from "./AddStory";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

function Stories() {
    const mockStories = [
        "oscar",
        "rebecca",
        "harold",
        "anna",
        "garnet",
        "robert",
        "ken",
        "ryu",
        "dhalsim",
        "zangief",
    ];

    const { storiesMaxWidth } = useAppSelector((s) => s.instagram);

    return (
        <div
            className={`bg-base-200 py-[1vh] px-[1vw] rounded-md shadow-sm shadow-base-content
                flex gap-[1vw] overflow-x-auto
            `}
            style={{ maxWidth: storiesMaxWidth }}
        >
            <AddStory />
            <ul className=" contents">
                {mockStories.map((story) => {
                    return (
                        <li key={story}>
                            <figure className=" relative w-32 aspect-square rounded-full border-[1px] border-base-content "></figure>
                            <p className=" text-center">{story}</p>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}

export default Stories;
