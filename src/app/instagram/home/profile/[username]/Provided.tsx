import {
    useAppDispatch,
    useAppSelector,
} from "@/providers/reduxjs-provider/hooks";
import UserHero from "./Components/UserHero";
import { useEffect } from "react";
import {
    setCurrentUser,
    setUsername,
} from "@/providers/reduxjs-provider/slices/instagram";

function Provided({ userId, username }: { userId: string; username: string }) {
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(setCurrentUser(userId));
        dispatch(setUsername(username));
    }, [dispatch]);

    return (
        <div>
            <UserHero />
        </div>
    );
}

export default Provided;
