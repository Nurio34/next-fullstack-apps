import { CloudinaryIcon } from "@/lib/icons";
import { useAppDispatch } from "@/providers/reduxjs-provider/hooks";
import {
    setActiveEditTab,
    setActiveTab,
    setCrop,
    setCropTransformations,
    setEnhancement,
    setEnhanceTransformations,
    toggleTab,
} from "@/providers/reduxjs-provider/slices/tab";
import Link from "next/link";

function Logo() {
    const dispatch = useAppDispatch();

    return (
        <Link
            href="/google-photos"
            className=" grid place-content-center min-h-[30px]"
            onClick={() => {
                dispatch(toggleTab(false));
                dispatch(setActiveTab("none"));
                dispatch(setActiveEditTab("enhance"));
                dispatch(setEnhancement("none"));
                dispatch(setEnhanceTransformations("none"));
                dispatch(setCrop("none"));
                dispatch(
                    setCropTransformations({
                        cropType: "none",
                        width: 0,
                        height: 0,
                    }),
                );
            }}
        >
            <CloudinaryIcon />
        </Link>
    );
}

export default Logo;
