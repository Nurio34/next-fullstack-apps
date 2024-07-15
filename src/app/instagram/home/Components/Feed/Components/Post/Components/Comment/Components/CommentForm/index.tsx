import { commentToPost } from "@/app/instagram/action/comment";
import prisma from "@/lib/prisma-mongo-db";
import { auth } from "@clerk/nextjs/server";
import Image from "next/image";
import { redirect } from "next/navigation";
import SubmitButton from "./Components/SubmitButton";

async function CommentForm({ postId }: { postId: string }) {
    const { userId } = auth();

    if (!userId) {
        console.log(
            "Error while getting 'userId' in '/instagram/home/feed/post/comment/commentform'",
        );
        throw new Error(
            "Error while getting 'userId' in '/instagram/home/feed/post/comment/commentform'",
        );
    }

    const currentUserInfo = await prisma.user.findUnique({
        where: { id: userId },
        select: { avatar: true, username: true },
    });

    if (!currentUserInfo) {
        console.log(
            "Error while getting 'currentUserInfo' in '/instagram/home/feed/post/comment/commentform'",
        );
        throw new Error(
            "Error while getting 'currentUserInfo' in '/instagram/home/feed/post/comment/commentform'",
        );
    }

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
            <form action={commentToPost} className="grow relative">
                <input type="hidden" name="userId" value={userId} />
                <input type="hidden" name="postId" value={postId} />
                <label htmlFor="comment">
                    <textarea
                        rows={3}
                        name="comment"
                        id="comment"
                        placeholder="Leave your comment ..."
                        className=" textarea textarea-bordered w-full"
                    ></textarea>
                </label>
                <div className=" absolute top-1/2 right-[1vw] -translate-y-1/2 grid gap-y-[1vh]">
                    <button type="submit">🙂</button>
                    <SubmitButton />
                </div>
            </form>
        </div>
    );
}

export default CommentForm;
