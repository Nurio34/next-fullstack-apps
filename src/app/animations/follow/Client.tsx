import { useAppSelector } from "@/providers/reduxjs-provider/hooks";
import { useEffect, useState } from "react";

function Client() {
    const { mainHeight, headerHeight } = useAppSelector((s) => s.components);

    const text = "this text follow the mouse ...";

    const [x, setX] = useState<number>(0);
    const [y, setY] = useState<number>(0);
    const [isStart, setIsStart] = useState<boolean>(false);

    useEffect(() => {
        const onMouseMove = (e: MouseEvent) => {
            setX(e.clientX);
            setY(e.clientY);
        };

        window.addEventListener("mousemove", onMouseMove);

        // return () => window.removeEventListener("mousemove", onMouseMove);
    }, []);

    return (
        <main
            className="flex justify-center items-center "
            style={{
                minHeight: mainHeight,
            }}
        >
            <ul>
                {text.split("").map((ch, ind) => {
                    return (
                        <li
                            key={ind}
                            className="Follow_Li absolute capitalize transition-all
                                
                            "
                            style={{
                                color: `rgba(${10 * ind + 75},${
                                    20 * ind + 100
                                },${30 * ind + 125})`,
                                transitionDelay: `${ind * 0.01}s`,
                                transform: `translate(${ind * 16}px, -50%)`,
                                top: !isStart ? "50%" : y,
                                left: !isStart ? "30%" : x,
                            }}
                            onMouseEnter={() => {
                                setIsStart(true);
                            }}
                        >
                            {ch}
                        </li>
                    );
                })}
            </ul>
        </main>
    );
}

export default Client;
