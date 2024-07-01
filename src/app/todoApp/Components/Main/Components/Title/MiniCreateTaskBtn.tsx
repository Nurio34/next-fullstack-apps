import { useGlobalContext } from "@/app/todoApp/Provider";
import React from "react";
import { IoIosAdd } from "react-icons/io";

function MiniCreateTaskBtn() {
    const { setTaskContainerStatus, createBtn } = useGlobalContext();

    const createTask = () => {
        createBtn?.scrollIntoView({ behavior: "smooth" });

        setTaskContainerStatus((pre) => {
            return {
                ...pre,
                isCreateFormOpen: true,
                isDeleteModalOpen: false,
                isEditFormOpen: false,
            };
        });
    };

    return (
        <button
            className="btn btn-circle btn-primary text-primary-content"
            onClick={createTask}
        >
            <IoIosAdd size={45} />
        </button>
    );
}

export default MiniCreateTaskBtn;
