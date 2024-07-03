"use client";

import { useResources } from "../../hooks/useResources";
import { CloudinaryResourceType, ResourceType } from "../../types";
import Media from "./Components/Media";
import Skeleton from "./Components/Skeleton";

function Gallery({
    resources: initialResources,
}: {
    resources: CloudinaryResourceType[];
}) {
    const { resources, isLoading, isError } = useResources({
        initialResources,
        tag: "hotel",
    });

    if (isLoading) {
        return <Skeleton />;
    } else if (isError) {
        return <div>Error</div>;
    }

    return (
        <section className="grid gap-[2vw] grid-cols-[repeat(auto-fill,minmax(320px,1fr))]">
            {resources?.map((resource, index) => {
                return (
                    <Media
                        key={resource.asset_id}
                        resource={resource}
                        index={index}
                    />
                );
            })}
        </section>
    );
}

export default Gallery;
