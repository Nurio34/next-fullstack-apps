import { EditTabType } from "@/app/google-photos/types";
import { useAppSelector } from "@/providers/reduxjs-provider/hooks";

function ActiveEditTab({ editTabs }: { editTabs: EditTabType[] }) {
    const { activeEditTab } = useAppSelector((s) => s.tab);

    const activeTab = editTabs.filter((tab) => tab.id === activeEditTab)[0];

    return <>{activeTab.tab}</>;
}

export default ActiveEditTab;
