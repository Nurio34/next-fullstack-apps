import {
    useAppDispatch,
    useAppSelector,
} from "@/providers/reduxjs-provider/hooks";
import UserHero from "./Components/UserHero";
import { useEffect } from "react";
import {
    setCurrentUser,
    setUserId,
    setUsername,
} from "@/providers/reduxjs-provider/slices/instagram";
import { PostType } from "../../Components/Feed";
import Feed from "./Components/Feed";

function Provided({
    currentUserId,
    username,
    userId,
    posts,
}: {
    currentUserId: string;
    username: string;
    userId: string;
    posts: PostType[];
}) {
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(setCurrentUser(currentUserId));
        dispatch(setUsername(username));
        dispatch(setUserId(userId));
    }, [currentUserId, dispatch, userId, username]);

    return (
        <div className="space-y-[2vh]">
            <UserHero />
            <Feed posts={posts} />
        </div>
    );
}

export default Provided;
