"use client";
import { store } from "@/providers/reduxjs-provider";
import Gallery from "./Components/Gallery";
import { CloudinaryResourceType } from "./types";
import { Provider } from "react-redux";

function GooglePhotosClient({
    resources,
}: {
    resources: CloudinaryResourceType[];
}) {
    return (
        <Provider store={store}>
            <Gallery resources={resources} />
        </Provider>
    );
}

export default GooglePhotosClient;
