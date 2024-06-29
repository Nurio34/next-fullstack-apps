"use client";

import { User } from "@clerk/nextjs/server";
import {
    Dispatch,
    ReactNode,
    SetStateAction,
    createContext,
    useContext,
    useState,
} from "react";

type GlobalContextType = {
    isTitleDisplayed: boolean;
    setIsTitleDisplayed: Dispatch<SetStateAction<boolean>>;
    filterBy: "all" | "imp" | "comp" | "now";
    setFilterBy: Dispatch<SetStateAction<"all" | "imp" | "comp" | "now">>;
    taskContainerStatus: {
        isCreateFormOpen: boolean;
        isEditFormOpen: boolean;
        indexOfTask: number;
        isDeleteModalOpen: boolean;
    };
    setTaskContainerStatus: Dispatch<
        SetStateAction<{
            isCreateFormOpen: boolean;
            isEditFormOpen: boolean;
            indexOfTask: number;
            isDeleteModalOpen: boolean;
        }>
    >;
};

type Props = {
    children: ReactNode;
};

const Context = createContext<GlobalContextType | undefined>(undefined);

export const useGlobalContext = () => {
    const context = useContext(Context);

    if (!context) {
        throw new Error("Error with GlobalContext in 'Main'");
    }

    return context;
};

function GloablProvider({ children }: Props) {
    const [isTitleDisplayed, setIsTitleDisplayed] = useState<boolean>(false);

    const [filterBy, setFilterBy] = useState<"all" | "imp" | "comp" | "now">(
        "all",
    );

    const [taskContainerStatus, setTaskContainerStatus] = useState({
        isCreateFormOpen: false,
        isEditFormOpen: false,
        indexOfTask: 0,
        isDeleteModalOpen: false,
    });

    return (
        <Context.Provider
            value={{
                isTitleDisplayed,
                setIsTitleDisplayed,
                filterBy,
                setFilterBy,
                taskContainerStatus,
                setTaskContainerStatus,
            }}
        >
            {children}
        </Context.Provider>
    );
}

export default GloablProvider;
