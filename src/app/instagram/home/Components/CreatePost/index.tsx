"use client";

import prisma from "@/lib/prisma-mongo-db";
import { auth } from "@clerk/nextjs/server";
import { FaPhotoVideo } from "react-icons/fa";
import Avatar from "./Components/Avatar";
import PostForm from "./Components/PostForm";
import Actions from "./Components/Actions";
import { useAuth } from "@clerk/nextjs";
import { useEffect, useState } from "react";

function CreatePost() {
    const [avatar, setAvatar] = useState<string>("");

    useEffect(() => {
        const getAvatar = async () => {
            const res = await fetch("/instagram/api/current-user-info");
            const data = await res.json();

            setAvatar(data.avatar);
        };
        getAvatar();
    }, []);

    return (
        <div
            className="py-[1vh] px-[1vw] bg-base-200 rounded-md shadow-sm shadow-base-content
            grid grid-cols-[1fr,9fr] items-center gap-[1vw]
        "
        >
            <Avatar avatar={avatar} />
            <PostForm />
        </div>
    );
}

export default CreatePost;
