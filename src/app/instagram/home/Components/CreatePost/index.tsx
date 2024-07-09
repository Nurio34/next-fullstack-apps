import prisma from "@/lib/prisma-mongo-db";
import { auth } from "@clerk/nextjs/server";
import { FaPhotoVideo } from "react-icons/fa";
import Avatar from "./Components/Avatar";
import PostForm from "./Components/PostForm";
import Actions from "./Components/Actions";

async function CreatePost() {
    const { userId } = auth();

    const getUserInfo = await prisma.user.findUnique({
        where: {
            id: userId!,
        },
        select: {
            avatar: true,
        },
    });

    return (
        <div
            className="py-[1vh] px-[1vw] bg-base-200 rounded-md shadow-sm shadow-base-content
            grid grid-cols-[1fr,9fr] items-center gap-[1vw]
        "
        >
            <Avatar avatar={getUserInfo?.avatar} />
            <div>
                <PostForm />
                <Actions />
            </div>
        </div>
    );
}

export default CreatePost;
