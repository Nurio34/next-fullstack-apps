import prisma from "@/lib/prisma-mongo-db";
import { useAppSelector } from "@/providers/reduxjs-provider/hooks";
import { auth, getAuth, currentUser } from "@clerk/nextjs/server";
import Image from "next/image";
import { notFound } from "next/navigation";
import { useEffect, useState } from "react";

type User = {
    username: string;
    avatar: string | null;
    cover: string | null;
    name: string | null;
    surname: string | null;
    blocks: {
        id: string;
        createdAt: Date;
        blockerId: string;
        blockedId: string;
    }[];
    _count: {
        posts: number;
        followers: number;
        followings: number;
    };
};

function UserHero() {
    const { currentUser, username, userId } = useAppSelector(
        (s) => s.instagram,
    );
    const [user, setUser] = useState<User>({} as User);
    const isCurrentUserBlocked = user?.blocks?.some(
        (block) => block.blockedId === currentUser,
    );

    useEffect(() => {
        if (username) {
            const getUserInfo = async () => {
                try {
                    const res = await fetch("/instagram/api/user-hero", {
                        method: "POST",
                        body: JSON.stringify(username),
                    });
                    const data = await res.json();
                    setUser(data);
                } catch (error) {
                    console.log(error);
                }
            };

            getUserInfo();
        }
    }, [username]);

    if (isCurrentUserBlocked) notFound();

    return (
        <article className=" bg-base-200 space-y-[1vh] rounded-md shadow-md shadow-base-content py-[1vh] px-[1vw] aspect-video">
            <div className=" relative mb-[6vh]">
                <figure className=" relative aspect-[16/4] rounded-lg overflow-hidden">
                    <Image
                        src={user?.cover! || "/instagram/no_cover.webp"}
                        fill
                        alt="cover"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        priority
                    />
                </figure>
                <div className="absolute left-1/2">
                    <figure
                        className="w-[5vw] aspect-square rounded-full overflow-hidden border-2 border-base-content shadow-md shadow-base-content
                             absolute -translate-y-1/2 -translate-x-1/2
                        "
                    >
                        <Image
                            src={user?.avatar! || "/instagram/no_cover.webp"}
                            fill
                            alt="cover"
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            priority
                        />
                    </figure>
                    <div className="absolute top-[4vw] w-max -translate-x-1/2 space-y-[2vh]">
                        <p className=" text-center font-bold capitalize text-lg">
                            {user?.name && user?.surname
                                ? `${user?.name} ${user?.surname}`
                                : user?.username}{" "}
                        </p>
                        <ul className="flex  gap-[2vw]">
                            <li className=" text-center">
                                <span className="block font-semibold">
                                    {user?._count?.posts}
                                </span>

                                <span className="block">Posts</span>
                            </li>
                            <li className=" text-center">
                                <span className="block font-semibold">
                                    {user?._count?.followers}
                                </span>

                                <span className="block">Followers</span>
                            </li>
                            <li className=" text-center">
                                <span className="block font-semibold">
                                    {user?._count?.followings}
                                </span>

                                <span className="block">Followings</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </article>
    );
}

export default UserHero;
