import Stories from "./Components/Stories";
import CreatePost from "./Components/CreatePost";
import Feed from "./Components/Feed";
import prisma from "@/lib/prisma-mongo-db";
import { auth } from "@clerk/nextjs/server";

async function Home() {
    const { userId } = auth();

    if (!userId) {
        console.log(
            "Error while getting 'userId' in '/instagram/home/page.tsx'",
        );
        throw new Error(
            "Error while getting 'userId' in '/instagram/home/page.tsx'",
        );
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

    if (!followedUsers) {
        console.log(
            "Error while getting 'followedUsers' in '/instagram/home/page.tsx'",
        );
        throw new Error(
            "Error while getting 'followedUsers' in '/instagram/home/page.tsx'",
        );
    }

    const followedUsersPosts = await prisma.post.findMany({
        where: {
            userId: {
                in: [userId, ...followedUsers],
            },
        },
        orderBy: { createdAt: "desc" },
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
    });

    return (
        <section className=" space-y-[2vh]">
            <Stories />
            <CreatePost />
            <Feed posts={followedUsersPosts} />
        </section>
    );
}

export default Home;
