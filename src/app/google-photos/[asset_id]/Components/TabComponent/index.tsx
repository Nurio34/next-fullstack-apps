import { useAppSelector } from "@/providers/reduxjs-provider/hooks";
import EditTab from "./EditTab";
import InfoTab from "./InfoTab";
import DeleteTab from "./DeleteTab";
import TabActionButtons from "./TabActionButtons";
import { CloudinaryResourceType } from "@/app/google-photos/types";

function TabComponent({ resource }: { resource: CloudinaryResourceType }) {
    const { isOpen, activeTab } = useAppSelector((s) => s.tab);

    const tabs = [
        {
            id: "edit",
            component: <EditTab resource={resource} />,
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

            <TabActionButtons src={resource.public_id} />
        </aside>
    );
}

export default TabComponent;
