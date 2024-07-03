import { EditTabType } from "@/app/google-photos/types";
import { useAppDispatch } from "@/providers/reduxjs-provider/hooks";
import { setActiveEditTab } from "@/providers/reduxjs-provider/slices/tab";

function EditTabTbns({ editTabs }: { editTabs: EditTabType[] }) {
    const dispatch = useAppDispatch();

    return (
        <ul className={`flex`}>
            {editTabs.map((tab) => {
                return (
                    <li key={tab.id} className="grow">
                        <button
                            className="btn w-full"
                            onClick={() => dispatch(setActiveEditTab(tab.id))}
                        >
                            <span>{tab.icon}</span>
                        </button>
                    </li>
                );
            })}
        </ul>
    );
}

export default EditTabTbns;
