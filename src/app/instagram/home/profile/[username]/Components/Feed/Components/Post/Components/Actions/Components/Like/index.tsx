import { AiOutlineLike } from "react-icons/ai";
function Like() {
    return (
        <div className="flex justify-center items-center gap-[1vw] bg-base-100 text-base py-[0.5vh] px-[1vw] rounded-sm ">
            <button type="button">
                <AiOutlineLike className=" text-info" />
            </button>
            <span>|</span>
            <span className=" inline-block">2 likes</span>
        </div>
    );
}

export default Like;
