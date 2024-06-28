"use client";

import React from "react";
import CustomSignoutBtn from "./Components/CustomSignoutBtn";
import Image from "next/image";
import crow from "@/../public/codding_crow.webp";
import FilterButton from "./Components/FilterButton";
import { User } from "@clerk/nextjs/server";

export type FilterBtnType = {
    id: "all" | "imp" | "comp" | "now";
    label: string;
};

function Sidebar({ user }: { user: User }) {
    const filterButtons: FilterBtnType[] = [
        {
            id: "all",
            label: "all tasks",
        },
        {
            id: "imp",
            label: "important!",
        },
        {
            id: "comp",
            label: "complated",
        },
        {
            id: "now",
            label: "do it now",
        },
    ];

    return (
        <nav
            className={`my-[2vh] mx-[2vw]  border-[1px] border-primary shadow-md shadow-primary
                    flex justify-between items-center
                    lg:grid lg:justify-stretch lg:place-content-between min-h-0 lg:min-h-[90vh]
                `}
        >
            <div className="grid 2xl:grid-cols-2 justify-center items-center gap-[1vw] py-[1vh] px-[1vw]">
                <figure className=" relative aspect-square ">
                    <Image
                        src={crow}
                        alt="codding crow"
                        fill
                        className=" rounded-full"
                    />
                </figure>
                <span>
                    <p>{user.firstName}</p>
                    <p className=" w-max truncate">{user.lastName}</p>
                </span>
            </div>
            <ul
                className="grid grid-cols-1
                        sm:grid-cols-2 
                        lg:grid-cols-1
                "
            >
                {filterButtons.map((btn) => {
                    return (
                        <li key={btn.id}>
                            <FilterButton btn={btn} />
                        </li>
                    );
                })}
            </ul>
            <CustomSignoutBtn />
        </nav>
    );
}

export default Sidebar;
