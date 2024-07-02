import { updateComplated } from "@/app/todoApp/actions/todo";
import { useGlobalContext } from "@/app/todoApp/Provider";
import toast from "react-hot-toast";

function ComplateBtn({
    isComplated,
    id,
}: {
    isComplated: boolean;
    id: string;
}) {
    const { setTaskContainerStatus } = useGlobalContext();

    return (
        <button
            type="button"
            className={`btn btn-sm  text-xs
            ${isComplated ? "btn-success" : "btn-error"}
        `}
            onClick={async () => {
                const updatedTask = await updateComplated({ isComplated, id });

                if (!updatedTask) {
                    toast.error("An Error while Updating Comolate");
                    return;
                } else {
                    if (!isComplated) {
                        toast.success("Task Complated");
                    } else {
                        toast.success("Task marked back as Incomplated");
                    }
                    setTaskContainerStatus((pre) => {
                        return {
                            ...pre,
                            isComplatedChange: !pre.isComplatedChange,
                        };
                    });
                }
            }}
        >
            {isComplated ? "Incomplate" : "Complate"}
        </button>
    );
}

export default ComplateBtn;
