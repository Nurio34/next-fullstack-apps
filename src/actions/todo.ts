"use server";

import prisma from "@/lib/db";
import { Task } from "@prisma/client";

export const getTasks = async (): Promise<Task[]> => {
    try {
        const data = await prisma.task.findMany();
        return data;
    } catch (error) {
        throw new Error("Unexpected error while 'getTasks()'");
    }
};
