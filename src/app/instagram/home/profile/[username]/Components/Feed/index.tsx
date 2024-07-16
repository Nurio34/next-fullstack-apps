"use client";

import { PostType } from "@/app/instagram/home/Components/Feed";
import Post from "./Components/Post";

function Feed({ posts }: { posts: PostType[] }) {
    return (
        <ul className="py-[1vh] px-[1vw] bg-base-200 rounded-md shadow-sm shadow-base-content space-y-[2vh]">
            {posts.map((post) => {
                return <Post key={post.id} post={post} />;
            })}
        </ul>
    );
}

export default Feed;
