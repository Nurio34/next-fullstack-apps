import { EnhanceButtonType } from "@/app/google-photos/types";
import {
    useAppDispatch,
    useAppSelector,
} from "@/providers/reduxjs-provider/hooks";
import {
    setEnhancement,
    setTransformations,
} from "@/providers/reduxjs-provider/slices/tab";

function EnhanceButton({ btn }: { btn: EnhanceButtonType }) {
    const { enhancement } = useAppSelector((s) => s.tab);
    const dispatch = useAppDispatch();

    return (
        <li>
            <button
                className={`flex btn w-full justify-start gap-x-[2vw]
                        ${
                            enhancement === btn.id &&
                            "btn-secondary text-secondary-content"
                        }
                    `}
                onClick={() => {
                    dispatch(setEnhancement(btn.id));
                    dispatch(setTransformations(btn.id));
                }}
            >
                <span>{btn.icon}</span>
                <span>{btn.label}</span>
            </button>
        </li>
    );
}

export default EnhanceButton;
