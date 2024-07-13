import { useAppSelector } from "@/providers/reduxjs-provider/hooks";
import "./index.css";

function Client() {
    const { mainHeight } = useAppSelector((s) => s.components);

    const signals = 5;
    const signal_arrival_time = 20;

    return (
        <main
            className="Animations_Earth_Main flex justify-center items-center overflow-hidden"
            style={{ minHeight: mainHeight }}
        >
            <figure
                className=" Animations_Earth_Figure relative w-[20vw] aspect-square rounded-full "
                style={
                    {
                        "--total_signals": signals,
                        "--signal_arrival_time": signal_arrival_time,
                    } as React.CSSProperties
                }
            >
                {Array(signals)
                    .fill(null)
                    .map((signal, index) => {
                        return (
                            <span
                                className="Animations_Earth_Span block absolute top-0 left-0 w-full h-full rounded-full"
                                style={
                                    {
                                        "--index": index,
                                    } as React.CSSProperties
                                }
                            ></span>
                        );
                    })}
            </figure>
        </main>
    );
}

export default Client;
