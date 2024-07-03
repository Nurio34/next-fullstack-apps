import {
    useAppDispatch,
    useAppSelector,
} from "@/providers/reduxjs-provider/hooks";
import EditTab from "./EditTab";
import InfoTab from "./InfoTab";
import DeleteTab from "./DeleteTab";
import TabActionButtons from "./TabActionButtons";

function TabComponent() {
    const { isOpen, activeTab } = useAppSelector((s) => s.tab);
    const dispatch = useAppDispatch();

    const tabs = [
        {
            id: "edit",
            component: <EditTab />,
        },
        {
            id: "info",
            component: <InfoTab />,
        },
        {
            id: "delete",
            component: <DeleteTab />,
        },
    ];

    return (
        <aside
            className={`absolute transition-transform right-0 top-0 min-w-96 h-full bg-base-300 py-[1vh] px-[2vw]
                flex flex-col justify-between
                ${isOpen ? " translate-x-0" : "translate-x-full"}
        `}
        >
            <ul>
                {tabs.map((tab) => {
                    return (
                        <li key={tab.id}>
                            {activeTab === tab.id && tab.component}{" "}
                        </li>
                    );
                })}
            </ul>

            <TabActionButtons />
        </aside>
    );
}

export default TabComponent;
