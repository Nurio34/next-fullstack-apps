"use server";

import { TodoType } from "@/types";
import prisma from "@/utils/prismaClient";

export const addTodo = async (todo: TodoType) => {
    console.log("adding todo");

    await prisma.task.create({
        data: todo,
    });
};
