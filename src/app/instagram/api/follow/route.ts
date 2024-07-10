import prisma from "@/lib/prisma-mongo-db";
import { revalidatePath } from "next/cache";

export async function POST(req: Request) {
    const body = await req.json();
    const { currentUser, user, username } = body;

    try {
        const followStatus = await prisma.follower.findFirst({
            where: {
                followerId: currentUser!,
                followedId: user!,
            },
        });

        if (followStatus) {
            const res = await prisma.follower.delete({
                where: {
                    id: followStatus.id,
                },
            });

            if (!res) {
                throw new Error(
                    "Error while 'prisma.follower.delete' in '/instagram/api/follow'",
                );
            }

            return Response.json(
                { followStatus: false, followRequestStatus: false },
                { status: 200 },
            );
        } else {
            const followRequestStatus = await prisma.followRequest.findFirst({
                where: {
                    senderId: currentUser,
                    reciverId: user,
                },
            });

            if (followRequestStatus) {
                const res = await prisma.followRequest.delete({
                    where: { id: followRequestStatus.id },
                });

                if (!res) {
                    throw new Error(
                        "Error while 'prisma.followRequest.delete' in '/instagram/api/follow'",
                    );
                }

                return Response.json(
                    { followStatus: false, followRequestStatus: false },
                    { status: 200 },
                );
            } else {
                const res = await prisma.followRequest.create({
                    data: {
                        senderId: currentUser,
                        reciverId: user,
                    },
                });

                if (!res) {
                    throw new Error(
                        "Error while 'prisma.followRequest.create' in '/instagram/api/follow'",
                    );
                }

                return Response.json(
                    { followStatus: false, followRequestStatus: true },
                    { status: 200 },
                );
            }
        }
    } catch (error) {
        console.log(error);
        throw new Error("Unexpected error while '/instagram/api/follow'");
    } finally {
        revalidatePath(`/instagram/profile/${username}`);
    }
}
