import { SignIn } from "@clerk/nextjs";
import React from "react";

function SigninPage() {
    return (
        <main className=" min-h-96 grid place-content-center pt-[4vh]">
            <SignIn />
        </main>
    );
}

export default SigninPage;
