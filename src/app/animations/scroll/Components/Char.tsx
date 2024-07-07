import { useAppSelector } from "@/providers/reduxjs-provider/hooks";
import React from "react";

function Char({
    ch,
    ind,
    scrollTop,
    length,
}: {
    ch: string;
    ind: number;
    scrollTop: number;
    length: number;
}) {
    const { mainHeight } = useAppSelector((s) => s.components);
    const maxWidth = window.innerWidth;

    const randomX = Math.floor(Math.random() * maxWidth);
    const randomY = Math.floor(Math.random() * mainHeight);

    return (
        <span
            key={ind}
            className={`absolute transition-transform ${
                scrollTop >= (ind + 1) * 100
                    ? "text-primary top-0 left-0 capitalize font-bold "
                    : ""
            } `}
            style={{
                top: scrollTop >= (ind + 1) * 100 ? "50%" : randomY,
                left:
                    scrollTop >= (ind + 1) * 100 ? `${50 + length}%` : randomX,
                transform: `${
                    scrollTop >= (ind + 1) * 100
                        ? `translateY(-50%) translateX(calc(-50% - ${
                              (length - ind) * 1
                          }rem)`
                        : ""
                }`,
                filter: `${
                    scrollTop >= (ind + 1) * 100
                        ? "drop-shadow(0 0 10px white) drop-shadow(0 0 20px white)"
                        : ""
                } `,
            }}
        >
            {ch}
        </span>
    );
}

export default Char;
