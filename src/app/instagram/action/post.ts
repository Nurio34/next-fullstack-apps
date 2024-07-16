"use server";

import prisma from "@/lib/prisma-mongo-db";
import { auth } from "@clerk/nextjs/server";
import { revalidatePath } from "next/cache";

export const post = async (decsription: string, img: string) => {
    const { userId } = auth();

    if (!userId) {
        console.log("Unauthenticated action");
        throw new Error("Unauthenticated action");
    }

    if (!decsription) {
        console.log("There is no post description");
        throw new Error("There is no post description");
    }

    try {
        const res = await prisma.post.create({
            data: {
                decsription,
                userId,
                img,
            },
        });

        if (!res) {
            console.log(
                "Error while 'prisma.post.create' in '/instagram/action.post'",
            );
            throw new Error(
                "Error while 'prisma.post.create' in '/instagram/action.post'",
            );
        }

        return "Post Created Successfully";
    } catch (error) {
        console.log(
            "Unexpected error while 'prisma.post.create' in '/instagram/action.post'",
            error,
        );
        throw new Error(
            "Unexpected error while 'prisma.post.create' in '/instagram/action.post'",
        );
    } finally {
        revalidatePath("/instagram/home");
    }
};
