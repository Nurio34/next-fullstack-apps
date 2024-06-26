"use server";

import { FetchUserType, UserType } from "@/store/slices/user";
import { User, currentUser } from "@clerk/nextjs/server";

export const getUser = async () => {
    const user: User | null = await currentUser();

    try {
        if (!user) {
            const response: FetchUserType = {
                status: "failed",
                messsage: "An error while 'getUser'",
                data: null,
            };

            return response;
        }

        const userData: UserType = {
            id: user.id,
            name: user.fullName!,
            email: user.emailAddresses[0].emailAddress,
        };

        const response: FetchUserType = {
            status: "success",
            messsage: "Succesfully 'getUser'",
            data: userData,
        };
        return response;
    } catch (error) {
        const response: FetchUserType = {
            status: "failed",
            messsage: "Unexpected error while 'getUser'",
            data: null,
        };

        return response;
    }
};
