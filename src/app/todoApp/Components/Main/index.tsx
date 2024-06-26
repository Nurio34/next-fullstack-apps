import GlobalProvider from "../../Provider";
import Client from "./Client";

function Main() {
    return (
        <main className="my-[2vh] mx-[4vw] py-[2vh] px-[4vw] border-[1px] border-primary shadow-md shadow-primary">
            <GlobalProvider>
                <Client />
            </GlobalProvider>
        </main>
    );
}

export default Main;
