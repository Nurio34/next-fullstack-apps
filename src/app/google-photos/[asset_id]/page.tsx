import { v2 as cloudinary } from "cloudinary";
import ClientPage from "./ClientPage";

cloudinary.config({
    cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME!,
    api_key: process.env.NEXT_PUBLIC_CLOUDINARY_API_KEY!,
    api_secret: process.env.CLOUDINARY_API_SECRET!,
});

async function SingleMediaPage({ params }: { params: { asset_id: string } }) {
    const { resources } = await cloudinary.api.resources_by_asset_ids(
        params.asset_id,
    );
    const resource = resources[0];

    const mainMaxHeight = 1020;
    return (
        <section
            className="relative"
            style={{ minHeight: `${mainMaxHeight}px` }}
        >
            <ClientPage resource={resource} />
        </section>
    );
}

export default SingleMediaPage;
