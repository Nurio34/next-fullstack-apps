import { ReactNode } from "react";
import Header from "./Components/Header/index";

function Layout({ children }: { children: ReactNode }) {
    return (
        <main className=" relative overflow-hidden">
            <Header />
            {children}
        </main>
    );
}

export default Layout;
