import { NextResponse } from "next/server";
import { currentUser } from "@clerk/nextjs/server";

export async function GET() {
    // Get the userId from auth() -- if null, the user is not signed in
    const user = await currentUser();

    if (!user) {
        return new NextResponse("Unauthorized", { status: 401 });
    }

    const userData = {
        id: user.id,
        name: user.fullName,
        email: user.emailAddresses[0].emailAddress,
    };

    // Perform your Route Handler's logic
    return NextResponse.json(userData, { status: 200 });
}
