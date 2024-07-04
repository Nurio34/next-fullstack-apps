import { EnhanceButtonType } from "@/app/google-photos/types";
import {
    useAppDispatch,
    useAppSelector,
} from "@/providers/reduxjs-provider/hooks";
import {
    setEnhancement,
    setEnhanceTransformations,
} from "@/providers/reduxjs-provider/slices/tab";

function EnhanceButton({ btn }: { btn: EnhanceButtonType }) {
    const { enhancement, transformations } = useAppSelector((s) => s.tab);
    const dispatch = useAppDispatch();

    return (
        <li>
            <button
                className={`flex btn w-full justify-start gap-x-[2vw]
                       
                        ${
                            transformations[
                                btn.id as
                                    | "improve"
                                    | "restore"
                                    | "removeBackground"
                            ] && "btn-secondary text-secondary-content"
                        }
                    `}
                onClick={() => {
                    dispatch(setEnhancement(btn.id));
                    dispatch(setEnhanceTransformations(btn.id));
                }}
            >
                <span>{btn.icon}</span>
                <span>{btn.label}</span>
            </button>
        </li>
    );
}

export default EnhanceButton;
