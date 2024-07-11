import Post from "./Components/Post";

export type PostType = {
    id: string;
    img: string | null;
    decsription: string;
    createdAt: Date;
    updatedAt: Date;
    userId: string;
};

async function Feed({ posts }: { posts: PostType[] }) {
    return (
        <ul className="py-[1vh] px-[1vw] bg-base-200 rounded-md shadow-sm shadow-base-content space-y-[2vh]">
            {posts.map((post) => {
                return <Post key={post.id} post={post} />;
            })}
        </ul>
    );
}

export default Feed;
