import { PostType } from "../../../..";
import CommentForm from "./Components/CommentForm";
import Comments from "./Components/Comments";

function Comment({ post }: { post: PostType }) {
    return (
        <div className=" space-y-[1vh]">
            <CommentForm postId={post.id} />
            <Comments comments={post.comments} />
        </div>
    );
}

export default Comment;
