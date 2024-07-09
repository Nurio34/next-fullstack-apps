import {
    useAppDispatch,
    useAppSelector,
} from "@/providers/reduxjs-provider/hooks";
import { setStoriesMaxWidth } from "@/providers/reduxjs-provider/slices/instagram";
import { useEffect, useRef, useState } from "react";

function Client() {
    const divRef = useRef<HTMLDivElement | null>(null);

    const dispatch = useAppDispatch();

    useEffect(() => {
        const updateWidth = () => {
            if (divRef.current) {
                dispatch(
                    setStoriesMaxWidth(
                        divRef.current.getBoundingClientRect().width,
                    ),
                );
            }
        };

        updateWidth();
        window.addEventListener("resize", updateWidth);

        return () => window.removeEventListener("resize", updateWidth);
    }, []);

    return <div ref={divRef} className="absolute bg-primary w-full"></div>;
}

export default Client;
