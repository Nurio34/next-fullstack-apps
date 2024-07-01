import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import Link from "next/link";
import React from "react";

function index() {
    return (
        <header className="flex justify-between items-center py-[2vh] px-[4vw] shadow-md shadow-primary">
            <Link href="/">Home</Link>
            <Link href="/todoApp">Todos</Link>
            <SignedOut>
                <span className=" btn btn-primary">
                    <SignInButton />
                </span>
            </SignedOut>
            <SignedIn>
                <UserButton />
            </SignedIn>
        </header>
    );
}

export default index;
