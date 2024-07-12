import prisma from "@/lib/prisma-mongo-db";
import { auth } from "@clerk/nextjs/server";
import { z } from "zod";
import { InputsSchema } from "../../types";

export async function POST(req: Request) {
    const formData = await req.json();

    if (!formData) {
        return Response.json("Error", { status: 404 });
    }

    const { userId } = auth();

    if (!userId) {
        return Response.json("Error", { status: 404 });
    }

    const zodValidation = InputsSchema.safeParse(formData);

    if (!zodValidation.success) {
        return Response.json("Error", { status: 404 });
    }
    console.log({ zodValidation });

    try {
        const res = await prisma.user.update({
            where: {
                id: userId,
            },
            data: formData,
        });
    } catch (error) {}
}
