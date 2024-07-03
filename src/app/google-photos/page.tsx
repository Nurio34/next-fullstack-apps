import { v2 as cloudinary } from "cloudinary";
import Gallery from "./Components/Gallery";
import { ResourceType } from "./types";
import Header from "./Components/Header";
import ImagesSlide from "./Components/ImagesSlide/page";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import Client from "./Client";

cloudinary.config({
    cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME!,
    api_key: process.env.NEXT_PUBLIC_CLOUDINARY_API_KEY!,
    api_secret: process.env.CLOUDINARY_API_SECRET!,
});

async function GooglePhotos() {
    const { resources }: { resources: ResourceType[] } =
        await cloudinary.api.resources_by_tag("hotel");

    return (
        <main>
            {/* <ImagesSlide resources={resources} /> */}
            <Client resources={resources} />
        </main>
    );
}

export default GooglePhotos;
