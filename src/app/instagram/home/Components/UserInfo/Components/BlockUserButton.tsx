import React, { useEffect, useState } from "react";
import { CurrentUserInfo, UserInfo } from "../Provided";

function BlockUserButton({
    currentUserInfo,
    userInfo,
}: {
    currentUserInfo: CurrentUserInfo;
    userInfo: UserInfo;
}) {
    const isUserBlocked = currentUserInfo?.blocks?.some(
        (block) => block.blockedId === userInfo.id,
    );

    const [blockStatus, setBlockStatus] = useState<boolean>(false);

    useEffect(() => {
        setBlockStatus(isUserBlocked);
    }, [isUserBlocked]);

    const handleBlock = async () => {
        const res = await fetch("/instagram/api/block", {
            method: "POST",
            body: JSON.stringify(userInfo.id),
        });

        const data = await res.json();
        setBlockStatus(data.blockStatus);
    };

    return (
        <div className="flex justify-end">
            <button
                type="button"
                className={`${blockStatus ? "text-warning" : "text-error"}`}
                onClick={handleBlock}
            >
                {blockStatus ? "Remove Block" : "Block User"}
            </button>
        </div>
    );
}

export default BlockUserButton;
