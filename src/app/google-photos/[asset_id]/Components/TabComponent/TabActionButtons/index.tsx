import SaveButton from "./SaveButton";
import CloseTabButton from "./CloseTabButton";

function TabbActionButtons({ src }: { src: string }) {
    return (
        <div className="grid gap-y-[1vh]">
            <SaveButton src={src} />
            <CloseTabButton />
        </div>
    );
}

export default TabbActionButtons;
