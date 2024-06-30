"use client";

import React from "react";
import CustomSignoutBtn from "./Components/CustomSignoutBtn";
import Image from "next/image";
import crow from "@/../public/codding_crow.webp";
import FilterButton from "./Components/FilterButton";
import { User } from "@clerk/nextjs/server";
import OpenSidebarBtn from "./Components/OpenSidebarBtn";
import { useGlobalContext } from "../../Provider";

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

    const { isMenuOpen } = useGlobalContext();
    console.log(user);
    return (
        <nav
            className={` border-[1px] border-primary shadow-primary min-h-[85vh] bg-neutral justify-self-stretch
                    absolute top-[2vh] left-0 z-10 transition-transform ${
                        isMenuOpen
                            ? " translate-x-0 shadow-md"
                            : "-translate-x-full shadow-none"
                    }
                    lg:my-[2vh] lg:mx-[2vw] grid justify-stretch place-content-between 
                    lg:bg-none
                `}
        >
            <div className="grid 2xl:grid-cols-2 2xl:justify-center 2xl:items-center gap-[1vw] py-[1vh] px-[1vw]">
                <figure className=" relative min-w-full aspect-square ">
                    <Image
                        src={user.imageUrl}
                        alt="codding crow"
                        fill
                        sizes="(min-width: 808px) 50vw, 100vw"
                        priority
                        className=" rounded-full"
                    />
                </figure>
                <span>
                    <p className=" text-center 2xl:text-start capitalize">
                        {user.firstName || user.username}
                    </p>
                    <p className="hidden lg:block lg:w-max truncate capitalize">
                        {user.lastName}
                    </p>
                </span>
            </div>
            <ul className="grid grid-cols-1 justify-items-center  lg:justify-items-stretch">
                {filterButtons.map((btn) => {
                    return (
                        <li key={btn.id}>
                            <FilterButton btn={btn} />
                        </li>
                    );
                })}
            </ul>
            <CustomSignoutBtn />
            <OpenSidebarBtn />
        </nav>
    );
}

export default Sidebar;
