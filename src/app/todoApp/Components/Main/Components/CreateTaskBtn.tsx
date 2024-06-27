import React from "react";
import { IoIosAdd } from "react-icons/io";

function CreateTaskBtn() {
    return (
        <button
            type="button"
            className="border-[1px] border-accent shadow-sm shadow-accent py-[1vh] px-[2vw] rounded-md 
                flex justify-center items-center
            "
        >
            <IoIosAdd size={"10vw"} />
        </button>
    );
}

export default CreateTaskBtn;
