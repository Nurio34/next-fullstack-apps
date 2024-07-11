import { useEffect, useOptimistic, useState } from "react";
import { CurrentUserInfo, UserInfo } from "../Provided";

function FollowButton({
    currentUserInfo,
    userInfo,
}: {
    currentUserInfo: CurrentUserInfo;
    userInfo: UserInfo;
}) {
    const isFollowRequestSent = currentUserInfo?.sentRequests?.some(
        (request) => request.reciverId === userInfo.id,
    );

    const isFollowing = currentUserInfo?.followings?.some(
        (following) => following.followedId === userInfo.id,
    );

    const [status, setStatus] = useState<{
        followStatus: boolean;
        followRequestStatus: boolean;
    }>(
        {} as {
            followStatus: boolean;
            followRequestStatus: boolean;
        },
    );

    useEffect(() => {
        setStatus({
            followStatus: isFollowing,
            followRequestStatus: isFollowRequestSent,
        });
    }, [isFollowRequestSent, isFollowing]);

    const { followRequestStatus, followStatus } = status;

    const handleFollow = async () => {
        const res = await fetch("/instagram/api/follow", {
            method: "POST",
            body: JSON.stringify({
                currentUser: currentUserInfo.id,
                user: userInfo.id,
                username: userInfo.username,
            }),
        });
        const data = await res.json();
        setStatus(data);
    };

    return (
        <button
            type="button"
            className={`btn w-full
            ${
                followStatus
                    ? "btn-success"
                    : followRequestStatus
                    ? "btn-warning"
                    : "btn-info"
            }
        `}
            onClick={handleFollow}
        >
            {followStatus
                ? "Unfollow"
                : followRequestStatus
                ? "Cancel Request"
                : "Follow"}
        </button>
    );
}

export default FollowButton;
