import { ActionButtonType } from "@/app/google-photos/types";
import {
    useAppDispatch,
    useAppSelector,
} from "@/providers/reduxjs-provider/hooks";
import {
    setActiveTab,
    toggleTab,
} from "@/providers/reduxjs-provider/slices/tab";

function ActionBtn({ btn }: { btn: ActionButtonType }) {
    const { activeTab } = useAppSelector((s) => s.tab);

    const dispatch = useAppDispatch();

    return (
        <li>
            <button
                type="button"
                className={`btn btn-sm btn-circle ${
                    activeTab === btn.id && " btn-accent"
                } `}
                onClick={() => {
                    if (activeTab === btn.id) {
                        dispatch(toggleTab(false));
                        dispatch(setActiveTab("none"));
                    } else {
                        dispatch(setActiveTab(btn.id));
                        dispatch(toggleTab(true));
                    }
                }}
            >
                {btn.icon}
            </button>
        </li>
    );
}

export default ActionBtn;
