"use client";

import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { fetchUser } from "@/store/slices/user";
import { useEffect } from "react";

function SaveUserToGlobalStateClient() {
    const dispatch = useAppDispatch();
    const user = useAppSelector((s) => s.user);

    useEffect(() => {
        dispatch(fetchUser());
    }, [dispatch]);

    return <div>SaveUserToGlobalStateClient</div>;
}

export default SaveUserToGlobalStateClient;
