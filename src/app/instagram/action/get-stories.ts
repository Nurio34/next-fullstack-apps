import { auth } from "@clerk/nextjs/server";

export const getStories = async () => {
    const { userId } = auth();

    console.log({ userId });

    return "res";
};
