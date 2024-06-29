import React, { useState } from "react";
import { IoIosAdd } from "react-icons/io";
import CreateForm from "./CreateForm";
import { useGlobalContext } from "@/app/todoApp/Provider";

function CreateTaskBtn() {
    const { taskContainerStatus, setTaskContainerStatus } = useGlobalContext();

    return (
        <div
            className="border-[1px] border-accent shadow-sm shadow-accent py-[1vh] px-[2vw] rounded-md min-h-80
                flex justify-center items-center relative"
        >
            {taskContainerStatus.isCreateFormOpen ? (
                <CreateForm />
            ) : (
                <button
                    type="button"
                    onClick={() => {
                        setTaskContainerStatus((pre) => ({
                            ...pre,
                            isEditFormOpen: false,
                            isCreateFormOpen: true,
                        }));
                    }}
                >
                    <IoIosAdd size={"10vw"} />
                </button>
            )}
        </div>
    );
}

export default CreateTaskBtn;
