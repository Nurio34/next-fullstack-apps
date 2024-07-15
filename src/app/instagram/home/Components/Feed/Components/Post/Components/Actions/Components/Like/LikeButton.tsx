import { auth } from "@clerk/nextjs/server";
import React from "react";
import { AiFillLike, AiOutlineLike } from "react-icons/ai";
import { LikeType } from ".";
import { dislike, like } from "@/app/instagram/action/like-post";

function LikeButton({ likes, postId }: { likes: LikeType[]; postId: string }) {
    const { userId } = auth();

    if (!userId) {
        console.log(
            "Error while getting 'userId' in '/instagram/home/feed/post/actions/like/LikeButton.tsx'",
        );
        throw new Error(
            "Error while getting 'userId' in '/instagram/home/feed/post/actions/like/LikeButton.tsx'",
        );
    }

    const isLiked = likes?.some((like) => like.userId === userId);

    return (
        <form action={!isLiked ? like : dislike}>
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
