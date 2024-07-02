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

export type OptionsType = {
    initialResources?: Array<ResourceType>;
    disableFetch?: boolean;
    tag?: string;
};

export type ActionButtonType = {
    id: string;
    icon: React.JSX.Element;
    color: string;
};
