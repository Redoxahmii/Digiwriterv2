import { useState } from "react"
import { RiseLoader } from "react-spinners"
import Openai from "../../utills/Openai"
const InstagramCaption = () => {
    const [Product, setProduct] = useState('')
    const [aiResponse, setAiResponse] = useState('')
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState('')
    const [temperature, setTemperature] = useState(0.5);
    const handleComplete = (response) => {
        if (response && response.data && response.data.choices && response.data.choices.length > 0) {
            setAiResponse(response.data.choices[0].text);
            setLoading(false)
            setError('');
        } else {
            setLoading(false);
            setError('Something went wrong. Please try again later.');
        }
    }
    const handleCopy = () => {
        navigator.clipboard.writeText(aiResponse);
    }
    const handleSubmit = () => {
        if (!Product) {
            setError('Post Desciption is required');
            return;
        }
        setLoading(true)
        setAiResponse('')
        const prompt = `"Write a caption for an Instagram post using ${Product} as the Context for what the post is"`
        const temperatureString = temperature.toFixed(2);
        const max_tokens = '250'
        const top_p = '1'
        Openai({ prompt, onComplete: handleComplete, temperature: temperatureString, max_tokens, top_p })();
    }
    return (
        <>
            <div className="w-[90vw] h-[90vh] bg-base-200">
                <div className="w-full h-full flex flex-wrap ml-28 mx-10 gap-[24rem]">
                    <div className="mt-36">
                        <div className="form-control w-full max-w-xs gap-2">
                            <label className="label">
                                <span className="label-text font-semibold">Post Description</span>
                            </label>
                            <input type="text" placeholder="ie. Beachside photo with my Lover" value={Product} onChange={(e) => setProduct(e.target.value)} className="input input-primary input-bordered w-full max-w-xs" />
                            <label className="label">
                                <span className="label-text font-semibold">Creativity</span>
                            </label>
                            <input type="range" min="0" max="100" value={temperature * 100} className="range range-primary" step="1" onChange={(e) => setTemperature(e.target.value / 100)} />
                            <div className="w-full flex justify-between text-xs px-2">
                                <span>Mild</span>
                                <span>Moderate</span>
                                <span>Spicy</span>
                                <span>Fiery</span>
                                <span>Inferno</span>
                            </div>
                            <button onClick={handleSubmit} className="btn btn-primary mt-6 rounded-xl">Submit</button>
                            {error && <p className='text-error'>{error}</p>}
                        </div>
                    </div>
                    <div className="">
                        <label className="label">
                            <span className="label-text font-semibold font"> AI Response</span>
                        </label>
                        <div className="mockup-phone border-primary relative" id="mockup-window">
                            <div className="camera"></div>
                            <div className="display">
                                <div className="pt-11 bg-base-100">
                                    <div className="w-full h-[30px] bg-base-200 rounded-md">
                                        <div className="flex gap-24">
                                            <p className="font-instagram tracking-widest text-2xl pl-1">Instagram</p>
                                            <div className="flex gap-2 pt-1">
                                                <label className="swap ">
                                                    <input type="checkbox" onClick={() => { }} />
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 swap-on h-6">
                                                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                                                    </svg>
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="red" className="w-6 h-6 swap-off">
                                                        <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
                                                    </svg>
                                                </label>
                                                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 256 256"><path fill="currentColor" d="M181.66 106.34a8 8 0 0 1 0 11.32l-32 32a8 8 0 0 1-11.32 0L112 123.31l-26.34 26.35a8 8 0 0 1-11.32-11.32l32-32a8 8 0 0 1 11.32 0L144 132.69l26.34-26.35a8 8 0 0 1 11.32 0ZM232 128a104 104 0 0 1-152.88 91.82l-34.05 11.35a16 16 0 0 1-20.24-20.24l11.35-34.05A104 104 0 1 1 232 128Zm-16 0a88 88 0 1 0-164.19 44.06a8 8 0 0 1 .66 6.54L40 216l37.4-12.48a8 8 0 0 1 6.54.67A88 88 0 0 0 216 128Z" /></svg>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="artboard artboard-demo w-full md:w-[240px] h-[400px]">
                                    {loading ? (
                                        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                                            <RiseLoader color='white' loading={loading} size={15} />
                                            <p className='text-2xl pt-5 animate-pulse'>Loading...</p>
                                        </div>
                                    ) : null}
                                    <div className="flex justify-center bg-base-200 h-full">
                                        <textarea name="AI Response" className="resize-none textarea w-full h-full box-border" cols="25" rows="12" readOnly value={aiResponse}></textarea>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex justify-end h-15">
                            <div className="tooltip tooltip-right" data-tip='Copy' >
                                <button onClick={handleCopy} className="btn btn-circle">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z" />
                                    </svg></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default InstagramCaption