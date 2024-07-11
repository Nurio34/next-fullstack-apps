import prisma from "@/lib/prisma-mongo-db";

export async function POST(req: Request) {
    const username = await req.json();

    if (!username) {
        return Response.json(
            { error: "Unexpected error '/instagram/api/owner-of-post'" },
            { status: 404 },
        );
    }

    try {
        const ownerOfPost = await prisma.user.findUnique({
            where: {
                username,
            },
            select: {
                avatar: true,
                username: true,
                name: true,
                surname: true,
            },
        });

        if (!ownerOfPost) {
            return Response.json(
                {
                    error: "Error while 'prisma.user.findUnique' in '/instagram/api/owner-of-post'",
                },
                { status: 404 },
            );
        }

        return Response.json(ownerOfPost, { status: 200 });
    } catch (error) {
        return Response.json(
            { error: "Unexpected error '/instagram/api/owner-of-post'" },
            { status: 404 },
        );
    }
}
