import prisma from "@/lib/prisma-mongo-db";

export async function POST(req: Request) {
    const username = await req.json();

    try {
        const user = await prisma.user.findUnique({
            where: {
                username,
            },
            select: {
                avatar: true,
                cover: true,
                username: true,
                name: true,
                surname: true,
                _count: {
                    select: {
                        posts: true,
                        followers: true,
                        followings: true,
                    },
                },
                blocks: true,
            },
        });

        if (!user) {
            return Response.json({ err: "Error" }, { status: 404 });
        }

        return Response.json(user, { status: 200 });
    } catch (error) {
        return Response.json({ err: "Error" }, { status: 500 });
    }
}
