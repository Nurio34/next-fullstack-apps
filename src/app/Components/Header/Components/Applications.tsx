"use client";

import Link from "next/link";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import React from "react";

function Applications() {
    const path = usePathname();

    return (
        <div className="flex gap-[2vw] items-center">
            <Link
                href="/todoApp"
                className={` transition-colors 
                    ${
                        path === "/todoApp"
                            ? " border-b-2 border-secondary pb-[0.5vh] font-semibold text-lg"
                            : "hover:text-secondary"
                    }`}
                style={{ fontVariant: path === "/todoApp" ? "small-caps" : "" }}
            >
                Tasks App
            </Link>
            <Link
                href="/google-photos"
                className={` transition-colors 
                    ${
                        path === "/google-photos"
                            ? " border-b-2 border-secondary pb-[0.5vh] font-semibold text-lg"
                            : "hover:text-secondary"
                    }`}
                style={{ fontVariant: path === "/todoApp" ? "small-caps" : "" }}
            >
                Google Photos Clone
            </Link>
        </div>
    );
}

export default Applications;
