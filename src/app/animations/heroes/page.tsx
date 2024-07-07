"use client";

import { store } from "@/providers/reduxjs-provider";
import { Provider } from "react-redux";
import Client from "./Client";

function Animation1() {
    return (
        <Provider store={store}>
            <Client />
        </Provider>
    );
}

export default Animation1;
