import phones from "@/../public/instagram/home-phones.png";
import sign from "@/../public/instagram/sign.png";
import screenshot1 from "@/../public/instagram/screenshot1.png";
import screenshot2 from "@/../public/instagram/screenshot2.png";
import screenshot3 from "@/../public/instagram/screenshot3.png";
import screenshot4 from "@/../public/instagram/screenshot4.png";
import { useAppSelector } from "@/providers/reduxjs-provider/hooks";
import { SignIn } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

function Client() {
    const { mainHeight } = useAppSelector((s) => s.components);

    const Images = useRef([screenshot1, screenshot2, screenshot3, screenshot4]);

    const [currentImage, setCurrentImage] = useState(0);
    const [isImageContainerMounted, setIsImageContainerMounted] =
        useState(false);

    useEffect(() => {
        let time: NodeJS.Timeout = setTimeout(() => {
            setCurrentImage((pre) => {
                if (pre === Images.current.length - 1) {
                    return 0;
                } else {
                    return pre + 1;
                }
            });
            setIsImageContainerMounted(false);
        }, 5000);

        return () => clearInterval(time);
    });

    useEffect(() => {
        if (!isImageContainerMounted) {
            setIsImageContainerMounted(true);
        }
    }, [isImageContainerMounted]);

    return (
        <main
            className=" grid grid-cols-2 justify-items-center items-center "
            style={{ minHeight: mainHeight }}
        >
            <figure className=" min-w-[465px] min-h-[635px] relative justify-self-end">
                <Image src={phones} fill alt="phones" />
                <AnimatePresence mode="sync">
                    {isImageContainerMounted && (
                        <motion.div
                            key={`image${currentImage}`}
                            className="absolute top-[27px] right-[59px] w-[250px] h-[541px]"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 1 }}
                        >
                            <Image
                                src={Images.current[currentImage]}
                                fill
                                alt={`screenshot${currentImage}`}
                            />
                        </motion.div>
                    )}
                </AnimatePresence>
            </figure>
            <Link
                href={"/instagram/home"}
                className=" min-w-[401px] min-h-[459px] relative justify-self-start"
            >
                <Image src={sign} fill alt="phones" />
            </Link>
        </main>
    );
}

export default Client;
