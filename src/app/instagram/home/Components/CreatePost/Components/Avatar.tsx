import Image from "next/image";
import React from "react";
import no_avatar from "@/../public/instagram/no_avatar.webp";

function Avatar({ avatar }: { avatar: string | null | undefined }) {
    return (
        <figure className=" relative w-[3vw] justify-self-center aspect-square border-[1px] border-base-content rounded-full overflow-hidden">
            <Image
                src={avatar || no_avatar}
                fill
                alt="avatar"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
        </figure>
    );
}

export default Avatar;
