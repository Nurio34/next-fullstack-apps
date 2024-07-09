import Link from "next/link";
import React from "react";
import { CiHome } from "react-icons/ci";
import { FaUserFriends } from "react-icons/fa";
import { Md1kPlus } from "react-icons/md";
import Search from "./Search";

function Navigation() {
    return (
        <nav className="flex gap-[1vw] items-center justify-start">
            <Link
                href={"/instagram/home"}
                className="flex items-center gap-[0.2vw]"
            >
                <CiHome size={24} />
                Homepage
            </Link>
            <Link
                href={"/instagram/home"}
                className="flex items-center gap-[0.2vw]"
            >
                <FaUserFriends size={24} />
                Friends
            </Link>
            <Link
                href={"/instagram/home"}
                className="flex items-center gap-[0.2vw]"
            >
                <Md1kPlus size={24} />
                Stories
            </Link>
            <Search />
        </nav>
    );
}

export default Navigation;
