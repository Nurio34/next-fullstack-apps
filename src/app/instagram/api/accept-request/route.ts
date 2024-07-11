import prisma from "@/lib/prisma-mongo-db";
import { auth } from "@clerk/nextjs/server";
import { revalidatePath } from "next/cache";

export async function POST(req: Request) {
    const { userId } = auth();

    if (!userId) {
        console.log(
            "Unauthenticated action in '/instagram/api/accepy-request'",
        );
        return Response.json(
            "Unauthenticated action in '/instagram/api/accepy-request'",
            { status: 404 },
        );
    }

    const body: { requestId: string; senderId: string } = await req.json();
    const { requestId, senderId } = body;

    if (!requestId || !senderId) {
        console.log(
            "Error with 'requestId' or 'senderId' in '/instagram/api/accept-request'",
        );
        return Response.json(
            "Error with 'requestId' or 'senderId' in '/instagram/api/accept-request'",
            { status: 404 },
        );
    }

    try {
        const requestRes = await prisma.followRequest.delete({
            where: {
                id: requestId,
            },
        });

        if (!requestRes) {
            console.log(
                "Error while 'prisma.followRequest.delete' in '/instagram/api/accept-request'",
            );

            return Response.json(
                "Error while 'prisma.followRequest.delete' in '/instagram/api/accept-request'",
                { status: 404 },
            );
        } else {
            const followingRes = await prisma.follower.create({
                data: {
                    followerId: senderId,
                    followedId: userId,
                },
            });

            if (!followingRes) {
                console.log(
                    "Error while 'prisma.follower.create' in '/instagram/api/accept-request'",
                );

                return Response.json(
                    "Error while 'prisma.follower.create' in '/instagram/api/accept-request'",
                    { status: 404 },
                );
            }

            return Response.json("Request Accepted Succesfully", {
                status: 200,
            });
        }
    } catch (error) {
        console.log(
            "Unexpected error while 'prisma.followRequest.delete' or 'prisma.follower.create' in '/instagram/api/accept-request'",
        );

        return Response.json(
            "Unexpected error while 'prisma.followRequest.delete' or 'prisma.follower.create' in '/instagram/api/accept-request'",
            { status: 500 },
        );
    }
}
