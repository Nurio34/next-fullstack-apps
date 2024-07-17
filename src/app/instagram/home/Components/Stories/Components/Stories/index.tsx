import { useAppSelector } from "@/providers/reduxjs-provider/hooks";
import AddStory from "./AddStory";
import { Story } from "../../Client";
import Image from "next/image";

function Stories({ stories }: { stories: Story[] }) {
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
                {stories.map((story) => {
                    return (
                        <li key={story.id}>
                            <figure className=" relative w-32 aspect-square rounded-full border-[1px] border-base-content overflow-hidden">
                                <Image src={story.img} fill alt="story" />
                            </figure>
                            <p className=" text-center">
                                {story.user.username}
                            </p>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}

export default Stories;
