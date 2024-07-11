import Stories from "./Components/Stories";
import CreatePost from "./Components/CreatePost";
import Feed from "./Components/Feed";
import prisma from "@/lib/prisma-mongo-db";

async function Home() {
    const posts = await prisma.post.findMany();

    return (
        <section className=" space-y-[2vh]">
            <Stories />
            <CreatePost />
            <Feed posts={posts} />
        </section>
    );
}

export default Home;
