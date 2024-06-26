"use client";

import { useEffect } from "react";
import { useAppSelector } from "@/store/hooks";
import { redirect } from "next/navigation";
import axios from "axios";

function TodoAppClient() {
    const user = useAppSelector((state) => state.user);
    const isAuthedİUser = Object.keys(user.user).length > 0;
    const userData = user.user;

    useEffect(() => {
        if (!isAuthedİUser) {
            redirect("/");
        }
    }, [user]);

    useEffect(() => {
        if (!isAuthedİUser) {
            return;
        } else {
            console.log("User is beeing saved");

            const saveUser = async () => {
                const user = await axios.post("/api/user", userData);
                console.log({ data: userData });

                return user.data;
            };
            saveUser();
        }
    });

    return <div>TodoAppClient</div>;
}

export default TodoAppClient;
