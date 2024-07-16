import { AiFillLike, AiOutlineLike } from "react-icons/ai";
import { CommentType } from "..";
import { auth } from "@clerk/nextjs/server";
import {
    dislikeComment,
    likeComment,
} from "@/app/instagram/action/like-comment";

function LikeButton({ comment }: { comment: CommentType }) {
    const { userId } = auth();

    const isLiked = comment.likes?.some((like) => like.userId === userId);

    if (!userId) {
        console.log(
            "Error while getting 'userId' in '/instagram/home/feed/post/comment/comments/likeButton.tsx'",
        );
        throw new Error(
            "Error while getting 'userId' in '/instagram/home/feed/post/comment/comments/likeButton.tsx'",
        );
    }

    return (
        <form action={isLiked ? dislikeComment : likeComment}>
            <input type="hidden" name="commentId" value={comment.id} />
            <input type="hidden" name="userId" value={userId} />
            <button type="submit">
                {isLiked ? (
                    <AiFillLike className="text-info" />
                ) : (
                    <AiOutlineLike />
                )}
            </button>
        </form>
    );
}

export default LikeButton;
