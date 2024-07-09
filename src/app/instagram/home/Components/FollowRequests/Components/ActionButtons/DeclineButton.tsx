import { FaRegCircleXmark } from "react-icons/fa6";
function DeclineButton() {
    return (
        <button>
            <FaRegCircleXmark size={24} className=" text-error" />
        </button>
    );
}

export default DeclineButton;
