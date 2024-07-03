"use client";

import React, { ReactNode } from "react";
import { CiCircleInfo, CiEdit } from "react-icons/ci";
import { MdDeleteOutline } from "react-icons/md";
import ActionBtn from "./ActionBtn";

function ActionButtons() {
    const actionButtons = [
        {
            id: "edit",
            icon: <CiEdit size={19} />,
            color: "primary",
        },
        {
            id: "info",
            icon: <CiCircleInfo size={19} />,
            color: "secondary",
        },
        {
            id: "delete",
            icon: <MdDeleteOutline size={19} />,
            color: "accent",
        },
    ];

    return (
        <ul className="flex gap-[2vw]">
            {actionButtons.map((btn) => {
                return <ActionBtn key={btn.id} btn={btn} />;
            })}
        </ul>
    );
}

export default ActionButtons;
