"use client";

import { store } from "@/providers/reduxjs-provider";
import { Provider } from "react-redux";
import Client from "./Client";

function SetHeaderHeight() {
    return (
        <Provider store={store}>
            <Client />
        </Provider>
    );
}

export default SetHeaderHeight;
