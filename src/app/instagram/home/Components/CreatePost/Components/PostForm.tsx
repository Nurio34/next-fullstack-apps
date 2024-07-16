import { useState } from "react";
import Actions from "./Actions";
import { post } from "@/app/instagram/action/post";
import toast from "react-hot-toast";
import { useFormStatus } from "react-dom";
import SubmitButton from "./SubmitButton";

function PostForm() {
    const [description, setDecsription] = useState<string>("");
    const [postImg, setPostImg] = useState<string>("");

    const postAction = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        e.currentTarget.reset();

        try {
            if (!description.trim()) {
                console.log("Thre is no description");
                throw new Error("Thre is no description");
            }

            const res = await post(description, postImg);
            if (!res) {
                console.log(
                    "Error while 'postAction' in '/instagram/home/createPost/postForm.tsx'",
                );
                throw new Error(
                    "Error while 'postAction' in '/instagram/home/createPost/postForm.tsx'",
                );
            }

            toast.success(res);
        } catch (error) {
            console.log(
                "Unexpected error while 'postAction' in '/instagram/home/createPost/postForm.tsx'",
                error,
            );
            throw new Error(
                "Unexpected error while 'postAction' in '/instagram/home/createPost/postForm.tsx'",
            );
        } finally {
        }
    };

    return (
        <form
            onSubmit={postAction}
            className="grid grid-cols-[9fr,1fr] gap-[1vw] items-center"
        >
            <label htmlFor="post">
                <textarea
                    name="post"
                    id="post"
                    placeholder="Post..."
                    className="w-full py-1 px-[1vw] rounded-sm"
                    rows={4}
                    onChange={(e) => setDecsription(e.target.value)}
                ></textarea>
            </label>
            <div className="grid gap-y-[1vh]">
                <button type="button" className="btn btn-sm btn-secondary">
                    😄
                </button>
                <SubmitButton />
            </div>
            <Actions setPostImg={setPostImg} />
        </form>
    );
}

export default PostForm;
