import ActionButtons from "./Components/ActionButtons";

function FollowRequests() {
    const mockRequests = ["brendan elch", "gloria pittman", "wayne burton"];

    return (
        <div className=" space-y-[1vh] py-[1vh] px-[1vw] rounded-md shadow-sm bg-base-200 shadow-base-content">
            <h2
                className=" font-semibold text-lg"
                style={{ fontVariant: "small-caps" }}
            >
                Friend Requests
            </h2>
            <ul className=" space-y-[1vh]">
                {mockRequests.map((request, ind) => {
                    return (
                        <li
                            key={ind}
                            className="grid grid-cols-[1fr,4fr,2fr] gap-[1vw] items-center"
                        >
                            <figure className="relative aspect-square rounded-full border-[1px] border-base-content"></figure>
                            <p className=" capitalize font-bold">{request}</p>
                            <ActionButtons />
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}

export default FollowRequests;
