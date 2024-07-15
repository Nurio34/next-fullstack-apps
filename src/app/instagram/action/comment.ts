"use server";

import prisma from "@/lib/prisma-mongo-db";
import { revalidatePath } from "next/cache";

export const commentToPost = async (formData: FormData) => {
    const userId = formData.get("userId") as string;
    const postId = formData.get("postId") as string;
    const comment = formData.get("comment") as string;

    try {
        const res = await prisma.comment.create({
            data: {
                userId,
                postId,
                decsription: comment,
            },
        });

        if (!res) {
            console.log(
                "Error while 'prisma.comment.create' in 'instagram/action/comment'",
            );
            throw new Error(
                "Error while 'prisma.comment.create' in 'instagram/action/comment'",
            );
        }
        revalidatePath("/instagram/home");
    } catch (error) {
        console.log(
            "Unexpected error while 'prisma.comment.create' in 'instagram/action/comment'",
            error,
        );
        throw new Error(
            "Unexpected error while 'prisma.comment.create' in 'instagram/action/comment'",
        );
    }
};
