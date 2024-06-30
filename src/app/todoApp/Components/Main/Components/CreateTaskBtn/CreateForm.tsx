import { createTask } from "@/actions/todo";
import { formatDate } from "@/utils/date";
import { FieldErrors, SubmitHandler, useForm } from "react-hook-form";
import { TaskType } from "@/types";
import toast from "react-hot-toast";
import SubmitBtn from "./SubmitBtn";
import { useGlobalContext } from "@/app/todoApp/Provider";
import { IoIosClose } from "react-icons/io";

function CreateForm() {
    const { setTaskContainerStatus, userId } = useGlobalContext();

    const { register, handleSubmit, formState, reset } = useForm<TaskType>();

    const { errors, isSubmitting } = formState;

    const onSubmit: SubmitHandler<TaskType> = async (data) => {
        const task = { ...data, date: formatDate(data.date) };

        const newTask = await createTask(task);

        if (!newTask) {
            toast.error("An error while Creating Task.Please try again");
            return;
        }

        setTaskContainerStatus((pre) => ({ ...pre, isCreateFormOpen: false }));
        toast.success("Task Created");
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
                        return { ...pre, isCreateFormOpen: false };
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
                    <div className="grid grid-cols-[1fr,auto] gap-[1vw] items-center">
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
                        <div>
                            <label
                                htmlFor="isImportant"
                                className="flex items-center gap-[1vw]"
                            >
                                <span>Important</span>
                                <input
                                    type="checkbox"
                                    id="isImportant"
                                    {...register("isImportant")}
                                />
                            </label>
                        </div>
                    </div>

                    <label htmlFor="userId">
                        <input
                            type="hidden"
                            defaultValue={userId}
                            {...register("userId")}
                        />
                    </label>
                    <SubmitBtn {...submitBtnProps} />
                </div>
            </fieldset>
        </form>
    );
}

export default CreateForm;
