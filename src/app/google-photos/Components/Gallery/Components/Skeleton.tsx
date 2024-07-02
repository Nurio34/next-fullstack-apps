import React from "react";

function Skeleton() {
    const array = Array(8).fill(null);

    return (
        <ul className="grid gap-[2vw] grid-cols-[repeat(auto-fill,minmax(320px,1fr))]">
            {array.map((item, index) => {
                return (
                    <li
                        key={index}
                        className="aspect-square animate-pulse bg-gray-300"
                    ></li>
                );
            })}
        </ul>
    );
}

export default Skeleton;
