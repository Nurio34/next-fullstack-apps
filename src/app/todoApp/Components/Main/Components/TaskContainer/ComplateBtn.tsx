function ComplateBtn({ isComplated }: { isComplated: boolean }) {
    return (
        <button
            type="button"
            className={`btn btn-sm
            ${isComplated ? "btn-success" : "btn-info"}
        `}
        >
            {isComplated ? "Incomplate" : "Complate"}
        </button>
    );
}

export default ComplateBtn;
