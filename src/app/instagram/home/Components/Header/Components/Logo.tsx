import Link from "next/link";

function Logo() {
    return (
        <Link
            href={"/instagram/home"}
            className=" font-bold text-3xl tracking-wider
                flex bg-gradient-to-r from-yellow-400 via-pink-400 to-purple-600 bg-clip-text text-transparent
            "
            style={{ fontVariant: "small-caps" }}
        >
            Instagram
        </Link>
    );
}

export default Logo;
