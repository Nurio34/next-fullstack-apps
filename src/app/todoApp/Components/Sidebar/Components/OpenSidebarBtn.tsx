import { useGlobalContext } from "@/app/todoApp/Provider";
import { AnimatePresence, motion } from "framer-motion";

function OpenSidebarBtn() {
    const { setIsMenuOpen, isMenuOpen } = useGlobalContext();

    return (
        <AnimatePresence>
            {!isMenuOpen && (
                <motion.button
                    className="grid bg-primary text-primary-content font-semibold rounded-md py-[1vh] px-[1vw]  
                            absolute right-0 translate-x-full top-1/2 -translate-y-1/2
                            lg:hidden
                    "
                    initial={{
                        x: "-100%",
                        opacity: 0,
                    }}
                    animate={{
                        x: "100%",
                        opacity: 1,
                    }}
                    exit={{
                        opacity: 0,
                    }}
                    onClick={() => setIsMenuOpen((pre) => !pre)}
                >
                    <span className="  ">M</span>
                    <span>E</span>
                    <span>N</span>
                    <span>U</span>
                </motion.button>
            )}
        </AnimatePresence>
    );
}

export default OpenSidebarBtn;
