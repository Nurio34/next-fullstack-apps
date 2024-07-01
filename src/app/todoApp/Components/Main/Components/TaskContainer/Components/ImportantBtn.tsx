import { updateImportance } from "@/actions/todo";
import { useGlobalContext } from "@/app/todoApp/Provider";
import toast from "react-hot-toast";

function ImportantBtn({
    isImportant,
    id,
}: {
    isImportant: boolean;
    id: string;
}) {
    const { setTaskContainerStatus } = useGlobalContext();

    return (
        <button
            type="button"
            className={`btn btn-sm btn-accent  text-xs
            ${isImportant ? "btn-secondary" : "btn-info"}
        `}
            onClick={async () => {
                const updatedTask = await updateImportance({ isImportant, id });

                if (!updatedTask) {
                    toast.error("An Error while Updating Importance");
                    return;
                } else {
                    if (!isImportant) {
                        toast.success("Task marked as Important");
                    } else {
                        toast.success("Task marked back as Unimportant");
                    }
                    setTaskContainerStatus((pre) => {
                        return {
                            ...pre,
                            isImportanceChange: !pre.isImportanceChange,
                        };
                    });
                }
            }}
        >
            {isImportant ? "Important" : "Unimportant"}
        </button>
    );
}

export default ImportantBtn;
