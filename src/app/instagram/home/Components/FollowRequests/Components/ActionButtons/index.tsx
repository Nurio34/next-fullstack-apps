import { Dispatch, SetStateAction } from "react";
import AcceptButton from "./AcceptButton";
import DeclineButton from "./DeclineButton";
import { RequestType } from "../../Provided";

export type ActionButtonType = {
    requestId: string;
    setRequests: Dispatch<SetStateAction<RequestType[]>>;
    senderId: string;
};

function ActionButtons({ requestId, setRequests, senderId }: ActionButtonType) {
    return (
        <div className=" space-x-[1vw]">
            <AcceptButton
                requestId={requestId}
                setRequests={setRequests}
                senderId={senderId}
            />
            <DeclineButton requestId={requestId} setRequests={setRequests} />
        </div>
    );
}

export default ActionButtons;
