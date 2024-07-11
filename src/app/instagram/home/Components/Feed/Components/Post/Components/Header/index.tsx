import Image from "next/image";
import Link from "next/link";

export type OwnerOfPostType = {
    id: string;
    username: string;
    avatar: string | null;
    cover: string | null;
    name: string | null;
    surname: string | null;
    description: string | null;
    city: string | null;
    school: string | null;
    work: string | null;
    website: string | null;
    createdAt: Date;
    updatedAt: Date;
};

function Header({ ownerOfPost }: { ownerOfPost: OwnerOfPostType }) {
    const { username, name, surname, avatar } = ownerOfPost!;

    const ownerName = name && surname ? `${name} ${surname}` : username;

    return (
        <div className="flex justify-start items-center gap-[1vw]">
            <Link
                href={`/instagram/home/profile/${username}`}
                className="relative w-[2vw] aspect-square min-w-[39px] rounded-full overflow-hidden border-[1px] border-base-content"
            >
                <Image
                    src={avatar || "instagram/no_avatar.webp"}
                    fill
                    alt={`avatar of ${username}`}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
            </Link>
            <p className=" font-bold text-xl capitalize">{ownerName}</p>
            <button type="button" className="ml-auto">
                ...
            </button>
        </div>
    );
}

export default Header;
