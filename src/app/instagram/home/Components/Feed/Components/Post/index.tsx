import React from "react";
import { PostType } from "../..";
import prisma from "@/lib/prisma-mongo-db";
import Header from "./Components/Header";
import Content from "./Components/Content";
import Actions from "./Components/Actions";
import Comment from "./Components/Comment";

async function Post({ post }: { post: PostType }) {
    const ownerOfPost = await prisma.user.findUnique({
        where: {
            id: post.userId,
        },
    });

    return (
        <li className=" space-y-[1vh]">
            <Header ownerOfPost={ownerOfPost!} />
            <Content post={post} />
            <Actions />
            <Comment post={post} />
        </li>
    );
}

export default Post;
