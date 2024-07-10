"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

function Client() {
    const path = usePathname();

    const isPathIncludesProfile = path.includes("profile");

    const mockPictures = Array(8).fill(null);

    return (
        <>
            {isPathIncludesProfile && (
                <div className=" bg-base-200 py-[1vh] px-[1vw] rounded-md shadow-sm shadow-base-content space-y-[1vh]">
                    <div className="flex justify-between">
                        <h2>User Information</h2>
                        <Link
                            href={"#"}
                            className=" text-blue-400 underline underline-offset-2"
                        >
                            See All
                        </Link>
                    </div>
                    <ul className=" grid grid-cols-4 gap-x-[1vw] gap-y-[1vh]">
                        {mockPictures.map((pic, ind) => {
                            return (
                                <li key={ind}>
                                    <figure className="relative w-full aspect-square rounded-full border-[1px] border-base-content "></figure>
                                </li>
                            );
                        })}
                    </ul>
                </div>
            )}
        </>
    );
}

export default Client;
