import Logo from "./Components/Logo";
import Navigation from "./Components/Navigation";
import Notifications from "./Components/Notifications";

function Header() {
    return (
        <header className="flex justify-between items-center bg-base-200 py-[2vh] px-[2vw] rounded-md shadow-md shadow-base-content">
            <Logo />
            <Navigation />
            <Notifications />
        </header>
    );
}

export default Header;
