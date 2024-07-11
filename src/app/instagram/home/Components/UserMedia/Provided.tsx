import { useAppSelector } from "@/providers/reduxjs-provider/hooks";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

type ImagesType = {
    img: string;
};

function Provided() {
    const path = usePathname();

    const isPathIncludesProfile = path.includes("profile");

    const { userId } = useAppSelector((s) => s.instagram);

    const [images, setImages] = useState<ImagesType[]>([] as ImagesType[]);

    useEffect(() => {
        if (userId) {
            const getUserPostImages = async () => {
                const res = await fetch("/instagram/api/post-images", {
                    method: "POST",
                    body: JSON.stringify(userId),
                });
                const data = await res.json();
                setImages(data);
            };
            getUserPostImages();
        }
    }, [userId]);

    return (
        <>
            {isPathIncludesProfile && images.length > 0 && (
                <div className=" bg-base-200 py-[1vh] px-[1vw] rounded-md shadow-sm shadow-base-content space-y-[1vh]">
                    <span className="flex justify-between">
                        <h2>User Media</h2>
                        <Link
                            href={"#"}
                            className=" text-blue-400 underline underline-offset-2"
                        >
                            See All
                        </Link>
                    </span>
                    <ul className=" grid grid-cols-4 gap-x-[1vw] gap-y-[1vh]">
                        {images?.map((image, ind) => {
                            return (
                                <li key={ind}>
                                    <figure className="relative w-full aspect-square rounded-full border-[1px] border-base-content overflow-hidden">
                                        <Image
                                            src={image.img}
                                            fill
                                            alt="image"
                                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                        />
                                    </figure>
                                </li>
                            );
                        })}
                    </ul>
                </div>
            )}
        </>
    );
}

export default Provided;
