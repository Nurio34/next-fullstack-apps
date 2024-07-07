import { useAppSelector } from "@/providers/reduxjs-provider/hooks";
import Link from "next/link";

function Client() {
    const { headerHeight, mainHeight } = useAppSelector((s) => s.components);
    console.log(headerHeight, mainHeight);

    return (
        <main style={{ minHeight: mainHeight }}>
            <header>
                <ul className="flex gap-[1vw]">
                    <li>
                        <Link href={"/animations/heroes"}>Heroes</Link>
                    </li>
                    <li>
                        <Link href={"/animations/scroll"}>Scroll</Link>
                    </li>
                    <li>
                        <Link href={"/animations/cubes"}>Cubes</Link>
                    </li>
                    <li>
                        <Link href={"/animations/loading"}>Loading</Link>
                    </li>
                    <li>
                        <Link href={"/animations/follow"}>Follow</Link>
                    </li>
                </ul>
            </header>
        </main>
    );
}

export default Client;
