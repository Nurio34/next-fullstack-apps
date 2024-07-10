import React from "react";
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
    console.log(isUserBlocked);

    return (
        <div className="flex justify-end">
            <button
                type="button"
                className={`${isUserBlocked ? "text-warning" : "text-error"}`}
            >
                {isUserBlocked ? "Remove Block" : "Block User"}
            </button>
        </div>
    );
}

export default BlockUserButton;
