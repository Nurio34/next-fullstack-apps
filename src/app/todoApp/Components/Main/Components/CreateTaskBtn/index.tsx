import React, { useEffect, useRef, useState } from "react";
import { IoIosAdd } from "react-icons/io";
import CreateForm from "./CreateForm";
import { useGlobalContext } from "@/app/todoApp/Provider";
import { motion } from "framer-motion";

function CreateTaskBtn({ index }: { index: number }) {
    const { taskContainerStatus, setTaskContainerStatus, setCreateBtn } =
        useGlobalContext();

    const CreateButton = useRef<HTMLLIElement | null>(null);

    useEffect(() => {
        if (CreateButton.current) {
            setCreateBtn(CreateButton.current);
        }
    }, [setCreateBtn]);

    return (
        <motion.li
            className="border-[1px] border-accent shadow-sm shadow-accent py-[1vh] px-[2vw] rounded-md min-h-80
                flex justify-center items-center relative"
            layout
            transition={{
                delay: 0.05 * index,
            }}
            ref={CreateButton}
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
                            isDeleteModalOpen: false,
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
