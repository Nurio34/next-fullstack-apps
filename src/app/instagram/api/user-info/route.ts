import prisma from "@/lib/prisma-mongo-db";
import { currentUser } from "@clerk/nextjs/server";

export async function POST(req: Request) {
    const { currentUser, username } = await req.json();

    try {
        const currentUserInfo = await prisma.user.findUnique({
            where: {
                id: currentUser,
            },
            select: {
                sentRequests: true,
                followings: true,
                blocks: true,
            },
        });

        const userInfo = await prisma.user.findUnique({
            where: {
                username,
            },
        });

        if (!userInfo || !currentUserInfo) {
            return Response.json({ error: "Error" }, { status: 404 });
        }

        return Response.json({ currentUserInfo, userInfo }, { status: 200 });
    } catch (error) {
        return Response.json({ error }, { status: 500 });
    }
}
