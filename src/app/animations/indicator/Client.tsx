import { useAppSelector } from "@/providers/reduxjs-provider/hooks";
import "./index.css";
import { useEffect, useState } from "react";

function Client() {
    const { mainHeight } = useAppSelector((s) => s.components);

    const box = 9;

    return (
        <main
            style={{ minHeight: mainHeight }}
            className="Animate_Indicator_Main  flex justify-center items-center overflow-hidden"
        >
            <section className=" grid grid-cols-3 gap-[1vw] p-[1vw] overflow-hidden">
                {Array(box)
                    .fill(null)
                    .map((box, ind) => {
                        return (
                            <div className=" w-[10vw] relative aspect-square bg-base-300 -z-10 isolate">
                                {Array(4)
                                    .fill(null)
                                    .map((circle, ind) => {
                                        return (
                                            <span
                                                className={`block absolute w-[4vw] rounded-full aspect-square bg-base-100 z-10
                                                    ${
                                                        ind === 2 || ind === 3
                                                            ? "bottom-0"
                                                            : ""
                                                    }
                                                    ${
                                                        ind === 1 || ind === 2
                                                            ? "right-0 translate-x-1/2"
                                                            : ""
                                                    }
                                                    ${
                                                        ind === 0 || ind === 1
                                                            ? "-translate-y-1/2"
                                                            : ""
                                                    }
                                                    ${
                                                        ind === 2 || ind === 3
                                                            ? "translate-y-1/2"
                                                            : ""
                                                    }
                                                    ${
                                                        ind === 0 || ind === 3
                                                            ? "-translate-x-1/2"
                                                            : ""
                                                    }
                                                `}
                                                onMouseEnter={(
                                                    e: React.MouseEvent<HTMLSpanElement>,
                                                ) => {
                                                    console.log(
                                                        e.currentTarget,
                                                    );
                                                }}
                                            ></span>
                                        );
                                    })}
                            </div>
                        );
                    })}
                <span className="w-[10vw] absolute aspect-square bg-info"></span>
            </section>
        </main>
    );
}

export default Client;
