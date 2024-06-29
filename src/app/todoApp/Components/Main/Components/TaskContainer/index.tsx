"use client";

import Task from "./Task";
import { Task as TaskType } from "@prisma/client";
import EditForm from "./EditForm";
import { useState } from "react";
import { useGlobalContext } from "@/app/todoApp/Provider";
import DeleteModal from "./DeleteModal";

function TaskContainer({ task, index }: { task: TaskType; index: number }) {
    const { taskContainerStatus } = useGlobalContext();

    const { isEditFormOpen, indexOfTask, isDeleteModalOpen } =
        taskContainerStatus;

    return (
        <li className="relative border-[1px] border-accent shadow-sm shadow-accent py-[1vh] px-[1vw] rounded-md min-h-80">
            {!isDeleteModalOpen && !isEditFormOpen && (
                <Task task={task} index={index} />
            )}
            {!isDeleteModalOpen && isEditFormOpen && indexOfTask === index ? (
                <EditForm task={task} />
            ) : (
                <Task task={task} index={index} />
            )}
            {/* {isDeleteModalOpen && !isEditFormOpen && indexOfTask === index ? (
                <DeleteModal task={task} index={index} />
            ) : (
                <Task task={task} index={index} />
            )} */}
        </li>
    );
}

export default TaskContainer;
{
    /* 
    <Task task={task} index={index} />
    <EditForm task={task}  /> 
    <DeleteModal task={task} index={index} />
                */
}
