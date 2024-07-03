import { CldImageProps } from "next-cloudinary";

export type ResourceType = {
    asset_id: string;
    public_id: string;
    format: string;
    version: number;
    resource_type: string;
    type: string;
    created_at: string;
    bytes: number;
    width: number;
    height: number;
    asset_folder: string;
    display_name: string;
    url: string;
    secure_url: string;
};

export type CloudinaryResourceType = {
    public_id: string;
    format: string;
    version: number;
    resource_type: string;
    type: string;
    placeholder: boolean;
    created_at: string;
    bytes: number;
    width: number;
    height: number;
    backup: boolean;
    access_mode: string;
    url: string;
    secure_url: string;
    tags: Array<string>;
    context: object;
    next_cursor: string;
    derived_next_cursor: string;
    exif: object;
    image_metadata: object;
    media_metadata: object;
    faces: number[][];
    quality_analysis: number;
    colors: [string, number][];
    derived: Array<string>;
    moderation: object;
    phash: string;
    predominant: object;
    coordinates: object;
    access_control: Array<string>;
    pages: number;

    [futureKey: string]: any;
};

export type OptionsType = {
    initialResources?: Array<CloudinaryResourceType>;
    disableFetch?: boolean;
    tag?: string;
};

export type ActionButtonType = {
    id: ActiveTabType;
    icon: React.JSX.Element;
    color: string;
};

export type ActiveTabType = "edit" | "info" | "delete" | "none";

export type EditTabIdType = "enhance" | "crop" | "filter";

export type EditTabType = {
    id: EditTabIdType;
    icon: JSX.Element;
    tab: JSX.Element;
};

export type EnhancementType =
    | "none"
    | "improve"
    | "restore"
    | "remove-background";

export type EnhanceButtonType = {
    id: EnhancementType;
    icon: JSX.Element;
    label: string;
};

export type TransformationsType = Omit<CldImageProps, "src" | "alt">;
