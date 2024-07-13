import { useAppSelector } from "@/providers/reduxjs-provider/hooks";
import "./index.css";
import { useEffect, useRef } from "react";

function Client() {
    const { mainHeight } = useAppSelector((s) => s.components);

    const DivElement = useRef<HTMLDivElement | null>(null);
    const size = 100;

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            if (DivElement.current) {
                DivElement.current.style.position = "absolute";
                DivElement.current.style.top = `${e.clientY - size / 2}px`;
                DivElement.current.style.left = `${e.clientX - size / 2}px`;
            }
        };

        window.addEventListener("mousemove", handleMouseMove);

        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
        };
    }, []);

    return (
        <main style={{ minHeight: mainHeight }} className="">
            <div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
                    text-9xl font-serif uppercase text-info
                "
            >
                Blood
            </div>
            <div
                ref={DivElement}
                className="Animation_Blood_Cursor absolute overflow-hidden  aspect-square border-2 border-base-content rounded-full"
                style={{ width: size }}
            ></div>
        </main>
    );
}

export default Client;
