import SaveButton from "./SaveButton";
import CloseTabButton from "./CloseTabButton";
import { CloudinaryResourceType } from "@/app/google-photos/types";

function TabbActionButtons({ resource }: { resource: CloudinaryResourceType }) {
    return (
        <div className="grid gap-y-[1vh]">
            <SaveButton resource={resource} />
            <CloseTabButton />
        </div>
    );
}

export default TabbActionButtons;
