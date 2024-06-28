import React, { useState } from "react";
import { IoIosAdd } from "react-icons/io";
import TaskForm from "./TaskForm";

function CreateTaskBtn() {
    const [isFormDisplay, setIsFormDisplay] = useState<boolean>(false);

    return (
        <div
            className="border-[1px] border-accent shadow-sm shadow-accent py-[1vh] px-[2vw] rounded-md min-h-80
                flex justify-center items-center relative"
        >
            {isFormDisplay ? (
                <TaskForm
                    isFormDisplay={isFormDisplay}
                    setIsFormDisplay={setIsFormDisplay}
                />
            ) : (
                <button
                    type="button"
                    onClick={() => setIsFormDisplay(!isFormDisplay)}
                >
                    <IoIosAdd size={"10vw"} />
                </button>
            )}
        </div>
    );
}

export default CreateTaskBtn;
