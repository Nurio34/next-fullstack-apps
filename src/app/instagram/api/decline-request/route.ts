import prisma from "@/lib/prisma-mongo-db";
import { revalidatePath } from "next/cache";

export async function POST(req: Request) {
    const requestId = await req.json();

    if (!requestId) {
        return Response.json(
            "Error with 'requestId' in '/instagram/api/decline-request'",
            { status: 404 },
        );
    }

    try {
        const res = await prisma.followRequest.delete({
            where: {
                id: requestId,
            },
        });

        if (!res) {
            return Response.json(
                "Error while 'prisma.followRequest.delete' in '/instagram/api/decline-request'",
                { status: 404 },
            );
        }

        return Response.json("Request Declined Successfully", { status: 200 });
    } catch (error) {
        return Response.json(
            "Unexpected error while 'prisma.followRequest.delete' in '/instagram/api/decline-request'",
            { status: 500 },
        );
    } finally {
        revalidatePath("/instagram/home");
    }
}
