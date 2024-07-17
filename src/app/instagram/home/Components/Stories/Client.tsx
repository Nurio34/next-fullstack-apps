"use client";

import { store } from "@/providers/reduxjs-provider";
import { Provider } from "react-redux";
import Stories from "./Components/Stories";
import { usePathname } from "next/navigation";

export type Story = {
    id: string;
    createdAt: Date;
    expiresAt: Date;
    img: string;
    userId: string;
    user: {
        username: string;
    };
};

function Client({ stories }: { stories: Story[] }) {
    return (
        <Provider store={store}>
            <Stories stories={stories} />
        </Provider>
    );
}

export default Client;
