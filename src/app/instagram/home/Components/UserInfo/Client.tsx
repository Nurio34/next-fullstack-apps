"use client";

import { store } from "@/providers/reduxjs-provider";
import { Provider } from "react-redux";
import Provided from "./Provided";

function Client() {
    return (
        <Provider store={store}>
            <Provided />
        </Provider>
    );
}

export default Client;
