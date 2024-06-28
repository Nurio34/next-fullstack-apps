"use server";

import prisma from "@/lib/db";
import { TaskSchema, TaskType } from "@/types";
import { Task } from "@prisma/client";
import { revalidatePath } from "next/cache";
import toast from "react-hot-toast";
import { ZodError } from "zod";

export const getTasks = async (): Promise<Task[]> => {
    try {
        const data = await prisma.task.findMany();
        return data;
    } catch (error) {
        throw new Error("Unexpected error while 'getTasks()'");
    }
};

export const createTask = async (task: TaskType) => {
    console.log(task);
    try {
        const zodResult = TaskSchema.safeParse(task);

        if (!zodResult.success) {
            throw new Error("Error while 'Zod Validation'");
        }

        const data = zodResult.data;

        await prisma.task.create({ data });
    } catch (error) {
        throw new Error("Unexpected error while 'createTask()''");
    } finally {
        revalidatePath("/todoApp");
    }
};
