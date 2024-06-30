import React, { useState } from "react";
import { IoIosAdd } from "react-icons/io";
import CreateForm from "./CreateForm";
import { useGlobalContext } from "@/app/todoApp/Provider";
import { motion } from "framer-motion";

function CreateTaskBtn({ index }: { index: number }) {
    const { taskContainerStatus, setTaskContainerStatus } = useGlobalContext();

    return (
        <motion.li
            className="border-[1px] border-accent shadow-sm shadow-accent py-[1vh] px-[2vw] rounded-md min-h-80
                flex justify-center items-center relative"
            layout
            transition={{
                delay: 0.05 * index,
            }}
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
        </motion.li>
    );
}

export default CreateTaskBtn;
