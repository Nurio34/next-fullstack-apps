import Comment from "./Components/Comment";
export type CommentType = {
    id: string;
    decsription: string;
    createdAt: Date;
    updatedAt: Date;
    userId: string;
    postId: string;
    user: {
        username: string;
        name: string | null;
        avatar: string | null;
        surname: string | null;
    };
    likes: {
        id: string;
        createdAt: Date;
        userId: string;
        postId: string | null;
        commentId: string | null;
    }[];
};

function Comments({ comments }: { comments: CommentType[] }) {
    return (
        <ul className="space-y-[1vh]">
            {comments.map((comment) => {
                return <Comment key={comment.id} comment={comment} />;
            })}
        </ul>
    );
}

export default Comments;
