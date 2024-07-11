import prisma from "@/lib/prisma-mongo-db";
import { auth } from "@clerk/nextjs/server";

export async function GET() {
    const { userId: currentUserId } = auth();

    if (!currentUserId) {
        return Response.json({ error: "Error" }, { status: 404 });
    }

    try {
        const requests = await prisma.followRequest.findMany({
            where: {
                reciverId: currentUserId,
            },
            select: {
                id: true,
                sender: {
                    select: {
                        avatar: true,
                        username: true,
                        name: true,
                        surname: true,
                        id: true,
                    },
                },
            },
        });

        if (!requests) {
            return Response.json({ error: "Error" }, { status: 404 });
        }

        return Response.json(requests, { status: 200 });
    } catch (error) {
        return Response.json({ error: "Error" }, { status: 404 });
    }
}
