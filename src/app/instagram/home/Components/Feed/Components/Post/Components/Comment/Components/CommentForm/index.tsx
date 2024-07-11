import prisma from "@/lib/prisma-mongo-db";
import { auth } from "@clerk/nextjs/server";
import Image from "next/image";
import { redirect } from "next/navigation";

async function CommentForm() {
    const { userId } = auth();

    if (!userId) redirect("/instagram");

    const currentUserInfo = await prisma.user.findUnique({
        where: { id: userId },
        select: { avatar: true, username: true },
    });

    if (!currentUserInfo) redirect("/instagram");

    const { avatar, username } = currentUserInfo;

    return (
        <div className="flex items-start gap-[1vw]">
            <figure className="relative w-[1vw] aspect-square min-w-[17,19px] rounded-full overflow-hidden border-[1px] border-base-content">
                <Image
                    src={avatar || "/instagram/no_avatar.webp"}
                    fill
                    alt={`avatar of ${username}`}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
            </figure>
            <form action="sendComment" className="grow relative">
                <label htmlFor="comment">
                    <textarea
                        name="comment"
                        id="comment"
                        placeholder="Leave your comment ..."
                        className=" textarea textarea-bordered w-full"
                    ></textarea>
                </label>
                <button
                    type="button"
                    className=" absolute top-1/2 right-[1vw] -translate-y-1/2"
                >
                    🙂
                </button>
            </form>
        </div>
    );
}

export default CommentForm;
