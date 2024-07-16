"use server";

import prisma from "@/lib/prisma-mongo-db";
import { auth } from "@clerk/nextjs/server";

export const postStory = async (img: string) => {
    if (!img) {
        console.log("Error while getting 'img'");
        throw new Error("Error while getting 'img'");
    }

    const { userId } = auth();

    if (!userId) {
        console.log("Error while getting 'userId'");
        throw new Error("Error while getting 'userId'");
    }

    try {
        const res = await prisma.story.create({
            data: {
                userId,
                img,
                expiresAt: new Date(new Date().getTime() + 24 * 60 * 60 * 1000),
            },
        });

        if (!res) {
            console.log("Error while 'prisma.story.create'");
            throw new Error("Error while 'prisma.story.create'");
        }

        return "Story Created Successfully";
    } catch (error) {
        console.log("Unexpected error while 'prisma.story.create'");
        throw new Error("Unexpected error while 'prisma.story.create'");
    }
};
