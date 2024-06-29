"use client";

function SubmitBtn({ isSubmitting }: { isSubmitting: boolean }) {
    return (
        <button
            className="btn btn-secondary"
            type="submit"
            disabled={isSubmitting}
        >
            {isSubmitting ? (
                <div className="flex items-center gap-[1vw]">
                    <span className="loading loading-spinner"></span>
                    Updating ...
                </div>
            ) : (
                "Edit Task"
            )}
        </button>
    );
}

export default SubmitBtn;
