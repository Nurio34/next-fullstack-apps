"use client";

import { CloudinaryResourceType } from "../types";
import TabComponent from "./Components/TabComponent";
import Media from "./Components/Media";
import Header from "../Components/Header";
import { Provider } from "react-redux";
import { store } from "../store";

function ClientPage({ resource }: { resource: CloudinaryResourceType }) {
    return (
        <Provider store={store}>
            <Header />
            <Media resource={resource} />
            <TabComponent />
        </Provider>
    );
}

export default ClientPage;
