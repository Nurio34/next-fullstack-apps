function ImportantBtn({
    isImportant,
    id,
}: {
    isImportant: boolean;
    id: string;
}) {
    return (
        <button
            type="button"
            className={`btn btn-sm btn-accent
            ${isImportant ? "btn-secondary" : "btn-info"}
        `}
        >
            {isImportant ? "Important" : "Unimportant"}
        </button>
    );
}

export default ImportantBtn;
