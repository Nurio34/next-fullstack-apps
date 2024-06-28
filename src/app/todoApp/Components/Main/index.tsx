"use client";

import React from "react";
import CreateTaskBtn from "./Components/CreateTaskBtn";
import { Task as TaskType } from "@prisma/client";
import Task from "./Components/Task";
import "./index.css";
import { useGlobalContext } from "../../Provider";

function Main({ tasks }: { tasks: TaskType[] }) {
    const { filterBy } = useGlobalContext();

    enum Titles {
        all = "all tasks",
        imp = "important tasks",
        comp = "complated tasks",
        now = "do it now",
    }

    return (
        <main className="my-[2vh] mx-[2vw] py-[1vh] px-[1vw] border-[1px] border-primary shadow-md shadow-primary">
            <h2
                className="Title font-bold text-3xl capitalize py-[1vh] mb-[1vh] relative inline-block"
                style={{ fontVariant: "small-caps" }}
            >
                {Titles[filterBy]}
            </h2>
            <ul className="grid gap-y-[1vh] gap-x-[1vw] grid-cols-[repeat(auto-fill,minmax(320px,1fr))]">
                {tasks?.map((task) => {
                    return <Task key={task.id} task={task} />;
                })}
                <CreateTaskBtn />
            </ul>
        </main>
    );
}

export default Main;
