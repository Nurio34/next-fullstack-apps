import { RiShareForwardLine } from "react-icons/ri";

function Share() {
    return (
        <div className="flex justify-center items-center gap-[1vw] bg-base-100 text-base py-[0.5vh] px-[1vw] rounded-sm ">
            <button type="button">
                <RiShareForwardLine className=" text-info" />
            </button>
            <span>|</span>
            <span className=" inline-block">2 Shares</span>
        </div>
    );
}

export default Share;
