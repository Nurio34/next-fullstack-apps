import LikeButton from "./LikeButton";

export type LikeType = {
    id: string;
    createdAt: Date;
    userId: string;
    postId: string | null;
    commentId: string | null;
};

function Like({ likes, postId }: { likes: LikeType[]; postId: string }) {
    return (
        <div className="flex justify-center items-center gap-[1vw] bg-base-100 text-base py-[0.5vh] px-[1vw] rounded-sm ">
            <LikeButton likes={likes} postId={postId} />
            <span>|</span>
            <span className=" inline-block">
                {likes.length > 1
                    ? `${likes.length} likes`
                    : `${likes.length} like`}
            </span>
        </div>
    );
}

export default Like;
