import { useGlobalContext } from "@/app/todoApp/Provider";

function Title() {
    const { filterBy } = useGlobalContext();

    enum Titles {
        all = "all tasks",
        imp = "important tasks",
        comp = "complated tasks",
        now = "do it now",
    }

    return (
        <h2
            className="Title font-bold text-3xl capitalize py-[1vh] relative inline-block"
            style={{ fontVariant: "small-caps" }}
        >
            {Titles[filterBy]}
        </h2>
    );
}

export default Title;
