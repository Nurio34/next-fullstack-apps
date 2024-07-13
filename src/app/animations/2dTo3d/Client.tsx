import { useAppSelector } from "@/providers/reduxjs-provider/hooks";
import "./index.css";

function Client() {
    const { mainHeight } = useAppSelector((s) => s.components);

    const spans = 40;

    return (
        <main
            style={{ minHeight: mainHeight }}
            className="Animations_2dTo3d_Main"
        >
            <div
                className="Animations_2dTo3d_Div min-w-8 w-[25vw] aspect-[1.27]
            "
            >
                {Array(spans)
                    .fill(null)
                    .map((span, ind) => {
                        return (
                            <span
                                className="block absolute  Animations_2dTo3d_Span w-full h-full"
                                key={ind}
                                style={{ "--ind": ind } as React.CSSProperties}
                            ></span>
                        );
                    })}
            </div>
        </main>
    );
}

export default Client;
