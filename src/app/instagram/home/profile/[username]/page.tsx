import { auth } from "@clerk/nextjs/server";
import Client from "./Client";

async function Profile({ params }: { params: { username: string } }) {
    const { userId } = auth();

    return <Client userId={userId!} username={params.username} />;
}

export default Profile;
