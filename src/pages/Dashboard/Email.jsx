import { useState } from "react"
import { RiseLoader } from "react-spinners"
import Openai from "../../utills/Openai"
const Email = () => {
    const [loading, setloading] = useState(false)
    const [aiResponse, setAiResponse] = useState('')
    const [error, setError] = useState('')
    const [Subject, setSubject] = useState('')
    const [Recipient, setRecipient] = useState('')
    const [Name, setName] = useState('')
    const [Title, setTitle] = useState('')
    const handleComplete = (response) => {
        if (response && response.data && response.data.choices && response.data.choices.length > 0) {
            setAiResponse(response.data.choices[0].text);
            setloading(false)
            setError('');
            console.log(response)
        } else {
            setloading(false);
            setError('Something went wrong. Please try again later.');
        }
    }
    const handleCopy = () => {
        navigator.clipboard.writeText(aiResponse);
    }
    const handleSubmit = () => {
        if (!Subject) {
            setError('Subject is required');
            return;
        }
        setloading(true)
        setAiResponse('')
        const prompt = `"Imagine that you are a professional email writer and you have been tasked with writing an email on behalf of a business. The subject of the email is ${Subject}, and it is important that the email is written in a professional manner, as it will be used for business conduct. The recipient of the email is ${Recipient}, and you should include their name in the closing of the email when thanking them. Additionally, the email should include a closing salutation that includes the sender's name, which is ${Name}, as well as their title, which is ${Title}. Please ensure that the email is clear, concise, and free of any errors or typos. Thank you for your attention to detail and professionalism in crafting this email."`
        const temperature = '0.7'
        const max_tokens = '2000'
        Openai({ prompt, onComplete: handleComplete, temperature, max_tokens })();
    }
    return (
        <>
            <div className="w-[90vw] h-[90vh] bg-base-200">
                <div className="w-full h-full flex flex-wrap ml-28 mx-10 gap-96">
                    <div className="mt-10">
                        <div className="form-control w-full max-w-xs gap-2">
                            <label className="label">
                                <span className="label-text font-semibold">Subject</span>
                            </label>
                            <input type="text" placeholder="Subject" value={Subject} onChange={(e) => setSubject(e.target.value)} className="input input-primary  input-bordered w-full max-w-xs" />
                            {error && <p className='text-error'>{error}</p>}
                            <label className="label">
                                <span className="label-text font-semibold">Your Name</span>
                            </label>
                            <input type="text" placeholder="Your Name" value={Name} onChange={(e) => setName(e.target.value)} className="input input-primary  input-bordered w-full max-w-xs" />
                            <label className="label">
                                <span className="label-text font-semibold">Your Title</span>
                            </label>
                            <input type="text" placeholder="Your Title" value={Title} onChange={(e) => setTitle(e.target.value)} className="input input-primary  input-bordered w-full max-w-xs" />
                            <label className="label">
                                <span className="label-text font-semibold">Recipient Name</span>
                            </label>
                            <input type="text" placeholder="Recipient Name" value={Recipient} onChange={(e) => setRecipient(e.target.value)} className="input input-primary input-bordered w-full max-w-xs" />
                            <button onClick={handleSubmit} className="btn btn-primary mt-2 rounded-xl">Submit</button>
                        </div>
                    </div>
                    <div className="mt-10">
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

export default Email