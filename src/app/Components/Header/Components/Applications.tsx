"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

function Applications() {
    const path = usePathname();

    const apps = ["todoApp", "google-photos", "animations"];

    return (
        <ul className="flex gap-[2vw] items-center capitalize">
            {apps.map((app) => {
                return (
                    <li key={app}>
                        <Link
                            href={`/${app}`}
                            className={` transition-colors 
                    ${
                        path.includes(app)
                            ? " border-b-2 border-secondary pb-[0.5vh] font-semibold text-lg"
                            : "hover:text-secondary"
                    }`}
                            style={{
                                fontVariant: path.includes(app)
                                    ? "small-caps"
                                    : "",
                            }}
                        >
                            {app}
                        </Link>
                    </li>
                );
            })}
        </ul>
    );
}

export default Applications;
