"use client";

import { Provider } from "react-redux";
import HeaderClient from "./Client";
import { store } from "@/providers/reduxjs-provider";

function Header() {
    return (
        <Provider store={store}>
            <HeaderClient />
        </Provider>
    );
}

export default Header;
