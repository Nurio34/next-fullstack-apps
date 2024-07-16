import { postStory } from "@/app/instagram/action/post-story";
import {
    CldUploadWidget,
    CloudinaryUploadWidgetResults,
} from "next-cloudinary";
import { Dispatch, SetStateAction, useState } from "react";
import toast from "react-hot-toast";

function AddStoryButton() {
    const [story, setStory] = useState<string>("");

    const postStoryAction = async (formData: FormData) => {
        const img = formData.get("story") as string;

        if (!img) {
            return;
        }

        try {
            const res = await postStory(img);

            if (!res) {
                console.log("Error while 'postStoryAction'");
                throw new Error("Error while 'postStoryAction'");
            }

            toast.success(res);
            setStory((pre) => (pre = ""));
        } catch (error) {
            console.log("Unexpected error while 'postStoryAction'");
            throw new Error("Unexpected error while 'postStoryAction'");
        }
    };

    return (
        <form
            action={postStoryAction}
            className="grid gap-y-[1vh] justify-items-center"
        >
            <input type="hidden" name="story" value={story} />
            <CldUploadWidget
                uploadPreset="instagram"
                onSuccess={(res: CloudinaryUploadWidgetResults) => {
                    if (!res.event) return;
                    else if (typeof res.info !== "string") {
                        setStory(res.info!.secure_url);
                    }
                }}
            >
                {({ open }) => (
                    <div onClick={() => open()}>
                        <figure
                            className=" relative w-32 aspect-square rounded-full border-[1px] border-base-content 
                        flex justify-center items-center text-[5vw] 
                        "
                            style={{
                                backgroundImage: `url(${story})`,
                                backgroundSize: "cover",
                                backgroundPosition: "center",
                            }}
                        >
                            {story ? "" : "+"}
                        </figure>
                    </div>
                )}
            </CldUploadWidget>
            <button
                type="submit"
                className=" text-center btn btn-sm btn-primary"
                disabled={!Boolean(story.trim())}
            >
                Add Story
            </button>
        </form>
    );
}

export default AddStoryButton;
