"use client";

import { store } from "@/providers/reduxjs-provider";
import { Provider } from "react-redux";
import Stories from "./Components/Stories";

function Client() {
    return (
        <Provider store={store}>
            <Stories />
        </Provider>
    );
}

export default Client;
