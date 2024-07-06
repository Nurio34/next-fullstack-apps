import { useAppSelector } from "@/providers/reduxjs-provider/hooks";
import { useEffect, useState } from "react";
import Char from "./Components/Char";

function Client() {
    const word = [
        "s",
        "c",
        "r",
        "o",
        "o",
        "l",
        " ",
        "t",
        "o",
        " ",
        "s",
        "e",
        "e",
        " ",
        "t",
        "o",
        " ",
        "m",
        "a",
        "g",
        "i",
        "c",
    ];

    const { mainHeight, headerHeight } = useAppSelector((s) => s.components);
    const [scrollTop, setScrollTop] = useState<number>(0);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            setScrollTop(window.document.documentElement.scrollTop);
        });
    }, []);

    return (
        <main
            className=" relative"
            style={{ minHeight: `${mainHeight + word.length * 100}px` }}
        >
            <section
                className={` fixed top-[${96}px] left-0 w-full`}
                style={{ height: `${mainHeight}px` }}
            >
                {word.map((ch, ind) => {
                    return (
                        <Char
                            key={ind}
                            ch={ch}
                            ind={ind}
                            scrollTop={scrollTop}
                            length={word.length}
                        />
                    );
                })}
            </section>
        </main>
    );
}

export default Client;
