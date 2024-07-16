import { CommentType } from "@/app/instagram/home/Components/Feed/Components/Post/Components/Comment/Components/Comments";
import Comment from "./Components/Comment";
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
