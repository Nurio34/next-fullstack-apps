import { FaRegCommentDots } from "react-icons/fa";

function Comment({ commentsCount }: { commentsCount: number }) {
    return (
        <div className="flex justify-center items-center gap-[1vw] bg-base-100 text-base py-[0.5vh] px-[1vw] rounded-sm ">
            <button type="button">
                <FaRegCommentDots className=" text-info" />
            </button>
            <span>|</span>
            <span className=" inline-block">
                {commentsCount > 1
                    ? `${commentsCount} Comments`
                    : `${commentsCount} Comment`}
            </span>
        </div>
    );
}

export default Comment;
