import { ActionButtonType } from "@/app/google-photos/types";
import React from "react";

function ActionBtn({ btn }: { btn: ActionButtonType }) {
    return (
        <li>
            <button
                type="button"
                className={`btn btn-sm btn-circle btn-${btn.color} `}
            >
                {btn.icon}
            </button>
        </li>
    );
}

export default ActionBtn;
