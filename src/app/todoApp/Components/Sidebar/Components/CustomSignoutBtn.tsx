"use client";

import { useClerk } from "@clerk/nextjs";
import React from "react";

function CustomSignoutBtn() {
    const { signOut } = useClerk();

    return (
        <button
            className="btn btn-sm lg:btn-md btn-error text-error-content my-[1vh] mx-[1vw] text-xs"
            onClick={() => signOut()}
        >
            SignOut
        </button>
    );
}

export default CustomSignoutBtn;
