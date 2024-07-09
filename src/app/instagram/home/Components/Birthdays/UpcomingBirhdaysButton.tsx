import { FaGift } from "react-icons/fa";

function UpcomingBirhdaysButton() {
    const mockUpcomingBirthdays = ["ojwoğepf", "pfe", "pweo"];

    return (
        <button
            className="grid grid-cols-[auto,1fr] gap-[1vw] items-center
             w-full py-[0.5vh] px-[1vw] bg-primary text-primary-content rounded-md
             transition-colors hover:bg-secondary hover:text-secondary-content
        "
        >
            <FaGift />
            <span className="block space-y-[0.25vh] text-start">
                <span className="block font-semibold">Upcoming Bithdays</span>
                <span className="block">
                    See other {mockUpcomingBirthdays.length} upcoming birthdays{" "}
                </span>
            </span>
        </button>
    );
}

export default UpcomingBirhdaysButton;
