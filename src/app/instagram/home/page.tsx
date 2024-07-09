import Stories from "./Components/Stories";
import CreatePost from "./Components/CreatePost";
function Home() {
    return (
        <section className=" space-y-[1vh]">
            <Stories />
            <CreatePost />
        </section>
    );
}

export default Home;
