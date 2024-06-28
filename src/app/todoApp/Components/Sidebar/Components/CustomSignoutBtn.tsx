"use client";

import { useClerk } from "@clerk/nextjs";
import React from "react";

function CustomSignoutBtn() {
    const { signOut } = useClerk();

    return (
        <button
            className="btn btn-error text-error-content my-[1vh] mx-[1vw]"
            onClick={() => signOut()}
        >
            Sign Out
        </button>
    );
}

export default CustomSignoutBtn;
