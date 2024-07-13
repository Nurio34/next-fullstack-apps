import { useAppSelector } from "@/providers/reduxjs-provider/hooks";
import Link from "next/link";

function Client() {
    const { headerHeight, mainHeight } = useAppSelector((s) => s.components);

    const animations = [
        "heroes",
        "scroll",
        "cubes",
        "loading",
        "follow",
        "earth",
    ];

    return (
        <main style={{ minHeight: mainHeight }}>
            <header className="py-[1vh] px-[1vw]">
                <ul className="flex gap-[1vw] capitalize">
                    {animations.map((animation) => {
                        return (
                            <li key={animation}>
                                <Link href={`/animations/${animation}`}>
                                    {animation}
                                </Link>
                            </li>
                        );
                    })}
                    <li></li>
                </ul>
            </header>
        </main>
    );
}

export default Client;
