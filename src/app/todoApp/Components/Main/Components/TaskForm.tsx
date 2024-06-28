import { createTask } from "@/actions/todo";
import { formatDate } from "@/utils/date";
import { FieldErrors, SubmitHandler, useForm } from "react-hook-form";
import { TaskType } from "@/types";

function TaskForm({
    isFormDisplay,
    setIsFormDisplay,
}: {
    isFormDisplay: boolean;
    setIsFormDisplay: React.Dispatch<React.SetStateAction<boolean>>;
}) {
    const { register, handleSubmit, formState, reset } = useForm<TaskType>();

    const { errors } = formState;

    const onSubmit: SubmitHandler<TaskType> = async (data) => {
        const task = { ...data, date: formatDate(data.date) };
        await createTask(task);
        setIsFormDisplay(!isFormDisplay);
        // reset();
    };
    // const onError = (errors: FieldErrors<TaskType>) => console.log(errors);

    return (
        <form
            className="absolute top-0 left-0 w-full h-full py-[1vh] px-[1vw]"
            onSubmit={handleSubmit(onSubmit)}
        >
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
                    <button type="submit" className="btn btn-secondary">
                        Add Task
                    </button>
                </div>
            </fieldset>
        </form>
    );
}

export default TaskForm;
