import Logo from "./Components/Logo";
import ButtonsComponent from "./Components/ButtonsComponent";
import "./index.css";

function Header() {
    return (
        <header
            id="Google_Photos_Header"
            className=" flex items-end justify-between mx-[8vw]  my-[2vh] pb-[1vh]"
            style={
                {
                    "--color": " oklch(0.748 0.26 342.55)",
                } as React.CSSProperties
            }
        >
            <Logo />
            <ButtonsComponent />
        </header>
    );
}

export default Header;
