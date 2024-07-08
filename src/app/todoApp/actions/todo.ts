"use server";

import prisma from "@/lib/prisma-mongo-db";
import { TaskSchema, TaskType } from "@/app/todoApp/types";
import { Task } from "@prisma/client";
import { revalidatePath } from "next/cache";

export const getTasks = async (userId: string): Promise<Task[]> => {
    try {
        const data = await prisma.task.findMany({
            where: { userId },
            orderBy: {
                createdAt: "desc",
            },
        });
        return data;
    } catch (error) {
        throw new Error("Unexpected error while 'getTasks()'");
    }
};
export const getComplatedTasks = async (userId: string): Promise<Task[]> => {
    try {
        const data = await prisma.task.findMany({
            where: {
                isComplated: true,
                userId,
            },
            orderBy: {
                createdAt: "desc",
            },
        });
        return data;
    } catch (error) {
        throw new Error("Unexpected error while 'getTasks()'");
    }
};
export const getImportantTasks = async (userId: string): Promise<Task[]> => {
    try {
        const data = await prisma.task.findMany({
            where: {
                isImportant: true,
                userId,
            },
            orderBy: {
                createdAt: "desc",
            },
        });
        return data;
    } catch (error) {
        throw new Error("Unexpected error while 'getTasks()'");
    }
};
export const getTasksOfToday = async (userId: string): Promise<Task[]> => {
    const today = new Date().toLocaleDateString();
    const task = await prisma.task.findMany({
        where: {
            date: today,
            userId,
        },
        orderBy: {
            createdAt: "asc",
        },
    });

    try {
        const data = await prisma.task.findMany({
            where: {
                date: today,
            },
        });
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
export const updateComplated = async ({
    isComplated,
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
                isComplated: !isComplated,
            },
        });
        return updatedTask;
    } catch (error) {
        throw new Error("Unexpected Error while 'Updating Task'");
    } finally {
        revalidatePath("/todoApp");
    }
};
export const updateImportance = async ({
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
                isImportant: !isImportant,
            },
        });
        return updatedTask;
    } catch (error) {
        throw new Error("Unexpected Error while 'Updating Task'");
    } finally {
        revalidatePath("/todoApp");
    }
};
