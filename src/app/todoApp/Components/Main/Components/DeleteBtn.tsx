import { MdDeleteOutline } from "react-icons/md";

function DeleteBtn() {
    return (
        <button type="button" className="btn btn-error btn-sm">
            <MdDeleteOutline size={24} />
        </button>
    );
}

export default DeleteBtn;
