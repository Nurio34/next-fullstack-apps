"use server";

import prisma from "@/lib/prisma-mongo-db";
import { revalidatePath } from "next/cache";

export const like = async (formData: FormData) => {
    const userId = formData.get("userId") as string;
    const postId = formData.get("postId") as string;
    console.log({ userId, postId });

    try {
        const res = await prisma.like.create({
            data: {
                userId,
                postId,
            },
        });

        if (!res) {
            console.log(
                "Error while 'prisma.like.create' in 'instagram/action/like-posts.ts'",
            );
            throw new Error(
                "Error while 'prisma.like.create' in 'instagram/action/like-posts.ts'",
            );
        }

        revalidatePath("/instagram/home");
    } catch (error) {
        console.log(
            "Unexpected error while 'prisma.like.create' in 'instagram/action/like-posts.ts'",
            error,
        );
        throw new Error(
            "Unexpected error while 'prisma.like.create' in 'instagram/action/like-posts.ts'",
        );
    }
};

export const dislike = async (formData: FormData) => {
    const userId = formData.get("userId") as string;
    const postId = formData.get("postId") as string;
    console.log({ userId, postId });

    try {
        const likeObj = await prisma.like.findFirst({
            where: {
                postId,
                userId,
            },
        });

        if (!likeObj) {
            console.log(
                "Error while 'prisma.like.findFirst' in 'instagram/action/like-posts.ts'",
            );
            throw new Error(
                "Error while 'prisma.like.findFirst' in 'instagram/action/like-posts.ts'",
            );
        }

        const res = await prisma.like.delete({
            where: {
                id: likeObj.id,
            },
        });

        if (!res) {
            console.log(
                "Error while 'prisma.like.delete' in 'instagram/action/like-posts.ts'",
            );
            throw new Error(
                "Error while 'prisma.like.delete' in 'instagram/action/like-posts.ts'",
            );
        }

        revalidatePath("/instagram/home");
        return "Success";
    } catch (error) {
        console.log(
            "Unexpected error while 'prisma.like.delete' in 'instagram/action/like-posts.ts'",
            error,
        );
        throw new Error(
            "Unexpected error while 'prisma.like.delete' in 'instagram/action/like-posts.ts'",
        );
    }
};
