import {
    useAppDispatch,
    useAppSelector,
} from "@/app/google-photos/store/hooks";
import { toggleTab } from "@/app/google-photos/store/slices/tab";

function TabComponent() {
    const { isOpen } = useAppSelector((s) => s.tab);
    const dispatch = useAppDispatch();

    return (
        <aside
            className={`absolute transition-transform right-0 top-0 min-w-96 h-full bg-base-300
                ${isOpen ? " translate-x-0" : "translate-x-full"}
        `}
        >
            TabComponent
            <button type="button" onClick={() => dispatch(toggleTab())}>
                Close
            </button>
        </aside>
    );
}

export default TabComponent;
