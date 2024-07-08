import {
    ClerkLoaded,
    ClerkLoading,
    SignedIn,
    SignedOut,
    SignInButton,
    UserButton,
} from "@clerk/nextjs";

function Auth() {
    return (
        <div>
            <ClerkLoading>
                <span className="loading loading-dots loading-md min-h-[34px]"></span>
            </ClerkLoading>
            <ClerkLoaded>
                <SignedOut>
                    <span className=" btn btn-primary">
                        <SignInButton />
                    </span>
                </SignedOut>
                <SignedIn>
                    <UserButton />
                </SignedIn>
            </ClerkLoaded>
        </div>
    );
}

export default Auth;
