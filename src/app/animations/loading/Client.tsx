import { useAppSelector } from "@/providers/reduxjs-provider/hooks";
import "./index.css";
import { MutableRefObject, useEffect, useRef, useState } from "react";
import { revalidatePath } from "next/cache";

let time: NodeJS.Timeout | null = null;

function Client() {
    const { mainHeight } = useAppSelector((s) => s.components);

    const loading = "loading..........";

    const [isAnim, setIsAnim] = useState<boolean>(false);

    useEffect(() => {
        if (!isAnim) {
            setIsAnim(true);
        }
    }, [isAnim]);

    const [animMap, setAnimMap] = useState<{ [key: number]: number }>(() => {
        return loading.split("").reduce((obj, item, ind) => {
            obj[ind] = 0;
            return obj;
        }, {} as { [key: number]: number });
    });

    useEffect(() => {
        if (Object.values(animMap).every((item) => item === 1)) {
            setAnimMap(
                loading.split("").reduce((obj, item, ind) => {
                    obj[ind] = 0;
                    return obj;
                }, {} as { [key: number]: number }),
            );
        }
    }, [animMap]);

    return (
        <main
            className=" flex justify-center items-center"
            style={{ minHeight: mainHeight }}
        >
            {isAnim && (
                <ul
                    className="flex"
                    style={
                        { "--length": loading.length } as React.CSSProperties
                    }
                >
                    {loading.split("").map((ch, ind) => {
                        return (
                            <li
                                key={ind}
                                className="Animation4_Li capitalize font-bold text-5xl tracking-widest font-sans"
                                style={
                                    {
                                        WebkitTextStroke:
                                            ind <= 9 ? "1px white" : "",
                                        visibility: ind > 9 ? "hidden" : "",
                                        "--delay": ind,
                                        animationPlayState: isAnim
                                            ? "running"
                                            : "paused",
                                    } as React.CSSProperties
                                }
                                onAnimationEnd={() => {
                                    setAnimMap((pre) => ({ ...pre, [ind]: 1 }));
                                    if (ind === loading.length - 1) {
                                        setIsAnim(false);
                                    }
                                }}
                            >
                                {ch}
                            </li>
                        );
                    })}
                </ul>
            )}
        </main>
    );
}

export default Client;
