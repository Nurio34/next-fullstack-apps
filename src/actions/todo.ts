"use server";

import prisma from "@/lib/db";
import { TaskSchema, TaskType } from "@/types";
import { Task } from "@prisma/client";
import { revalidatePath } from "next/cache";

export const getTasks = async (): Promise<Task[]> => {
    try {
        const data = await prisma.task.findMany();
        return data;
    } catch (error) {
        throw new Error("Unexpected error while 'getTasks()'");
    }
};

export const createTask = async (task: TaskType): Promise<Task> => {
    try {
        const zodResult = TaskSchema.safeParse(task);

        if (!zodResult.success) {
            throw new Error("Error while 'Zod Validation'");
        }

        const data = zodResult.data;

        const newTask = await prisma.task.create({ data });
        return newTask;
    } catch (error) {
        throw new Error("Unexpected error while 'createTask()''");
    } finally {
        revalidatePath("/todoApp");
    }
};

export const editTask = async (
    task: TaskType & { id: string },
): Promise<Task> => {
    try {
        const editedTask = await prisma.task.update({
            where: {
                id: task.id,
                userId: task.userId,
            },
            data: {
                title: task.title,
                description: task.description,
                date: task.date,
            },
        });
        return editedTask;
    } catch (error) {
        throw new Error("Unexpected error while 'editTask()'");
    } finally {
        revalidatePath("/todoApp");
    }
};

export const deleteTask = async (id: string): Promise<boolean> => {
    try {
        const result = await prisma.task.delete({ where: { id } });

        if (!result) {
            return false;
        }
        return true;
    } catch (error) {
        throw new Error("Unexpected error while 'deleteTask()'");
    } finally {
        revalidatePath("/todoApp");
    }
};

export const updateTask = async ({
    isComplated,
    isImportant,
    id,
}: {
    isComplated?: boolean;
    isImportant?: boolean;
    id: string;
}): Promise<Task> => {
    try {
        const updatedTask = await prisma.task.update({
            where: { id },
            data: {
                isComplated,
                isImportant,
            },
        });
        console.log(updatedTask);
        return updatedTask;
    } catch (error) {
        throw new Error("Unexpected Error while 'Updating Task'");
    }
};
