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
    filterBy: "all" | "imp" | "comp" | "now";
    setFilterBy: Dispatch<SetStateAction<"all" | "imp" | "comp" | "now">>;
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
    const [filterBy, setFilterBy] = useState<"all" | "imp" | "comp" | "now">(
        "all",
    );

    return (
        <Context.Provider value={{ filterBy, setFilterBy }}>
            {children}
        </Context.Provider>
    );
}

export default GloablProvider;
