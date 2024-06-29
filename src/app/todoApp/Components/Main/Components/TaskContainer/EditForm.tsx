import { createTask, editTask } from "@/actions/todo";
import { formatDate, reFormatDate } from "@/utils/date";
import { FieldErrors, SubmitHandler, useForm } from "react-hook-form";
import { TaskType } from "@/types";
import toast from "react-hot-toast";
import SubmitBtn from "./SubmitBtn";
import { Task } from "@prisma/client";
import { IoIosClose } from "react-icons/io";
import { useGlobalContext } from "@/app/todoApp/Provider";

function EditForm({ task }: { task: Task }) {
    const { setTaskContainerStatus } = useGlobalContext();

    const { register, handleSubmit, formState, reset } = useForm<
        TaskType & { id: string }
    >({
        defaultValues: {
            title: task.title,
            description: task.description,
            date: reFormatDate(task.date),
            id: task.id,
            userId: task.userId,
        },
    });

    const { errors, isSubmitting } = formState;

    const onSubmit: SubmitHandler<TaskType & { id: string }> = async (data) => {
        const taskToEdit = { ...data, date: formatDate(data.date) };

        const editedTask = await editTask(taskToEdit);
        console.log(editedTask);

        setTaskContainerStatus((pre) => ({ ...pre, isEditFormOpen: false }));
        toast.success("Task Updated");
    };
    // const onError = (errors: FieldErrors<TaskType>) => console.log(errors);

    const submitBtnProps = { isSubmitting };

    return (
        <form
            className="absolute top-0 left-0 w-full h-full py-[1vh] px-[1vw]
                grid
            "
            onSubmit={handleSubmit(onSubmit)}
        >
            <button
                type="button"
                className="btn btn-sm btn-error btn-circle justify-self-end"
                onClick={() =>
                    setTaskContainerStatus((pre) => {
                        return { ...pre, isEditFormOpen: false };
                    })
                }
            >
                <IoIosClose size={24} />
            </button>
            <fieldset>
                <legend
                    className=" font-semibold text-xl text-center pb-[1vh]"
                    style={{ fontVariant: "small-caps" }}
                >
                    Task
                </legend>
                <div className="grid gap-[1vh]">
                    <div>
                        <label htmlFor="title">
                            <input
                                id="title"
                                className="input input-sm input-secondary w-full"
                                placeholder="Title"
                                {...register("title", {
                                    required: "Title required",
                                })}
                            />
                        </label>
                        <p className=" text-xs text-error pt-1">
                            {errors.title?.message}
                        </p>
                    </div>
                    <div>
                        <label htmlFor="description">
                            <input
                                id="description"
                                className="input input-sm input-secondary w-full"
                                placeholder="Description..."
                                {...register("description", {
                                    required: "Description required",
                                })}
                            />
                            <p className=" text-xs text-error pt-1">
                                {errors.description?.message}
                            </p>
                        </label>
                    </div>
                    <div>
                        <label htmlFor="date">
                            <input
                                id="date"
                                type="date"
                                className="input input-sm input-secondary w-full"
                                placeholder="Date..."
                                {...register("date", {
                                    required: "Date required",
                                })}
                            />
                        </label>
                        <p className=" text-xs text-error pt-1">
                            {errors.date?.message}
                        </p>
                    </div>
                    <label htmlFor="userId">
                        <input
                            type="hidden"
                            defaultValue={"id_nuri"}
                            {...register("userId")}
                        />
                    </label>
                    <SubmitBtn {...submitBtnProps} />
                </div>
            </fieldset>
        </form>
    );
}

export default EditForm;
