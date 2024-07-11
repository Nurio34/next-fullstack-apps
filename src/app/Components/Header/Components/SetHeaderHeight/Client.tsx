import { useAppDispatch } from "@/providers/reduxjs-provider/hooks";
import {
    setHeaderHeight,
    setMainHeight,
} from "@/providers/reduxjs-provider/slices/components";
import React, { useEffect } from "react";

function Client() {
    const dispatch = useAppDispatch();

    useEffect(() => {
        const setComponents = () => {
            const header = document.querySelector("header");
            const headerHeight = header?.getBoundingClientRect().height;
            if (headerHeight) {
                dispatch(setHeaderHeight(headerHeight));
                const screenHeight = window.innerHeight;
                const mainHeight = screenHeight - headerHeight;
                dispatch(setMainHeight(mainHeight));
            }
        };

        setComponents();
        window.addEventListener("resize", setComponents);
        return () => window.removeEventListener("resize", setComponents);
    }, [dispatch]);

    return <span className="sr-only">Client</span>;
}

export default Client;
