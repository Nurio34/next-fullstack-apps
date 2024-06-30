"use client";

import {
    getComplatedTasks,
    getImportantTasks,
    getTasks,
    getTasksOfToday,
} from "@/actions/todo";
import { Task } from "@prisma/client";
import {
    Dispatch,
    ReactNode,
    SetStateAction,
    createContext,
    useContext,
    useEffect,
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
        isComplatedChange: boolean;
        isImportanceChange: boolean;
    };
    setTaskContainerStatus: Dispatch<
        SetStateAction<{
            isCreateFormOpen: boolean;
            isEditFormOpen: boolean;
            indexOfTask: number;
            isDeleteModalOpen: boolean;
            isComplatedChange: boolean;
            isImportanceChange: boolean;
        }>
    >;
    tasks: Task[];
    setTasks: Dispatch<SetStateAction<Task[]>>;
    isMenuOpen: boolean;
    setIsMenuOpen: Dispatch<SetStateAction<boolean>>;
    userId: string;
    setUserId: Dispatch<SetStateAction<string>>;
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
        isComplatedChange: false,
        isImportanceChange: false,
    });

    const [tasks, setTasks] = useState([] as Task[]);
    useEffect(() => {
        if (filterBy === "all") {
            const getTasksAction = async () => {
                const data = await getTasks(userId);
                setTasks(data);
            };
            getTasksAction();
        } else if (filterBy === "comp") {
            const getComplatedTasksAction = async () => {
                const data = await getComplatedTasks(userId);
                setTasks(data);
            };
            getComplatedTasksAction();
        } else if (filterBy === "imp") {
            const getImportantTasksAction = async () => {
                const data = await getImportantTasks(userId);
                setTasks(data);
            };
            getImportantTasksAction();
        } else {
            const getTasksOfTodayAction = async () => {
                const data = await getTasksOfToday(userId);
                setTasks(data);
            };
            getTasksOfTodayAction();
        }
    }, [filterBy, taskContainerStatus]);

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    useEffect(() => {
        const handleMenu = () => {
            if (window.innerWidth >= 1024) {
                setIsMenuOpen(true);
            } else {
                setIsMenuOpen(false);
            }
        };
        window.addEventListener("resize", handleMenu);

        return () => window.removeEventListener("resize", handleMenu);
    }, []);
    useEffect(() => {
        if (window.innerWidth >= 1024) {
            setIsMenuOpen(true);
        } else {
            setIsMenuOpen(false);
        }
    }, []);

    const [userId, setUserId] = useState("");

    return (
        <Context.Provider
            value={{
                isTitleDisplayed,
                setIsTitleDisplayed,
                filterBy,
                setFilterBy,
                taskContainerStatus,
                setTaskContainerStatus,
                tasks,
                setTasks,
                isMenuOpen,
                setIsMenuOpen,
                userId,
                setUserId,
            }}
        >
            {children}
        </Context.Provider>
    );
}

export default GloablProvider;
