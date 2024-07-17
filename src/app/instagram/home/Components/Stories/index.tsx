import { auth } from "@clerk/nextjs/server";
import Client from "./Client";
import prisma from "@/lib/prisma-mongo-db";

async function Stories() {
    const { userId } = auth();

    if (!userId) {
        console.log("Unauthenticated action");
        throw new Error("Unauthenticated action");
    }

    const followedUsers = await prisma.follower
        .findMany({
            where: {
                followerId: userId,
            },
            select: {
                followedId: true,
            },
        })
        .then((res) => res.map((user) => user.followedId));

    const stories = await prisma.story.findMany({
        where: {
            userId: {
                in: [userId, ...followedUsers],
            },
        },
        include: {
            user: {
                select: {
                    username: true,
                },
            },
        },
    });
    console.log({ stories });

    return <Client stories={stories} />;
}

export default Stories;
