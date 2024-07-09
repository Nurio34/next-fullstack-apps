import CelebrateButton from "./CelebrateButton";
import UpcomingBirhdaysButton from "./UpcomingBirhdaysButton";

function Birthdays() {
    const mockUpcomingBirthdays = ["Fannie Bridges", "Nicol Avengalion"];

    return (
        <div className=" bg-base-200 space-y-[1vh] rounded-md shadow-md shadow-base-content py-[1vh] px-[1vw]">
            <h2>Birthdays</h2>
            <ul className=" space-y-[1vh]">
                {mockUpcomingBirthdays.map((birthday, ind) => {
                    return (
                        <li
                            key={ind}
                            className="grid grid-cols-[1fr,4fr,2fr] gap-[1vw] items-center"
                        >
                            <figure className="relative aspect-square rounded-full border-[1px] border-base-content"></figure>
                            <p>{birthday}</p>
                            <CelebrateButton />
                        </li>
                    );
                })}
            </ul>
            <UpcomingBirhdaysButton />
        </div>
    );
}

export default Birthdays;
