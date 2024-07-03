import { useAppDispatch } from "@/app/google-photos/store/hooks";
import { toggleTab } from "@/app/google-photos/store/slices/tab";
import { ActionButtonType } from "@/app/google-photos/types";
import React from "react";

function ActionBtn({ btn }: { btn: ActionButtonType }) {
    const dispatch = useAppDispatch();

    return (
        <li>
            <button
                type="button"
                className={`btn btn-sm btn-circle `}
                onClick={() => dispatch(toggleTab())}
            >
                {btn.icon}
            </button>
        </li>
    );
}

export default ActionBtn;
