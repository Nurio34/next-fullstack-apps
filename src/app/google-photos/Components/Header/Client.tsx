import Logo from "./Components/Logo";
import ButtonsComponent from "./Components/ButtonsComponent";
import "./index.css";
import { useAppSelector } from "@/providers/reduxjs-provider/hooks";

function HeaderClient() {
    return (
        <header
            id="Google_Photos_Header"
            className=" flex items-end justify-between mx-[8vw]  pt-[2vh] mb-[2vw] pb-[1vh]"
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

export default HeaderClient;
