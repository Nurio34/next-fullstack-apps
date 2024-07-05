import { useAppSelector } from "@/providers/reduxjs-provider/hooks";
import "./index.css";
import React, { useEffect, useState } from "react";
import Galery from "./Components/Galery";
import Header from "./Components/Header";

function Client() {
    const { mainHeight } = useAppSelector((s) => s.components);

    const [isRotating, setIsRotating] = useState<boolean>(true);

    return (
        <main
            className="flex justify-center items-center relative"
            style={{ minHeight: mainHeight }}
        >
            <Header isRotating={isRotating} setIsRotating={setIsRotating} />
            <Galery isRotating={isRotating} setIsRotating={setIsRotating} />
        </main>
    );
}

export default Client;
