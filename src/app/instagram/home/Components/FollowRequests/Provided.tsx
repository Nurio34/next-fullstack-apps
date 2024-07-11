import { useAppSelector } from "@/providers/reduxjs-provider/hooks";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import ActionButtons from "./Components/ActionButtons";
import Image from "next/image";

export type RequestType = {
    id: string;
    sender: {
        id: string;
        username: string;
        avatar: string | null;
        name: string | null;
        surname: string | null;
    };
};

function Provided() {
    const path = usePathname();

    const { currentUser, userId } = useAppSelector((s) => s.instagram);

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

    const isHomePage = path.endsWith("home");
    const isCurrentUserProfile = currentUser === userId;
    const isThereAnyRequest = requests.length > 0;

    return (
        <>
            {(isThereAnyRequest && isHomePage) ||
            (isThereAnyRequest && isCurrentUserProfile) ? (
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
                                    <figure className="relative aspect-square rounded-full border-[1px] border-base-content overflow-hidden">
                                        <Image
                                            src={
                                                request.sender.avatar ||
                                                "/instagram/no_avatar.webp"
                                            }
                                            fill
                                            alt={`avatar of ${request.sender.username}`}
                                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                        />
                                    </figure>
                                    <p className=" capitalize font-bold">
                                        {request.sender.name &&
                                        request.sender.surname
                                            ? `${request.sender.name} ${request.sender.surname}`
                                            : request.sender.username}
                                    </p>
                                    <ActionButtons
                                        requestId={request.id}
                                        setRequests={setRequests}
                                        senderId={request.sender.id}
                                    />
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
