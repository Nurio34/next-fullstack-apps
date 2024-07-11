import prisma from "@/lib/prisma-mongo-db";
import { auth } from "@clerk/nextjs/server";

export async function POST(req: Request) {
    const { userId: currentUser } = auth();
    const user = await req.json();

    if (!currentUser) {
        return Response.json(
            { error: "User not authenticated. Please login" },
            { status: 404 },
        );
    }

    if (!user) {
        return Response.json(
            { error: "Something went wrong. Please try again" },
            { status: 404 },
        );
    }

    try {
        const blockStatus = await prisma.block.findFirst({
            where: {
                blockerId: currentUser!,
                blockedId: user,
            },
        });

        if (blockStatus) {
            const res = await prisma.block.delete({
                where: { id: blockStatus.id },
            });

            if (!res) {
                return Response.json(
                    {
                        error: "Error while 'prisma.block.delete' in '/instagram/api/block'",
                    },
                    { status: 404 },
                );
            }

            return Response.json({ blockStatus: false }, { status: 200 });
        } else {
            const res = await prisma.block.create({
                data: {
                    blockerId: currentUser,
                    blockedId: user,
                },
            });

            if (!res) {
                return Response.json(
                    {
                        error: "Error while 'prisma.block.delete' in '/instagram/api/block'",
                    },
                    { status: 404 },
                );
            }

            return Response.json({ blockStatus: true }, { status: 200 });
        }
    } catch (error) {
        console.log(error);

        return Response.json(
            {
                error: "Unexpected error while 'prisma.block' in '/instagram/api/block'",
            },
            { status: 404 },
        );
    }
}
