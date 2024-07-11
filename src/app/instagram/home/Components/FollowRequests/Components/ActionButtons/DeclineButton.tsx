import toast from "react-hot-toast";
import { FaRegCircleXmark } from "react-icons/fa6";
import { ActionButtonType } from ".";
function DeclineButton({
    requestId,
    setRequests,
}: Omit<ActionButtonType, "senderId">) {
    const declineRequest = async () => {
        try {
            const res = await fetch("/instagram/api/decline-request", {
                method: "POST",
                body: JSON.stringify(requestId),
            });

            if (!res.ok) {
                console.log(
                    "Error while 'declineRequest' in '/instagram/home/Components/FollowRequests/Components/ActionButtons/DeclineButton.tsx'",
                );
                throw new Error(
                    "Error while 'declineRequest' in '/instagram/home/Components/FollowRequests/Components/ActionButtons/DeclineButton.tsx'",
                );
            }

            const data = await res.json();

            toast.success(data);
            setRequests((pre) =>
                pre.filter((request) => request.id !== requestId),
            );
        } catch (error) {
            console.log(
                "Unexpected error while 'declineRequest' in '/instagram/home/Components/FollowRequests/Components/ActionButtons/DeclineButton.tsx'",
            );
            throw new Error(
                "Unexpected error while 'declineRequest' in '/instagram/home/Components/FollowRequests/Components/ActionButtons/DeclineButton.tsx'",
            );
        }
    };

    return (
        <button>
            <FaRegCircleXmark
                size={24}
                className=" text-error"
                onClick={declineRequest}
            />
        </button>
    );
}

export default DeclineButton;
