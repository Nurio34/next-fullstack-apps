"use client";

import { useEffect } from "react";
import { useAppSelector } from "@/store/hooks";
import { useRouter } from "next/router";
import { redirect } from "next/navigation";

function TodoAppClient() {
    const user = useAppSelector((state) => state.user);

    useEffect(() => {
        if (Object.keys(user.user).length === 0) {
            redirect("/");
        }
    }, [user]);

    return <div>TodoAppClient</div>;
}

export default TodoAppClient;
