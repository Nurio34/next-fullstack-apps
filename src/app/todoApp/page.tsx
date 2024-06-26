import Main from "./Components/Main";
import Sidebar from "./Components/Sidebar";
import GlobalProvider from "./Provider";

function TodoApp() {
    return (
        <div className="grid grid-cols-[1fr,3fr]">
            <Sidebar />
            <Main />
        </div>
    );
}

export default TodoApp;
