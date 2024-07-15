import { useEffect, useState } from "react";
import Header from "./Components/Header";
import Content from "./Components/Content";
import Actions from "./Components/Actions";
import Comment from "./Components/Comment";
import { useAppSelector } from "@/providers/reduxjs-provider/hooks";
import { PostType } from "@/app/instagram/home/Components/Feed";

export type OwnerOfPost = {
    username: string;
    avatar: string | null;
    name: string | null;
    surname: string | null;
};

function Post({ post }: { post: PostType }) {
    const { username } = useAppSelector((s) => s.instagram);

    const [ownerOfPost, setOwnerOfPost] = useState<OwnerOfPost>(
        {} as OwnerOfPost,
    );

    useEffect(() => {
        if (username) {
            const ownerOfPostFn = async () => {
                const res = await fetch("/instagram/api/owner-of-post", {
                    method: "POST",
                    body: JSON.stringify(username),
                });
                const data = await res.json();
                setOwnerOfPost(data);
            };

            ownerOfPostFn();
        }
    }, [username]);

    return (
        <li className=" space-y-[1vh]">
            <Header ownerOfPost={ownerOfPost!} />
            <Content post={post} />
            <Actions post={post} />
            <Comment post={post} />
        </li>
    );
}

export default Post;
