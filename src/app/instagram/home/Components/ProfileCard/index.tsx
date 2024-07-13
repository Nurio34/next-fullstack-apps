import prisma from "@/lib/prisma-mongo-db";
import { auth, currentUser } from "@clerk/nextjs/server";
import Client from "./Client";

async function ProfileCard() {
    const { userId } = auth();

    try {
        const getUserInfo = await prisma.user.findFirst({
            where: {
                id: userId!,
            },
            select: {
                avatar: true,
                cover: true,
                username: true,
                name: true,
                surname: true,
                followers: true,
            },
        });
        console.log({ getUserInfo });

        return <Client getUserInfo={getUserInfo} />;
    } catch (error) {
        console.log(error);
    }
}

export default ProfileCard;
