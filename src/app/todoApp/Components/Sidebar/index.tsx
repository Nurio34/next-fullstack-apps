"use client";

import React, { ReactElement, ReactNode, useEffect, useRef } from "react";
import CustomSignoutBtn from "./Components/CustomSignoutBtn";
import Image from "next/image";
import crow from "@/../public/codding_crow.webp";
import FilterButton from "./Components/FilterButton";
import { User } from "@clerk/nextjs/server";
import OpenSidebarBtn from "./Components/OpenSidebarBtn";
import { useGlobalContext } from "../../Provider";
import { UserButton } from "@clerk/nextjs";

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

    const { isMenuOpen, setIsMenuOpen } = useGlobalContext();

    return (
        <nav
            className={` border-[1px] border-primary shadow-primary min-h-[85vh] bg-base-300 justify-self-stretch
                    absolute top-[2vh] left-0 z-10 transition-transform ${
                        isMenuOpen
                            ? " translate-x-0 shadow-md"
                            : "-translate-x-full shadow-none"
                    }
                    lg:ml-[2vw] lg:mr-[0] grid justify-stretch place-content-between 
                    lg:bg-transparent
                `}
            onMouseLeave={() => {
                setTimeout(() => {
                    if (window.innerWidth < 1024) {
                        setIsMenuOpen(false);
                    }
                }, 1000);
            }}
            onBlur={() => {
                setTimeout(() => {
                    if (window.innerWidth < 1024) {
                        setIsMenuOpen(false);
                    }
                }, 1000);
            }}
        >
            <div className="grid 2xl:grid-cols-2 2xl:justify-center 2xl:items-center gap-[1vw] py-[1vh] px-[1vw] relative">
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
                    <p className="hidden lg:block text-center 2xl:text-start capitalize">
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
