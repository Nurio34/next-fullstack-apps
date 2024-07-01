import { Task as TaskType } from "@prisma/client";
import ComplateBtn from "./ComplateBtn";
import EditBtn from "./EditBtn";
import DeleteBtn from "./DeleteBtn";
import ImportantBtn from "./ImportantBtn";

function Task({ task, index }: { task: TaskType; index: number }) {
    return (
        <div className=" h-full grid grid-rows-[auto,auto,auto,1fr] gap-y-[1vh]">
            <h2>{task.title}</h2>
            <p>{task.description}</p>
            <p>{task.date}</p>
            <div className="flex justify-between self-end">
                <div className="flex gap-[0.5vw]">
                    <ComplateBtn isComplated={task.isComplated} id={task.id} />
                    <ImportantBtn isImportant={task.isImportant} id={task.id} />
                </div>
                <div className=" flex gap-[0.5vw]">
                    <EditBtn index={index} />
                    <DeleteBtn index={index} />
                </div>
            </div>
        </div>
    );
}

export default Task;
