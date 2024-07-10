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

    return (
        <button
            type="button"
            className={`btn w-full
            ${
                isFollowing
                    ? "btn-success"
                    : isFollowRequestSent
                    ? "btn-warning"
                    : "btn-info"
            }
        `}
        >
            {isFollowing
                ? "Following"
                : isFollowRequestSent
                ? "Request Sent..."
                : "Follow"}
        </button>
    );
}

export default FollowButton;
