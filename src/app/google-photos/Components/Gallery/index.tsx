import { ResourceType } from "../../types";
import Header from "../Header/index";
import Media from "./Components/Media";

function Gallery({ resources }: { resources: ResourceType[] }) {
    return (
        <main>
            <Header />
            <section className="grid gap-[2vw] grid-cols-[repeat(auto-fill,minmax(320px,1fr))]">
                {resources.map((resource, index) => {
                    return (
                        <Media
                            key={resource.asset_id}
                            resource={resource}
                            index={index}
                        />
                    );
                })}
            </section>
        </main>
    );
}

export default Gallery;
