import Image from "next/image";
import React from "react";
import no_avatar from "@/../public/instagram/no_avatar.webp";

function Avatar({ avatar }: { avatar: string | null | undefined }) {
    return (
        <figure className=" relative w-[3vw] justify-self-center aspect-square border-[1px] border-base-content rounded-full">
            <Image src={avatar || no_avatar} fill alt="avatar" />
        </figure>
    );
}

export default Avatar;
