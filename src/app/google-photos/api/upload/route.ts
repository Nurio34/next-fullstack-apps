import { v2 as cloudinary } from "cloudinary";

cloudinary.config({
    cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
    api_key: process.env.NEXT_PUBLIC_CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
});

export async function POST(req: Request) {
    try {
        const { url, public_id } = await req.json();

        const uploadOptions: Record<string, string | boolean> = {};

        // if (typeof public_id === "string") {
        //     uploadOptions.public_id = public_id;
        //     // uploadOptions.invalidate = true;
        // }

        const result = await cloudinary.uploader.upload(url, { public_id });

        return Response.json({
            data: result,
        });
    } catch (error) {
        console.log("Error in 'upload route'", error);
        throw new Error("Error");
    }
}
