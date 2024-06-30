import { useGlobalContext } from "@/app/todoApp/Provider";
import React from "react";

function OpenSidebarBtn() {
    const { setIsMenuOpen } = useGlobalContext();

    return (
        <button
            className="grid bg-primary text-primary-content font-semibold rounded-md py-[1vh] px-[1vw]  
                absolute right-0 translate-x-full top-1/2 -translate-y-1/2
            lg:hidden
        "
            onClick={() => setIsMenuOpen((pre) => !pre)}
        >
            <span className="  ">M</span>
            <span>E</span>
            <span>N</span>
            <span>U</span>
        </button>
    );
}

export default OpenSidebarBtn;
