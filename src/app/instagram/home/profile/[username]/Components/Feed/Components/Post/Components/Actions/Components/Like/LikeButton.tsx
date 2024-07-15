import { auth } from "@clerk/nextjs/server";
import React from "react";
import { AiFillLike, AiOutlineLike } from "react-icons/ai";
import { LikeType } from ".";
import { dislike, like } from "@/app/instagram/action/like-post";
import { useAuth } from "@clerk/nextjs";

function LikeButton({ likes, postId }: { likes: LikeType[]; postId: string }) {
    const { userId } = useAuth();

    if (!userId) {
        console.log(
            "Error while getting 'userId' in '/instagram/home/feed/post/actions/like/LikeButton.tsx'",
        );
        throw new Error(
            "Error while getting 'userId' in '/instagram/home/feed/post/actions/like/LikeButton.tsx'",
        );
    }

    const isLiked = likes?.some((like) => like.userId === userId);

    const likeAction = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);

        try {
            await like(formData);
        } catch (error) {
            console.log(
                "Error while 'like action' in '/instagram/profile/feed/post/actions/like/LikeButton.tsx'",
            );
            throw new Error(
                "Error while 'like action' in '/instagram/profile/feed/post/actions/like/LikeButton.tsx'",
            );
        }
    };
    const dislikeAction = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);

        try {
            await dislike(formData);
        } catch (error) {
            console.log(
                "Error while 'like action' in '/instagram/profile/feed/post/actions/like/LikeButton.tsx'",
            );
            throw new Error(
                "Error while 'like action' in '/instagram/profile/feed/post/actions/like/LikeButton.tsx'",
            );
        }
    };

    return (
        <form onSubmit={!isLiked ? likeAction : dislikeAction}>
            <input type="hidden" name="userId" value={userId} />
            <input type="hidden" name="postId" value={postId} />
            <button
                type="submit"
                className={`${isLiked ? "text-info" : "text-base-content"}`}
            >
                {isLiked ? <AiFillLike /> : <AiOutlineLike />}
            </button>
        </form>
    );
}

export default LikeButton;
