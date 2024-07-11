import { useAppSelector } from "@/providers/reduxjs-provider/hooks";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import ActionButtons from "./Components/ActionButtons";

export type RequestType = {
    id: string;
    createdAt: Date;
    senderId: string;
    reciverId: string;
};

function Provided() {
    const path = usePathname();

    const { currentUser, userId } = useAppSelector((s) => s.instagram);

    const isHomePage = path.endsWith("home");
    const isCurrentUserProfile = currentUser === userId;

    const [requests, setRequests] = useState<RequestType[]>(
        [] as RequestType[],
    );

    useEffect(() => {
        const getFriendRequests = async () => {
            const res = await fetch("/instagram/api/requests");
            const data = await res.json();
            setRequests(data);
        };
        getFriendRequests();
    }, []);

    return (
        <>
            {isHomePage || isCurrentUserProfile ? (
                <div className=" space-y-[1vh] py-[1vh] px-[1vw] rounded-md shadow-sm bg-base-200 shadow-base-content">
                    <h2
                        className=" font-semibold text-lg"
                        style={{ fontVariant: "small-caps" }}
                    >
                        Friend Requests
                    </h2>
                    <ul className=" space-y-[1vh]">
                        {requests.map((request, ind) => {
                            return (
                                <li
                                    key={ind}
                                    className="grid grid-cols-[1fr,4fr,2fr] gap-[1vw] items-center"
                                >
                                    <figure className="relative aspect-square rounded-full border-[1px] border-base-content"></figure>
                                    <p className=" capitalize font-bold">
                                        {"request.reciverId"}
                                    </p>
                                    <ActionButtons />
                                </li>
                            );
                        })}
                    </ul>
                </div>
            ) : null}
        </>
    );
}

export default Provided;
