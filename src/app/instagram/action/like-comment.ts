"use server";

import prisma from "@/lib/prisma-mongo-db";
import { revalidatePath } from "next/cache";

export const likeComment = async (formData: FormData) => {
    const userId = formData.get("userId") as string;
    const commentId = formData.get("commentId") as string;
    console.log({ userId, commentId });

    try {
        const res = await prisma.like.create({
            data: {
                userId,
                commentId,
            },
        });

        if (!res) {
            console.log(
                "Error while 'prisma.like.create' in 'instagram/action/like-comment.ts'",
            );
            throw new Error(
                "Error while 'prisma.like.create' in 'instagram/action/like-comment.ts'",
            );
        }

        revalidatePath("/instagram/home");
    } catch (error) {
        console.log(
            "Unexpected error while 'prisma.like.create' in 'instagram/action/like-comment.ts'",
            error,
        );
        throw new Error(
            "Unexpected error while 'prisma.like.create' in 'instagram/action/like-comment.ts'",
        );
    }
};

export const dislikeComment = async (formData: FormData) => {
    const userId = formData.get("userId") as string;
    const commentId = formData.get("commentId") as string;

    try {
        const likeObj = await prisma.like.findFirst({
            where: {
                commentId,
                userId,
            },
        });

        if (!likeObj) {
            console.log(
                "Error while 'prisma.like.findFirst' in 'instagram/action/like-comment.ts'",
            );
            throw new Error(
                "Error while 'prisma.like.findFirst' in 'instagram/action/like-comment.ts'",
            );
        }

        const res = await prisma.like.delete({
            where: {
                id: likeObj.id,
            },
        });

        if (!res) {
            console.log(
                "Error while 'prisma.like.delete' in 'instagram/action/like-comment.ts'",
            );
            throw new Error(
                "Error while 'prisma.like.delete' in 'instagram/action/like-comment.ts'",
            );
        }

        revalidatePath("/instagram/home");
        return "Success";
    } catch (error) {
        console.log(
            "Unexpected error while 'prisma.like.delete' in 'instagram/action/like-comment.ts'",
            error,
        );
        throw new Error(
            "Unexpected error while 'prisma.like.delete' in 'instagram/action/like-comment.ts'",
        );
    }
};
