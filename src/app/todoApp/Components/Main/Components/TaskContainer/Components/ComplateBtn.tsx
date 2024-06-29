import { updateTask } from "@/actions/todo";

function ComplateBtn({
    isComplated,
    id,
}: {
    isComplated: boolean;
    id: string;
}) {
    return (
        <button
            type="button"
            className={`btn btn-sm
            ${isComplated ? "btn-success" : "btn-error"}
        `}
            onClick={async () => {
                const updatedTask = await updateTask({ isComplated, id });
                console.log(updatedTask);
            }}
        >
            {isComplated ? "Incomplate" : "Complate"}
        </button>
    );
}

export default ComplateBtn;
