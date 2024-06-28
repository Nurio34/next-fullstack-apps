import { currentUser } from "@clerk/nextjs/server";
import Main from "./Components/Main";
import Sidebar from "./Components/Sidebar";
import GlobalProvider from "./Provider";
import { getTasks } from "@/actions/todo";

async function TodoApp() {
    const user = await currentUser();
    const tasks = await getTasks();

    return (
        <div className="grid lg:grid-cols-[1fr,5fr]">
            <GlobalProvider>
                <Sidebar user={JSON.parse(JSON.stringify(user!))} />
                <Main tasks={tasks} />
            </GlobalProvider>
        </div>
    );
}

export default TodoApp;
