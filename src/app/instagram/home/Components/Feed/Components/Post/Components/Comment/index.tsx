import { PostType } from "../../../..";
import CommentForm from "./Components/CommentForm";
import Comments from "./Components/Comments";

function Comment({ post }: { post: PostType }) {
    return (
        <div>
            <CommentForm />
            <Comments />
        </div>
    );
}

export default Comment;
