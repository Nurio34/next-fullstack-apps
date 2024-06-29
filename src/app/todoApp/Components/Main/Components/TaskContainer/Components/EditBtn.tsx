import { useGlobalContext } from "@/app/todoApp/Provider";
import { Dispatch, SetStateAction } from "react";
import { CiEdit } from "react-icons/ci";

function EditBtn({ index }: { index: number }) {
    const { setTaskContainerStatus } = useGlobalContext();

    return (
        <button
            type="button"
            className="btn btn-sm btn-warning"
            onClick={() =>
                setTaskContainerStatus(() => {
                    return {
                        isCreateFormOpen: false,
                        isEditFormOpen: true,
                        indexOfTask: index,
                        isDeleteModalOpen: false,
                    };
                })
            }
        >
            <CiEdit size={24} />
        </button>
    );
}

export default EditBtn;
