import React from "react";
import { Task as TaskType } from "@prisma/client";
import { useGlobalContext } from "@/app/todoApp/Provider";
import { deleteTask } from "@/actions/todo";
import toast from "react-hot-toast";

function DeleteModal({ task }: { task: TaskType }) {
    const { setTaskContainerStatus } = useGlobalContext();

    return (
        <div className="h-full grid justify-items-center gap-[2vh]">
            <p className=" self-center font-semibold">
                Are you sure to 'Delete' this task ?
            </p>
            <div className=" flex gap-[2vw]">
                <button
                    type="button"
                    className="btn btn-success"
                    onClick={async () => {
                        const deletedTask = await deleteTask(task.id);

                        if (!deletedTask) {
                            toast.error(
                                "An Error occured while Deleting Task. Please try again...",
                            );
                            return;
                        }

                        toast.success("Task Deleted");
                        setTaskContainerStatus((pre) => {
                            return { ...pre, isDeleteModalOpen: false };
                        });
                    }}
                >
                    Yes
                </button>
                <button
                    type="button"
                    className="btn btn-error"
                    onClick={() =>
                        setTaskContainerStatus((pre) => {
                            return {
                                ...pre,
                                isDeleteModalOpen: false,
                            };
                        })
                    }
                >
                    No
                </button>
            </div>
        </div>
    );
}

export default DeleteModal;
