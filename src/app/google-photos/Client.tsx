"use client";
import Gallery from "./Components/Gallery";
import { ResourceType } from "./types";
import Header from "./Components/Header";
import { Provider } from "react-redux";
import { store } from "./store";

function Client({ resources }: { resources: ResourceType }) {
    return (
        <Provider store={store}>
            <Header />
            <Gallery resources={resources} />
        </Provider>
    );
}

export default Client;
