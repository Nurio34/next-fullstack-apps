import { Task as TaskType } from "@prisma/client";
import React from "react";
import ComplateBtn from "./ComplateBtn";
import EditBtn from "./EditBtn";
import DeleteBtn from "./DeleteBtn";

function Task({ task }: { task: TaskType }) {
    return (
        <li className=" border-[1px] border-accent shadow-sm shadow-accent py-[1vh] px-[2vw] rounded-md">
            <h2>{task.title}</h2>
            <p>{task.description}</p>
            <p>{task.date}</p>
            <div className="flex justify-between ">
                <ComplateBtn isComplated={task.isComplated} />
                <div className=" flex gap-[1vw]">
                    <EditBtn />
                    <DeleteBtn />
                </div>
            </div>
        </li>
    );
}

export default Task;
