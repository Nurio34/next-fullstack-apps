import { useGlobalContext } from "@/app/todoApp/Provider";
import { CiEdit } from "react-icons/ci";

function EditBtn({ index }: { index: number }) {
    const { setTaskContainerStatus } = useGlobalContext();

    return (
        <button
            type="button"
            className="btn btn-sm btn-warning"
            onClick={() =>
                setTaskContainerStatus((pre) => {
                    return {
                        ...pre,
                        isCreateFormOpen: false,
                        isEditFormOpen: true,
                        indexOfTask: index,
                        isDeleteModalOpen: false,
                    };
                })
            }
        >
            <CiEdit size={16} />
        </button>
    );
}

export default EditBtn;
