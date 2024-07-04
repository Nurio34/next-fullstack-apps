"use client";

import { CloudinaryResourceType } from "../types";
import TabComponent from "./Components/TabComponent";
import Media from "./Components/Media";
import { Provider } from "react-redux";
import { store } from "@/providers/reduxjs-provider";

function ClientPage({ resource }: { resource: CloudinaryResourceType }) {
    return (
        <Provider store={store}>
            <Media resource={resource} />
            <TabComponent resource={resource} />
        </Provider>
    );
}

export default ClientPage;
