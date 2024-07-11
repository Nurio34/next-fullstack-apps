"use client";

import { Provider } from "react-redux";
import Provided from "./Provided";
import { store } from "@/providers/reduxjs-provider";

function Client() {
    return (
        <Provider store={store}>
            <Provided />
        </Provider>
    );
}

export default Client;
