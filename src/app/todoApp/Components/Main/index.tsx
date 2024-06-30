"use client";

import React, { useEffect, useState } from "react";
import CreateTaskBtn from "./Components/CreateTaskBtn";
import { Task as TaskType } from "@prisma/client";
import TaskContainer from "./Components/TaskContainer";
import "./index.css";
import Title from "./Components/Title";
import { useGlobalContext } from "../../Provider";

function Main({ userId }: { userId: string }) {
    const { isTitleDisplayed, setIsTitleDisplayed, tasks, setUserId } =
        useGlobalContext();

    useEffect(() => {
        setIsTitleDisplayed(true);
    }, [isTitleDisplayed]);

    useEffect(() => {
        if (userId) {
            setUserId(userId);
        }
    }, []);

    return (
        <main
            className="my-[2vh] mx-[2vw] py-[1vh] px-[1vw] border-[1px] border-primary shadow-md shadow-primary h-[85vh] overflow-y-auto
                        lg:col-start-2 col-span-1"
        >
            <div className=" min-h-[55.03px]  mb-[1vh]">
                {isTitleDisplayed && <Title />}
            </div>
            <ul className="grid gap-y-[1vh] gap-x-[1vw] grid-cols-[repeat(auto-fill,minmax(320px,1fr))] overflow-hidden">
                {tasks?.map((task, index) => {
                    return (
                        <TaskContainer
                            key={task.id}
                            task={task}
                            index={index}
                        />
                    );
                })}
                <CreateTaskBtn key={"createBtn"} index={tasks.length} />
            </ul>
        </main>
    );
}

export default Main;
