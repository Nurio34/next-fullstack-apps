import Comment from "./Components/Comment";
import Like from "./Components/Like";
import Share from "./Components/Share";

function Actions() {
    return (
        <div className="flex items-center justify-start gap-[4vw]">
            <Like />
            <Comment />
            <Share />
        </div>
    );
}

export default Actions;
