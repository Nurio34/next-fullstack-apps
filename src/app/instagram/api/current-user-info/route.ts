import prisma from "@/lib/prisma-mongo-db";
import { auth } from "@clerk/nextjs/server";

export async function GET(req: Request) {
    const { userId } = auth();

    try {
        if (!userId) {
            return Response.json(
                { error: "Unauthenticated action" },
                { status: 404 },
            );
        }

        const currentUserInfo = await prisma.user.findUnique({
            where: { id: userId },
            select: { avatar: true, username: true },
        });

        if (!currentUserInfo) {
            return Response.json(
                {
                    error: "Erorr while ' prisma.user.findUnique' in '/instagram/api/current-user-info'",
                },
                { status: 404 },
            );
        }

        return Response.json(currentUserInfo, { status: 200 });
    } catch (error) {
        return Response.json(
            {
                error: "Unexpected error while ' prisma.user.findUnique' in '/instagram/api/current-user-info'",
            },
            { status: 404 },
        );
    }
}
