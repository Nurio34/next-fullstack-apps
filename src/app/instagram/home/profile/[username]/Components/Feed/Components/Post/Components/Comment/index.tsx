import { PostType } from "@/app/instagram/home/Components/Feed";
import Comments from "./Components/Comments";
import CommentForm from "./Components/CommentForm";

function Comment({ post }: { post: PostType }) {
    return (
        <div className=" space-y-[1vh]">
            <CommentForm postId={post.id} />
            <Comments comments={post.comments} />
        </div>
    );
}

export default Comment;
