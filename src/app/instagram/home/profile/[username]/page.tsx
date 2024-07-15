import { auth } from "@clerk/nextjs/server";
import Client from "./Client";
import prisma from "@/lib/prisma-mongo-db";

async function Profile({ params }: { params: { username: string } }) {
    const { userId } = auth();

    if (!userId) {
        console.log(
            "Error while 'getting userId' in '/instagram/home/profile/[username]/page.tsx'",
        );
        return;
    }

    const userIdAndPosts = await prisma.user.findUnique({
        where: {
            username: params.username,
        },
        select: {
            id: true,
            posts: {
                include: {
                    likes: true,
                    comments: {
                        orderBy: {
                            createdAt: "desc",
                        },
                        include: {
                            user: {
                                select: {
                                    username: true,
                                    name: true,
                                    surname: true,
                                    avatar: true,
                                },
                            },
                            likes: true,
                        },
                    },
                },
            },
        },
    });

    if (!userIdAndPosts) {
        console.log(
            "Error while 'getting userPosts' in '/instagram/home/profile/[username]/page.tsx'",
        );
        return;
    }

    return (
        <Client
            currentUserId={userId!}
            username={params.username}
            userId={userIdAndPosts.id}
            posts={userIdAndPosts.posts}
        />
    );
}

export default Profile;
