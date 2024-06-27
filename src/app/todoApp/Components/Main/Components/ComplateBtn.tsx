function ComplateBtn({ isComplated }: { isComplated: boolean }) {
    return (
        <button type="button" className="btn btn-sm btn-secondary">
            {isComplated ? "Incomplate" : "Complate"}
        </button>
    );
}

export default ComplateBtn;
