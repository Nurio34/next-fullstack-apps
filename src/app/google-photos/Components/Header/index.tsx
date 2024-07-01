import CldUploadButtonComponent from "./Components/CldUploadButtonComponent";
import Logo from "./Components/Logo";
import "./index.css";

function index() {
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
            <CldUploadButtonComponent />
        </header>
    );
}

export default index;
