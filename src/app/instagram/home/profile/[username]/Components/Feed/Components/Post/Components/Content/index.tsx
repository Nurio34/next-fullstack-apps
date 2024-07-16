import { PostType } from "@/app/instagram/home/Components/Feed";
import Image from "next/image";

function Content({ post }: { post: PostType }) {
    return (
        <div>
            {post?.img && (
                <figure className=" relative aspect-video">
                    <Image
                        src={post?.img}
                        fill
                        alt={`image of post`}
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="object-contain"
                    />
                </figure>
            )}
            <p>{post.decsription}</p>
        </div>
    );
}

export default Content;
