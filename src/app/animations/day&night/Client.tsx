import { useAppSelector } from "@/providers/reduxjs-provider/hooks";
import "./index.css";
import { useEffect, useRef, useState } from "react";
import { IoIosSunny } from "react-icons/io";
import { AnimatePresence, motion } from "framer-motion";
import { FaMoon } from "react-icons/fa";

type LiCoordinates = {
    [key: number]: { x: number; y: number };
};

let int: NodeJS.Timeout;

function Client() {
    const { mainHeight } = useAppSelector((s) => s.components);
    const [isNight, setIsNight] = useState<boolean>(false);

    useEffect(() => {
        clearInterval(int);
        int = setInterval(() => {
            setIsNight((pre) => {
                return !pre;
            });
        }, 5000);

        return () => clearInterval(int);
    }, [isNight]);

    return (
        <main
            className="Animations_DayNight_Main flex justify-center items-center overflow-hidden isolate transition-all"
            style={{
                minHeight: mainHeight,
                backgroundImage: isNight
                    ? "url('/night_sky.webp')"
                    : "url('/blue_sky.webp')",
            }}
        >
            <section
                className=" absolute w-full "
                style={{ minHeight: mainHeight }}
            >
                <AnimatePresence mode="wait">
                    {!isNight ? (
                        <motion.div
                            key={"sun"}
                            className="Animations_DayNight_Sun absolute top-[5vh] left-[20vw]"
                            initial={{ y: "50vh" }}
                            animate={{ y: "0" }}
                            exit={{ y: "50vh", opacity: 0 }}
                        >
                            <IoIosSunny size={"15vw"} color="yellow" />
                        </motion.div>
                    ) : (
                        <motion.div
                            key={"moon"}
                            className="Animations_DayNight_Moon absolute top-[5vh] right-[20vw]"
                            initial={{ y: "50vh" }}
                            animate={{ y: "0" }}
                            exit={{ y: "50vh", opacity: 0 }}
                        >
                            <FaMoon size={"10vw"} color="yellow" />
                        </motion.div>
                    )}
                </AnimatePresence>
            </section>
            <section
                className="Animations_DayNight_Section w-full z-10"
                style={{ minHeight: mainHeight }}
                onClick={() => {
                    setIsNight((pre) => {
                        return !pre;
                    });
                }}
            ></section>
        </main>
    );
}

export default Client;
