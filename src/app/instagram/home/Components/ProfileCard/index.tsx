import prisma from "@/lib/prisma-mongo-db";
import { auth } from "@clerk/nextjs/server";
import Image from "next/image";
import no_avatar from "@/../public/instagram/no_avatar.webp";
import Link from "next/link";

async function ProfileCard() {
    const { userId } = auth();

    try {
        const getUserInfo = await prisma.user.findFirst({
            where: {
                id: userId!,
            },
            select: {
                avatar: true,
                cover: true,
                username: true,
                name: true,
                surname: true,
                followers: true,
            },
        });

        console.log({ cover: getUserInfo?.cover });

        return (
            <div className=" bg-base-200 py-[1vh] px-[1vw] grid justify-items-center gap-[0.5vh] rounded-md shadow-sm shadow-base-content">
                <div
                    className=" w-full aspect-video relative mb-[3vh] rounded-md"
                    style={{
                        backgroundImage: `${
                            getUserInfo?.cover
                                ? getUserInfo.cover
                                : "url(/instagram/no_cover.webp)"
                        }`,
                        backgroundSize: "cover",
                        backgroundRepeat: "no-repeat",
                    }}
                >
                    <figure
                        className="w-16 aspect-square rounded-full overflow-hidden
                        absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2
                    "
                    >
                        <Image
                            src={
                                getUserInfo?.avatar
                                    ? getUserInfo.avatar
                                    : no_avatar
                            }
                            fill
                            alt="avatar"
                        />
                    </figure>
                </div>
                <p className=" capitalize">
                    {getUserInfo?.name && getUserInfo?.surname
                        ? `${getUserInfo.name} ${getUserInfo.surname}`
                        : getUserInfo?.username}
                </p>
                <div>{getUserInfo?.followers.length} Followers</div>
                <Link
                    href={"#"}
                    className="btn btn-primary btn-sm text-center justify-self-stretch font-bold text-lg"
                    style={{ fontVariant: "small-caps" }}
                >
                    Profile
                </Link>
            </div>
        );
    } catch (error) {}
}

export default ProfileCard;
