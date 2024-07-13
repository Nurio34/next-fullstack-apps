"use client";

import { store } from "@/providers/reduxjs-provider";
import React from "react";
import { Provider } from "react-redux";
import Client from "./Client";

function From2dTo3d() {
    return (
        <Provider store={store}>
            <Client />
        </Provider>
    );
}

export default From2dTo3d;
