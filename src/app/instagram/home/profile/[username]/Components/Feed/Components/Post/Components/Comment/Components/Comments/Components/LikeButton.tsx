import { AiFillLike, AiOutlineLike } from "react-icons/ai";

import { CommentType } from "@/app/instagram/home/Components/Feed/Components/Post/Components/Comment/Components/Comments";
import { useAuth } from "@clerk/nextjs";
import {
    dislikeComment,
    likeComment,
} from "@/app/instagram/action/like-comment";

function LikeButton({ comment }: { comment: CommentType }) {
    const { userId } = useAuth();

    const isLiked = comment.likes?.some((like) => like.userId === userId);

    if (!userId) {
        console.log(
            "Error while getting 'userId' in '/instagram/home/feed/post/comment/comments/likeButton.tsx'",
        );
        throw new Error(
            "Error while getting 'userId' in '/instagram/home/feed/post/comment/comments/likeButton.tsx'",
        );
    }

    const likeCommentAction = async (formData: FormData) => {
        await likeComment(formData);
    };
    const dislikeCommentAciton = async (formData: FormData) => {
        await dislikeComment(formData);
    };

    return (
        <form action={isLiked ? dislikeCommentAciton : likeCommentAction}>
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
