import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";
import Applications from "./Components/Applications";

function Header() {
    return (
        <header className="flex justify-between items-center py-[2vh] px-[4vw] shadow-md shadow-primary">
            <Link href="/">Home</Link>
            <Applications />
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

export default Header;
