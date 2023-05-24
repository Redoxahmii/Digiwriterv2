import { useState } from "react"
import Openai from "../../utills/Openai"
import { RiseLoader } from "react-spinners"
const Summarizer = () => {
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
            setError('Product is required');
            return;
        }
        setLoading(true)
        setAiResponse('')
        const prompt = `"Summarize this content: ${Product}"`
        const temperatureString = temperature.toFixed(2);
        const max_tokens = '250'
        const top_p = '1'
        Openai({ prompt, onComplete: handleComplete, temperature: temperatureString, max_tokens, top_p })();
    }
    return (
        <>
            <div className="hero min-h-[80vh]">
                <div className="hero-content flex-col lg:flex-row lg:gap-96">
                    <div className="">
                        <div className="form-control w-full max-w-xs gap-2">
                            <label className="label">
                                <span className="label-text font-semibold">Summarizer</span>
                            </label>
                            <textarea name="AI Response" placeholder="Paste content here..." className="border select-all border-primary textarea w-full h-full" cols="40" rows="1" onChange={(e) => setProduct(e.target.value)}></textarea>
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
                            <span className="label-text font-semibold"> AI Response</span>
                        </label>
                        <div className="mockup-window border bg-primary relative" id="mockup-window">
                            {loading ? (
                                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                                    <RiseLoader color='white' loading={loading} size={15} />
                                    <p className='text-2xl pt-5 animate-pulse'>Loading...</p>
                                </div>
                            ) : null}
                            <div className="flex justify-center bg-base-200 h-full">
                                <textarea name="AI Response" className="resize-none textarea w-full h-full p-4 box-border" cols="25" rows="12" readOnly value={aiResponse}></textarea>
                            </div>
                        </div>
                        <div className="flex justify-end h-15">
                            <div className="tooltip tooltip-bottom" data-tip='Copy' >
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

export default Summarizer