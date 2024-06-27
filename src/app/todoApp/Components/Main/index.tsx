"use client";

import { Task as TaskType } from "@prisma/client";
import { useGlobalContext } from "../../Provider";
import { useEffect, useState } from "react";
import { getTasks } from "@/actions/todo";
import Task from "./Components/Task";
import CreateTaskBtn from "./Components/CreateTaskBtn";

function Main() {
    const { count } = useGlobalContext();
    const [tasks, setTasks] = useState<TaskType[] | []>([]);
    console.log(tasks);

    useEffect(() => {
        if (tasks.length === 0) {
            const getTasksAction = async () => {
                const data = await getTasks();
                setTasks(data);
            };
            getTasksAction();
        }
    }, []);

    return (
        <main className="my-[2vh] mx-[4vw] py-[2vh] px-[4vw] border-[1px] border-primary shadow-md shadow-primary">
            <ul className="grid gap-y-[1vh] gap-x-[2vw] grid-cols-[repeat(auto-fill,minmax(320px,1fr))]">
                {tasks?.map((task) => {
                    return <Task key={task.id} task={task} />;
                })}
                <CreateTaskBtn />
            </ul>
        </main>
    );
}

export default Main;
