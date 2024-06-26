import { currentUser } from "@clerk/nextjs/server";
import SaveUserToGlobalState from "./Components/SaveUserToGlobalState";
export default async function Home() {
    const user = await currentUser();
    console.log(user);

    return (
        <div>
            <SaveUserToGlobalState />
        </div>
    );
}
