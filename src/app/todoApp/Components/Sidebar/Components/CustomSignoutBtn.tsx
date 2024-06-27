"use client";

import { useClerk } from "@clerk/nextjs";
import React from "react";

function CustomSignoutBtn() {
    const { signOut } = useClerk();

    return (
        <button
            className="btn btn-error text-error-content"
            onClick={() => signOut()}
        >
            Sign Out
        </button>
    );
}

export default CustomSignoutBtn;
