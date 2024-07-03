function SaveButton() {
    return (
        <div className="flex gap-[2vw]">
            <button className="btn btn-success text-success-content grow">
                SaveButton
            </button>
            <select
                name="save"
                id="save"
                className="bg-success rounded-md min-w-12"
            ></select>
        </div>
    );
}

export default SaveButton;
