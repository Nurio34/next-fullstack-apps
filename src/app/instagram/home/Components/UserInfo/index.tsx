import prisma from "@/lib/prisma-mongo-db";
import Client from "./Client";
import { auth } from "@clerk/nextjs/server";

async function UserInfo() {
    return <Client />;
}

export default UserInfo;
