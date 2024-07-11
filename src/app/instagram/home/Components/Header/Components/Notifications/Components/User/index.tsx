import prisma from "@/lib/prisma-mongo-db";
import { auth } from "@clerk/nextjs/server";
import Image from "next/image";
import no_avatar from "@/../public/instagram/no_avatar.webp";

async function User() {
    const { userId } = auth();

    try {
        const getUserAvatar = await prisma.user.findFirst({
            where: {
                id: userId!,
            },
            select: {
                avatar: true,
            },
        });

        return (
            <figure className=" relative w-8 aspect-square rounded-full overflow-hidden border-[1px] border-base-content bg-primary ">
                <Image
                    src={getUserAvatar?.avatar || no_avatar}
                    fill
                    alt="avatar"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
            </figure>
        );
    } catch (error) {
        return <figure className=" relative w-4 aspect-square "></figure>;
    }
}

export default User;
