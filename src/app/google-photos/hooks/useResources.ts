import { useQuery, useQueryClient } from "@tanstack/react-query";
import { CloudinaryResourceType, OptionsType, ResourceType } from "../types";
import axios from "axios";
import { CloudinaryUploadWidgetInfo } from "next-cloudinary";

export const useResources = (options?: OptionsType) => {
    const queryClient = useQueryClient();

    const {
        data: resources,
        isLoading,
        isError,
    } = useQuery({
        queryKey: ["resources", options?.tag],
        queryFn: async (): Promise<CloudinaryResourceType[] | undefined> => {
            const { data } = await axios("/google-photos/api/resources");

            return data.data;
        },
        enabled: !options?.disableFetch,
        initialData: options?.initialResources,
    });

    const addResources = async (
        resultsArray: Array<CloudinaryUploadWidgetInfo>,
    ) => {
        queryClient.setQueryData(
            [
                "resources",
                String(process.env.NEXT_PUBLIC_CLOUDINARY_LIBRARY_TAG),
            ],
            (old: CloudinaryResourceType[]) => {
                return [...resultsArray, ...old];
            },
        );
        await queryClient.invalidateQueries({
            queryKey: [
                "resources",
                String(process.env.NEXT_PUBLIC_CLOUDINARY_LIBRARY_TAG),
            ],
        });
    };

    return { resources, isLoading, isError, addResources };
};
