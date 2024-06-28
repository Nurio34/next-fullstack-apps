import React from "react";
import { FilterBtnType } from "../index";
import { useGlobalContext } from "@/app/todoApp/Provider";

function FilterButton({ btn }: { btn: FilterBtnType }) {
    const { filterBy, setFilterBy } = useGlobalContext();
    const isCurrentFilter = btn.id === filterBy;

    return (
        <button
            className={` py-[1vh] px-[1vw]  capitalize w-full transition-colors
                ${
                    !isCurrentFilter &&
                    "hover:bg-base-200 hover:border-r-2 hover:border-warning"
                }
                ${isCurrentFilter && "bg-base-300 border-r-4 border-success"}
            `}
            onClick={() => setFilterBy(btn.id)}
        >
            {btn.label}
        </button>
    );
}

export default FilterButton;
