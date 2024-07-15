import { PostType } from "../../../..";
import Comment from "./Components/Comment";
import Like from "./Components/Like";
import Share from "./Components/Share";

function Actions({ post }: { post: PostType }) {
    return (
        <div className="flex items-center justify-start gap-[4vw]">
            <Like likes={post.likes} postId={post.id} />
            <Comment commentsCount={post.comments.length} />
            <Share />
        </div>
    );
}

export default Actions;
