import prisma from "@/lib/prisma-mongo-db";

export async function POST(req: Request) {
    const username = await req.json();

    try {
        if (!username) {
            return Response.json(
                { error: "Unauthenticated action" },
                { status: 404 },
            );
        }

        const postImages = await prisma.post.findMany({
            where: {
                userId: username,
                img: {
                    not: null,
                },
            },
            select: {
                img: true,
            },
            take: 8,
        });

        if (!postImages) {
            return Response.json(
                {
                    error: "Error while 'prisma.post.findMany' in '/instagram/api/post-images'",
                },
                { status: 404 },
            );
        }

        return Response.json(postImages, { status: 200 });
    } catch (error) {
        return Response.json(
            {
                error: "Unexpected error while 'prisma.post.findMany' in '/instagram/api/post-images'",
            },
            { status: 404 },
        );
    }
}
