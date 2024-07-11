import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { ActionButtonType } from ".";
import toast from "react-hot-toast";

function AcceptButton({ requestId, setRequests, senderId }: ActionButtonType) {
    const accepRequest = async () => {
        try {
            const res = await fetch("/instagram/api/accept-request", {
                method: "POST",
                body: JSON.stringify({ requestId, senderId }),
            });

            if (!res.ok) {
                console.log(
                    "Error while 'accepRequest' in '/instagram/home/Components/FollowRequests/Components/ActionButtons/DeclineButton.tsx'",
                );
                throw new Error(
                    "Error while 'accepRequest' in '/instagram/home/Components/FollowRequests/Components/ActionButtons/DeclineButton.tsx'",
                );
            }

            const data = await res.json();

            toast.success(data);
            setRequests((pre) =>
                pre.filter((request) => request.id !== requestId),
            );
        } catch (error) {
            console.log(
                "Unexpected error while 'accepRequest' in '/instagram/home/Components/FollowRequests/Components/ActionButtons/DeclineButton.tsx'",
            );
            throw new Error(
                "Unexpected error while 'accepRequest' in '/instagram/home/Components/FollowRequests/Components/ActionButtons/DeclineButton.tsx'",
            );
        }
    };

    return (
        <button>
            <IoMdCheckmarkCircleOutline
                size={24}
                className=" text-success"
                onClick={accepRequest}
            />
        </button>
    );
}

export default AcceptButton;
