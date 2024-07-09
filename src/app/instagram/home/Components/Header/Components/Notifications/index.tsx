import Link from "next/link";
import { FaUserFriends } from "react-icons/fa";
import { IoNotifications } from "react-icons/io5";
import { MdMessage } from "react-icons/md";
import User from "./Components/User";

function Notifications() {
    return (
        <div className=" flex gap-[1vw] items-center">
            <Link href={"#"}>
                <FaUserFriends size={24} />
            </Link>
            <Link href={"#"}>
                <MdMessage size={24} />
            </Link>
            <Link href={"#"}>
                <IoNotifications size={24} />
            </Link>
            <User />
        </div>
    );
}

export default Notifications;
