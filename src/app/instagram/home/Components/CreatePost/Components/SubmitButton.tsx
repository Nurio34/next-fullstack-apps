import React from "react";
import { useFormStatus } from "react-dom";

function SubmitButton() {
    const { pending } = useFormStatus();

    return (
        <button
            type="submit"
            className="btn btn-sm btn-primary text-primary-content"
            disabled={pending}
        >
            {pending ? "Sending..." : "Send"}
        </button>
    );
}

export default SubmitButton;
