import { CiSearch } from "react-icons/ci";

function Search() {
    return (
        <form action={"search"} className=" relative ml-[2vw]">
            <label htmlFor="search">
                <input
                    type="text"
                    name="search"
                    id="search"
                    placeholder="Search..."
                    className=" py-1 px-4"
                />
            </label>
            <button
                type="submit"
                className="absolute top-1/2 right-0 -translate-y-1/2 -translate-x-full
                    transition-all hover:scale-110 hover:text-purple-500
                "
            >
                <CiSearch size={18} />
            </button>
        </form>
    );
}

export default Search;
