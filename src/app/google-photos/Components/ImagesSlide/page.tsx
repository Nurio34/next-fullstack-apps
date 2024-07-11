import React from "react";
import { ResourceType } from "../../types";
import Image from "next/image";
import "./index.css";

function ImagesSlide({ resources }: { resources: any }) {
    const delayParam = 1.5;

    return (
        <section
            className={`relative min-h-8  mx-auto overflow-hidden`}
            style={{
                width: `${resources.length * 32}px`,
            }}
        >
            {resources.map((resource: any, index: number) => {
                return (
                    <figure
                        key={resource.asset_id}
                        id="Google_Photos_Slide_Image"
                        className=" relative w-8 aspect-square"
                        style={
                            {
                                "--delay": `${index}s`,
                                "--road": `${resources.length - index}px`,
                                "--startingPoint": `${index + 1}px`,
                            } as React.CSSProperties
                        }
                    >
                        <Image
                            src={resource.secure_url}
                            alt={resource.display_name}
                            fill
                        />
                    </figure>
                );
            })}
        </section>
    );
}

export default ImagesSlide;
