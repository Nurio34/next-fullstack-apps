import { currentUser } from "@clerk/nextjs/server";
import Main from "./Components/Main";
import Sidebar from "./Components/Sidebar";
import GlobalProvider from "./Provider";
import { redirect } from "next/navigation";

async function TodoApp() {
    const user = await currentUser();
    if (!user) redirect("/");

    return (
        <div
            className="grid grid-cols-1 relative
            lg:grid-cols-[1fr,5fr]
        "
        >
            <GlobalProvider>
                <Sidebar user={JSON.parse(JSON.stringify(user!))} />
                <Main userId={user.id} />
            </GlobalProvider>
        </div>
    );
}

export default TodoApp;
