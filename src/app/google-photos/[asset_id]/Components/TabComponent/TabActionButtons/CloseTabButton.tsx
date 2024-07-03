import {
    useAppDispatch,
    useAppSelector,
} from "@/providers/reduxjs-provider/hooks";
import {
    setActiveEditTab,
    setActiveTab,
    setEnhancement,
    setTransformations,
    toggleTab,
} from "@/providers/reduxjs-provider/slices/tab";

function CloseTabButton() {
    const { isOpen } = useAppSelector((s) => s.tab);

    const dispatch = useAppDispatch();

    return (
        <button
            type="button"
            className="btn btn-error"
            onClick={() => {
                dispatch(toggleTab(!isOpen));
                dispatch(setActiveTab("none"));
                dispatch(setEnhancement("none"));
                dispatch(setTransformations("none"));
            }}
        >
            Close
        </button>
    );
}

export default CloseTabButton;
