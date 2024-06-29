"use client";

import React, { useEffect, useState } from "react";
import CreateTaskBtn from "./Components/CreateTaskBtn";
import { Task as TaskType } from "@prisma/client";
import TaskContainer from "./Components/TaskContainer";
import "./index.css";
import Title from "./Components/Title";
import { useGlobalContext } from "../../Provider";

function Main({ tasks }: { tasks: TaskType[] }) {
    const { isTitleDisplayed, setIsTitleDisplayed } = useGlobalContext();

    useEffect(() => {
        setIsTitleDisplayed(true);
    }, [isTitleDisplayed]);

    return (
        <main className="my-[2vh] mx-[2vw] py-[1vh] px-[1vw] border-[1px] border-primary shadow-md shadow-primary">
            <div className=" min-h-[55.03px]  mb-[1vh]">
                {isTitleDisplayed && <Title />}
            </div>
            <ul className="grid gap-y-[1vh] gap-x-[1vw] grid-cols-[repeat(auto-fill,minmax(320px,1fr))]">
                {tasks?.map((task, index) => {
                    return (
                        <TaskContainer
                            key={task.id}
                            task={task}
                            index={index}
                        />
                    );
                })}
                <CreateTaskBtn />
            </ul>
        </main>
    );
}

export default Main;
