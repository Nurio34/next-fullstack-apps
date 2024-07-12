import prisma from "@/lib/prisma-mongo-db";
import { auth } from "@clerk/nextjs/server";
import { z } from "zod";
import { InputsSchema } from "../../types";

export async function POST(req: Request) {
    const formData = await req.json();

    if (!formData) {
        console.log(
            "Error while 'getting formData' in '/instagram/api/update-profile'",
        );
        return Response.json(
            "Error while 'getting formData' in '/instagram/api/update-profile'",
            { status: 404 },
        );
    }

    const { userId } = auth();

    if (!userId) {
        console.log(
            "Unauthenticated action in '/instagram/api/update-profile'",
        );

        return Response.json(
            "Unauthenticated action in '/instagram/api/update-profile'",
            { status: 404 },
        );
    }

    const zodValidation = InputsSchema.safeParse(formData);

    if (!zodValidation.success) {
        console.log(
            "Error while 'validating formData' in '/instagram/api/update-profile'",
        );

        return Response.json(
            "Error while 'validating formData' in '/instagram/api/update-profile'",
            { status: 404 },
        );
    }
    console.log({ zodValidation });

    try {
        const res = await prisma.user.update({
            where: {
                id: userId,
            },
            data: formData,
        });

        if (!res) {
            console.log(
                "Error while 'prisma.user.update' in '/instagram/api/update-profile'",
            );
            return Response.json(
                "Error while 'prisma.user.update' in '/instagram/api/update-profile'",
                { status: 404 },
            );
        }

        return Response.json("Profile Updated Succesfully", { status: 404 });
    } catch (error) {
        console.log(
            "Unexpected error while 'prisma.user.update' in '/instagram/api/update-profile'",
        );

        return Response.json(
            "Unexpected error while 'prisma.user.update' in '/instagram/api/update-profile'",
            { status: 404 },
        );
    }
}
