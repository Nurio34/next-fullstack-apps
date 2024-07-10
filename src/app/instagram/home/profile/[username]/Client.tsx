"use client";

import { store } from "@/providers/reduxjs-provider";
import { Provider } from "react-redux";
import Provided from "./Provided";

function Client({ userId, username }: { userId: string; username: string }) {
    return (
        <Provider store={store}>
            <Provided userId={userId} username={username} />
        </Provider>
    );
}

export default Client;
