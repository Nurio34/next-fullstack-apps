import Link from "next/link";
import { CiSettings, CiSignpostDuo1, CiViewList } from "react-icons/ci";
import { FaNewspaper, FaRegFileVideo } from "react-icons/fa";
import { LuActivity } from "react-icons/lu";
import { MdOutlinePhotoAlbum } from "react-icons/md";
import { SiCoinmarketcap, SiCoursera } from "react-icons/si";
import { SiEventstore } from "react-icons/si";

function Menu() {
    const menu = [
        {
            id: "my-posts",
            label: "my posts",
            icon: <CiSignpostDuo1 size={20} />,
        },
        {
            id: "activity",
            label: "activity",
            icon: <LuActivity size={20} />,
        },
        {
            id: "marketplace",
            label: "marketplace",
            icon: <SiCoinmarketcap size={20} />,
        },
        {
            id: "events",
            label: "events",
            icon: <SiEventstore size={20} />,
        },
        {
            id: "albums",
            label: "albums",
            icon: <MdOutlinePhotoAlbum size={20} />,
        },
        {
            id: "videos",
            label: "videos",
            icon: <FaRegFileVideo size={20} />,
        },
        {
            id: "news",
            label: "news",
            icon: <FaNewspaper size={20} />,
        },
        {
            id: "courses",
            label: "courses",
            icon: <SiCoursera size={20} />,
        },
        {
            id: "lists",
            label: "lists",
            icon: <CiViewList size={20} />,
        },
        {
            id: "settings",
            label: "settings",
            icon: <CiSettings size={20} />,
        },
    ];

    return (
        <ul className=" bg-base-200 shadow-sm shadow-base-content py-[1vh] px-[1vw] rounded-md space-y-[1vh]">
            {menu.map((item) => {
                return (
                    <li
                        key={item.id}
                        className=" capitalize transition-all hover:text-primary hover:scale-110 hover:translate-x-2"
                    >
                        <Link
                            href={`/${item.id}`}
                            className=" flex gap-[0.5vw] items-center"
                        >
                            {item.icon}
                            {item.label}
                        </Link>
                    </li>
                );
            })}
        </ul>
    );
}

export default Menu;
