function PostForm() {
    return (
        <form
            action="post"
            className="grid grid-cols-[9fr,1fr] gap-[1vw] items-center"
        >
            <label htmlFor="post">
                <textarea
                    name="post"
                    id="post"
                    placeholder="Post..."
                    className="w-full py-1 px-[1vw] rounded-sm"
                    rows={4}
                ></textarea>
            </label>
            <div className="grid gap-y-[1vh]">
                <button type="button" className="btn btn-sm btn-secondary">
                    😄
                </button>
                <button
                    type="submit"
                    className="btn btn-sm btn-primary text-primary-content"
                >
                    Send
                </button>
            </div>
        </form>
    );
}

export default PostForm;
