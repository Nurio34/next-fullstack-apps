import { useAppSelector } from "@/providers/reduxjs-provider/hooks";
import Link from "next/link";

function Client() {
    const { headerHeight, mainHeight } = useAppSelector((s) => s.components);
    console.log(headerHeight, mainHeight);

    return (
        <main style={{ minHeight: mainHeight }}>
            <header>
                <ul>
                    <li>
                        <Link href={"/animations/1"}>Animation1</Link>
                    </li>
                </ul>
            </header>
        </main>
    );
}

export default Client;
