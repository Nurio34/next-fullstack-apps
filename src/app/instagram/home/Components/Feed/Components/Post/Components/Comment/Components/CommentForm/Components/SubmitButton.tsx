"use client";

import { useEffect, useRef } from "react";
import { useFormStatus } from "react-dom";

function SubmitButton() {
    const { pending, action } = useFormStatus();
    console.log(pending);
    const ResetBtn = useRef<HTMLButtonElement | null>(null);

    useEffect(() => {
        if (ResetBtn.current && !pending) {
            ResetBtn.current.click();
        }
    }, [pending]);

    return (
        <>
            <button type="submit" className="btn btn-sm btn-primary">
                {pending ? "Sending..." : "Send"}
            </button>
            <button ref={ResetBtn} type="reset"></button>
        </>
    );
}

export default SubmitButton;
