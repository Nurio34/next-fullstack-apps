import {
    CloudinaryResourceType,
    CropButtonType,
} from "@/app/google-photos/types";
import {
    useAppDispatch,
    useAppSelector,
} from "@/providers/reduxjs-provider/hooks";
import {
    setCrop,
    setCropTransformations,
} from "@/providers/reduxjs-provider/slices/tab";

function CropButton({
    btn,
    resource,
}: {
    btn: CropButtonType;
    resource: CloudinaryResourceType;
}) {
    const { cropObj, transformations } = useAppSelector((s) => s.tab);
    const dispatch = useAppDispatch();

    return (
        <li>
            <button
                className={`flex btn w-full justify-start gap-x-[2vw] disabled:bg-secondary disabled:text-secondary-content `}
                disabled={cropObj?.cropType === btn.id}
                onClick={() => {
                    dispatch(setCrop(btn.id));
                    dispatch(
                        setCropTransformations({
                            cropType: btn.id,
                            width: resource.width,
                            height: resource.height,
                        }),
                    );
                }}
            >
                <span>{btn.icon}</span>
                <span>{btn.label}</span>
            </button>
        </li>
    );
}

export default CropButton;
