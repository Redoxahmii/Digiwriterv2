
const Article = () => {
    return (
        <>
            <div className="w-[90vw] h-[90vh] bg-base-200">
                <div className="w-full h-full flex flex-wrap mx-20 gap-96">
                    <div className="mt-10">
                        <div className="form-control w-full max-w-xs gap-2">
                            <label className="label">
                                <span className="label-text font-semibold">Topic</span>
                            </label>
                            <input type="text" placeholder="Topic" className="input input-primary  input-bordered w-full max-w-xs" />
                            <label className="label">
                                <span className="label-text font-semibold">Tone of Voice</span>
                            </label>
                            <select className="select select-bordered select-primary text-gray-400 w-full max-w-xs">
                                <option>Informative</option>
                                <option>Entertaining</option>
                            </select>
                            <label className="label">
                                <span className="label-text font-semibold">Keywords(optional)</span>
                            </label>
                            <input type="text" placeholder="Keywords" className="input input-primary input-bordered w-full max-w-xs" />
                            <label className="label">
                                <span className="label-text font-semibold">Length</span>
                            </label>
                            <select className="select select-bordered select-primary text-gray-400 w-full max-w-xs">
                                <option>Short</option>
                                <option>Medium</option>
                                <option>Large</option>
                            </select>
                        </div>
                    </div>
                    <div className="mt-10">
                        <label className="label">
                            <span className="label-text font-semibold"> AI Response </span>
                        </label>
                        <textarea name="AI Response" className="resize-none textarea textarea-primary" cols="25" rows="15"></textarea>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Article