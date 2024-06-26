"use client";

import GloablProvider from "@/app/Provider";
import SaveUserToGlobalStateClient from "./Client";

function SaveUserToGlobalState() {
    return (
        <GloablProvider>
            <SaveUserToGlobalStateClient />
        </GloablProvider>
    );
}

export default SaveUserToGlobalState;
