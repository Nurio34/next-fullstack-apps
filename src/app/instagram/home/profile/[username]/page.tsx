import { auth } from "@clerk/nextjs/server";
import Client from "./Client";
import { redirect } from "next/navigation";
import prisma from "@/lib/prisma-mongo-db";

async function Profile({ params }: { params: { username: string } }) {
    const { userId } = auth();

    if (!userId) {
        console.log(
            "Error while 'getting userId' in '/instagram/home/profile/[username]/page.tsx'",
        );
        return;
    }

    const userPosts = await prisma.user.findUnique({
        where: {
            username: params.username,
        },
        select: {
            posts: true,
            id: true,
        },
    });

    if (!userPosts) {
        console.log(
            "Error while 'getting userPosts' in '/instagram/home/profile/[username]/page.tsx'",
        );
        return;
    }

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
