"use client";

import { store } from "@/providers/reduxjs-provider";
import { Provider } from "react-redux";
import Provided from "./Provided";
import { PostType } from "../../Components/Feed";

function Client({
    currentUserId,
    username,
    userId,
    posts,
}: {
    currentUserId: string;
    username: string;
    userId: string;
    posts: PostType[];
}) {
    return (
        <Provider store={store}>
            <Provided
                currentUserId={currentUserId}
                username={username}
                userId={userId}
                posts={posts}
            />
        </Provider>
    );
}

export default Client;
