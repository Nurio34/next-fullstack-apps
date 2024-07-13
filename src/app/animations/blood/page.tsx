"use client";

import { store } from "@/providers/reduxjs-provider";
import React from "react";
import { Provider } from "react-redux";
import Client from "./Client";

function Blood() {
    return (
        <Provider store={store}>
            <Client />
        </Provider>
    );
}

export default Blood;
