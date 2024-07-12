import { useAppSelector } from "@/providers/reduxjs-provider/hooks";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";
import { CiLocationOn } from "react-icons/ci";
import { FaLink, FaUniversity } from "react-icons/fa";
import { MdDateRange, MdWorkOutline } from "react-icons/md";
import FollowButton from "./Components/FollowButton";
import BlockUserButton from "./Components/BlockUserButton";
import { AnimatePresence, motion } from "framer-motion";
import ProfileForm from "./Components/ProfileForm";

export type CurrentUserInfo = {
    username: string;
    id: string;
    followings: {
        id: string;
        createdAt: Date;
        followerId: string;
        followedId: string;
    }[];
    sentRequests: {
        id: string;
        createdAt: Date;
        senderId: string;
        reciverId: string;
    }[];
    blocks: {
        id: string;
        createdAt: Date;
        blockerId: string;
        blockedId: string;
    }[];
};

export type UserInfo = {
    id: string;
    username: string;
    avatar: string | null;
    cover: string | null;
    name: string | null;
    surname: string | null;
    description: string | null;
    city: string | null;
    school: string | null;
    work: string | null;
    website: string | null;
    createdAt: Date;
    updatedAt: Date;
};

function Provided() {
    const { currentUser, username, userId } = useAppSelector(
        (s) => s.instagram,
    );

    const [currentUserInfo, setCurrentUserInfo] = useState<CurrentUserInfo>(
        {} as CurrentUserInfo,
    );
    const [userInfo, setUserInfo] = useState<UserInfo>({} as UserInfo);

    useEffect(() => {
        if (username) {
            const getUserInfo = async () => {
                try {
                    const res = await fetch("/instagram/api/user-info", {
                        method: "POST",
                        body: JSON.stringify({ currentUser, username }),
                    });
                    const data = await res.json();
                    const { currentUserInfo, userInfo } = data;

                    setCurrentUserInfo(currentUserInfo);
                    setUserInfo(userInfo);
                } catch (error) {
                    console.log(error);
                }
            };

            getUserInfo();
        }
    }, [username, currentUser]);

    const path = usePathname();
    const isPathIncludesProfile = path.includes("profile");
    const isCurrentUserProfile = path.includes(currentUserInfo.username);
    console.log({ isCurrentUserProfile });

    const [isAllShown, setIsAllShown] = useState<boolean>(false);

    useEffect(() => {
        setIsAllShown(isCurrentUserProfile);
    }, [isCurrentUserProfile]);

    const [isUpdatingProfile, setIsUpdatingProfile] =
        useState<boolean>(isCurrentUserProfile);

    return (
        <>
            {isPathIncludesProfile && (
                <aside className=" bg-base-200 py-[1vh] px-[1vw] rounded-md shadow-sm shadow-base-content space-y-[1vh] overflow-hidden">
                    <AnimatePresence mode="wait">
                        {!isUpdatingProfile ? (
                            <motion.div
                                key="info"
                                exit={{ height: 0 }}
                                initial={{ height: 0 }}
                                animate={{ height: "auto" }}
                                className=" space-y-[2vh]"
                            >
                                <span className="space-y-[1vh]">
                                    <span className="flex justify-between">
                                        <h2>User Information</h2>
                                        {currentUser === userId ? (
                                            <button
                                                type="button"
                                                className=" text-success underline underline-offset-2"
                                                onClick={() =>
                                                    setIsUpdatingProfile(true)
                                                }
                                            >
                                                Update Profile
                                            </button>
                                        ) : (
                                            <button
                                                type="button"
                                                className=" text-blue-400 underline underline-offset-2"
                                                onClick={() =>
                                                    setIsAllShown((pre) => !pre)
                                                }
                                            >
                                                See All
                                            </button>
                                        )}
                                    </span>
                                    <span className=" flex gap-[1vw] items-center">
                                        <p className=" capitalize font-semibold text-lg">
                                            {userInfo?.name && userInfo?.surname
                                                ? `${userInfo?.name} ${userInfo?.surname}`
                                                : userInfo?.username}
                                        </p>
                                        <Link href={"#"}>
                                            @{userInfo?.username}
                                        </Link>
                                    </span>
                                    <p>{userInfo?.description || ""}</p>
                                </span>
                                <AnimatePresence>
                                    {isAllShown && (
                                        <motion.div
                                            className="space-y-[1vh] origin-top overflow-hidden"
                                            initial={{ height: 0 }}
                                            animate={{ height: "auto" }}
                                            exit={{ height: 0 }}
                                        >
                                            <span className=" space-y-[0.5vh]">
                                                <p className="flex gap-[0.5vw] items-center">
                                                    <CiLocationOn size={20} />
                                                    Living in{" "}
                                                    {userInfo?.city || ""}
                                                </p>
                                                <p className="flex gap-[0.5vw] items-center">
                                                    <FaUniversity size={20} />
                                                    Went to{" "}
                                                    {userInfo?.city || ""}
                                                </p>
                                                <p className="flex gap-[0.5vw] items-center">
                                                    <MdWorkOutline size={20} />
                                                    Works at{" "}
                                                    {userInfo?.city || ""}
                                                </p>
                                                <div className="flex items-center justify-between">
                                                    <p className="flex gap-[0.5vw] items-center">
                                                        <FaLink size={20} />
                                                        <Link
                                                            href={
                                                                userInfo?.website ||
                                                                ""
                                                            }
                                                            className=" text-blue-400 underline-offset-2 underline"
                                                        >
                                                            {userInfo?.website ||
                                                                ""}
                                                        </Link>
                                                    </p>
                                                    <p className="flex gap-[0.5vw] items-center">
                                                        <MdDateRange
                                                            size={20}
                                                        />
                                                        Joined at
                                                        {new Date(
                                                            userInfo?.createdAt!,
                                                        )
                                                            .toDateString()
                                                            .split(" ")
                                                            .filter(
                                                                (item, ind) =>
                                                                    ind === 1 ||
                                                                    ind === 3,
                                                            )
                                                            .join(" ")}
                                                    </p>
                                                </div>
                                            </span>
                                            {!isCurrentUserProfile && (
                                                <>
                                                    <FollowButton
                                                        currentUserInfo={
                                                            currentUserInfo
                                                        }
                                                        userInfo={userInfo}
                                                    />
                                                    <BlockUserButton
                                                        currentUserInfo={
                                                            currentUserInfo
                                                        }
                                                        userInfo={userInfo}
                                                    />
                                                </>
                                            )}
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </motion.div>
                        ) : (
                            <ProfileForm
                                key="form"
                                setIsUpdatingProfile={setIsUpdatingProfile}
                                userInfo={userInfo}
                            />
                        )}
                    </AnimatePresence>
                </aside>
            )}
        </>
    );
}

export default Provided;
