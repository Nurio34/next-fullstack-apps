import Image from "next/image";
import { OwnerOfPost } from "../..";

function Header({ ownerOfPost }: { ownerOfPost: OwnerOfPost }) {
    if (!ownerOfPost) return;

    const { username, name, surname, avatar } = ownerOfPost;

    const ownerName = name && surname ? `${name} ${surname}` : username;

    return (
        <div className="flex justify-start items-center gap-[1vw]">
            <figure className="relative w-[2vw] aspect-square min-w-[39px] rounded-full overflow-hidden border-[1px] border-base-content">
                <Image
                    src={avatar || "/instagram/no_avatar.webp"}
                    fill
                    alt={`avatar of ${username}`}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
            </figure>
            <p className=" font-bold text-xl capitalize">{ownerName}</p>
            <button type="button" className="ml-auto">
                ...
            </button>
        </div>
    );
}

export default Header;
