"use client";

import {
    Dispatch,
    ReactNode,
    SetStateAction,
    createContext,
    useContext,
    useState,
} from "react";

type GlobalContextType = {
    count: number;
    setCount: Dispatch<SetStateAction<number>>;
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
    const [count, setCount] = useState(0);

    return (
        <Context.Provider value={{ count, setCount }}>
            {children}
        </Context.Provider>
    );
}

export default GloablProvider;
