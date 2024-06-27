import Main from "./Components/Main";
import Sidebar from "./Components/Sidebar";
import GloablProvider from "./Provider";

function TodoApp() {
    return (
        <div className="grid grid-cols-[1fr,3fr]">
            <GloablProvider>
                <Sidebar />
                <Main />
            </GloablProvider>
        </div>
    );
}

export default TodoApp;
