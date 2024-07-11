"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

function Client({
    getUserInfo,
}: {
    getUserInfo: {
        username: string;
        avatar: string | null;
        cover: string | null;
        name: string | null;
        surname: string | null;
        followers: {
            id: string;
            createdAt: Date;
            followerId: string;
            followedId: string;
        }[];
    } | null;
}) {
    const path = usePathname();
    const isPathIncludesProfile = path.includes("profile");
    console.log({ getUserInfo });

    return (
        <>
            {!isPathIncludesProfile && (
                <div className=" bg-base-200 py-[1vh] px-[1vw] grid justify-items-center gap-[0.5vh] rounded-md shadow-sm shadow-base-content">
                    <div
                        className=" w-full aspect-video relative mb-[3vh] rounded-md"
                        style={{
                            backgroundImage: `url(${getUserInfo?.cover})`,
                            backgroundSize: "cover",
                            backgroundRepeat: "no-repeat",
                        }}
                    >
                        <figure
                            className="w-16 aspect-square rounded-full border-[1px] border-base-content bg-primary overflow-hidden
            absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2
        "
                        >
                            <Image
                                src={
                                    getUserInfo?.avatar
                                        ? getUserInfo.avatar
                                        : "/instagram/no_Avatar.webp"
                                }
                                fill
                                alt="avatar"
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            />
                        </figure>
                    </div>
                    <p className=" capitalize">
                        {getUserInfo?.name && getUserInfo?.surname
                            ? `${getUserInfo.name} ${getUserInfo.surname}`
                            : getUserInfo?.username}
                    </p>
                    <div>{getUserInfo?.followers.length} Followers</div>
                    <Link
                        href={`/instagram/home/profile/${getUserInfo?.username}`}
                        className="btn btn-primary btn-sm text-center justify-self-stretch font-bold text-lg"
                        style={{ fontVariant: "small-caps" }}
                    >
                        Profile
                    </Link>
                </div>
            )}
        </>
    );
}

export default Client;
