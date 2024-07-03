import SaveButton from "./SaveButton";
import CloseTabButton from "./CloseTabButton";

function TabbActionButtons() {
    return (
        <div className="grid gap-y-[1vh]">
            <SaveButton />
            <CloseTabButton />
        </div>
    );
}

export default TabbActionButtons;
