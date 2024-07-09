import React from "react";
import Header from "./Components/Header";
import ProfileCard from "./Components/ProfileCard";
import FollowRequests from "./Components/FollowRequests";
import Menu from "./Components/Menu";
import Birthdays from "./Components/Birthdays";

function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <main className=" mx-[8vw] my-[4vh] space-y-[2vh]">
            <Header />
            <div className="grid grid-cols-[1fr,4fr,2fr] gap-[1vw]">
                <div className="space-y-[2vh]">
                    <ProfileCard />
                    <Menu />
                </div>
                <div>{children}</div>
                <div className="space-y-[2vh]">
                    <FollowRequests />
                    <Birthdays />
                </div>
            </div>
        </main>
    );
}

export default RootLayout;
