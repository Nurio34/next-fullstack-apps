import { useGlobalContext } from "@/app/todoApp/Provider";
import { MdDeleteOutline } from "react-icons/md";

function DeleteBtn({ index }: { index: number }) {
    const { setTaskContainerStatus } = useGlobalContext();

    return (
        <button
            type="button"
            className="btn btn-error btn-sm"
            onClick={() =>
                setTaskContainerStatus((pre) => {
                    return {
                        ...pre,
                        isDeleteModalOpen: true,
                        indexOfTask: index,
                        isEditFormOpen: false,
                    };
                })
            }
        >
            <MdDeleteOutline size={24} />
        </button>
    );
}

export default DeleteBtn;
