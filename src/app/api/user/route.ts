import { NextResponse } from "next/server";
import { currentUser } from "@clerk/nextjs/server";
import { NextApiRequest, NextApiResponse } from "next";

export async function POST(req: NextApiRequest, res: NextApiResponse) {
    // Get the userId from auth() -- if null, the user is not signed in
    console.log(req.body);

    if (!req) {
        return new NextResponse("Unauthorized", { status: 401 });
    }

    // Perform your Route Handler's logic
    return NextResponse.json(req.body, { status: 200 });
}
