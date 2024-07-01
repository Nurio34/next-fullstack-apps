import { v2 as cloudinary } from "cloudinary";
import Gallery from "./Components/Gallery";
import { ResourceType } from "./types";

cloudinary.config({
    cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME!,
    api_key: process.env.NEXT_PUBLIC_CLOUDINARY_API_KEY!,
    api_secret: process.env.CLOUDINARY_API_SECRET!,
});

async function GooglePhotos() {
    const { resources }: { resources: ResourceType[] } =
        await cloudinary.api.resources();

    return (
        <div>
            <Gallery resources={resources} />
        </div>
    );
}

export default GooglePhotos;
