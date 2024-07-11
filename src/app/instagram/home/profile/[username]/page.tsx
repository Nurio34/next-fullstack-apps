import { auth } from "@clerk/nextjs/server";
import Client from "./Client";
import { redirect } from "next/navigation";
import prisma from "@/lib/prisma-mongo-db";

async function Profile({ params }: { params: { username: string } }) {
    const { userId } = auth();

    if (!userId) redirect("/instagram");

    const userPosts = await prisma.user.findUnique({
        where: {
            username: params.username,
        },
        select: {
            posts: true,
            id: true,
        },
    });

    if (!userPosts) redirect("/instagram");

    return (
        <Client
            currentUserId={userId!}
            username={params.username}
            userId={userPosts.id}
            posts={userPosts.posts}
        />
    );
}

export default Profile;
