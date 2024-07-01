import React from "react";
import { FilterBtnType } from "../index";
import { useGlobalContext } from "@/app/todoApp/Provider";
import { IoHomeOutline } from "react-icons/io5";
import { GrCompliance } from "react-icons/gr";
import { MdOutlineNotificationImportant } from "react-icons/md";
import { CiCircleAlert } from "react-icons/ci";

function FilterButton({ btn }: { btn: FilterBtnType }) {
    const { filterBy, setFilterBy, setIsTitleDisplayed } = useGlobalContext();
    const isCurrentFilter = btn.id === filterBy;

    const BtnIcons = {
        all: <IoHomeOutline />,
        comp: <GrCompliance />,
        imp: <MdOutlineNotificationImportant />,
        now: <CiCircleAlert />,
    };

    return (
        <button
            className={` py-[1vh] px-[1vw]  capitalize w-full transition-colors flex items-center justify-center  gap-[1vw] rounded-full min-w-12 aspect-square 
                ${
                    !isCurrentFilter &&
                    "border-r-2 border-transparent hover:bg-base-200 hover:border-warning "
                }
                ${
                    isCurrentFilter &&
                    " bg-neutral text-neutral-content border-r-4 border-success"
                }
                lg:rounded-none lg:aspect-auto lg:justify-start
            `}
            disabled={filterBy === btn.id}
            onClick={() => {
                setFilterBy(btn.id);
                setIsTitleDisplayed(false);
            }}
        >
            <span>{BtnIcons[btn.id]}</span>
            <span className="hidden lg:block">{btn.label}</span>
        </button>
    );
}

export default FilterButton;
