import { CommentType } from "@/app/instagram/home/Components/Feed/Components/Post/Components/Comment/Components/Comments";
import Image from "next/image";
import { AiFillLike, AiOutlineLike } from "react-icons/ai";
import LikeButton from "./LikeButton";

function Comment({ comment }: { comment: CommentType }) {
    return (
        <li className="grid grid-cols-[0.05fr,0.9fr] gap-[1vw] items-start">
            <figure className="relative aspect-square rounded-full overflow-hidden border-[1px] border-base-content">
                <Image
                    src={comment.user.avatar || "/instagram/no_avatar.webp"}
                    fill
                    alt={`Avatar of ${comment.user.username}`}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
            </figure>
            <div>
                <div className="flex justify-between items-center">
                    <p className=" font-semibold capitalize">
                        {comment.user.name && comment.user.surname
                            ? `${comment.user.name} ${comment.user.surname}`
                            : `${comment.user.username}`}
                    </p>
                    <button type="button">...</button>
                </div>
                <p>{comment.decsription}</p>
                <div className="flex gap-[1vw] items-center">
                    <LikeButton comment={comment} />
                    <span>|</span>
                    <p>
                        {comment.likes.length > 1
                            ? `${comment.likes.length} Likes`
                            : `${comment.likes.length} Like`}
                    </p>
                </div>
            </div>
        </li>
    );
}

export default Comment;
