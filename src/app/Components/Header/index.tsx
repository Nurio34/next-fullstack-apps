import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import Link from "next/link";
import Applications from "./Components/Applications";
import SetHeaderHeight from "./Components/SetHeaderHeight";

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
            <SetHeaderHeight />
        </header>
    );
}

export default Header;
