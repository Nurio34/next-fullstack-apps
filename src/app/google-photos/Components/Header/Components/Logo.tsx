import { CloudinaryIcon } from "@/lib/icons";
import Link from "next/link";

function Logo() {
    return (
        <Link
            href="/google-photos"
            className=" grid place-content-center min-h-[30px]"
        >
            <CloudinaryIcon />
        </Link>
    );
}

export default Logo;
