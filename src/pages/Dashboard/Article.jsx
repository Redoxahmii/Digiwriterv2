import { useState } from 'react';
import Openai from "../../utills/Openai"
import { RiseLoader } from 'react-spinners';

const Article = () => {

    const [topic, setTopic] = useState('');
    const [tone, setTone] = useState('Informative');
    const [keywords, setKeywords] = useState('');
    const [length, setLength] = useState('Short');
    const [aiResponse, setAiResponse] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const handleTopicChange = (event) => {
        setTopic(event.target.value);
    }

    const handleToneChange = (event) => {
        setTone(event.target.value);
    }

    const handleKeywordsChange = (event) => {
        setKeywords(event.target.value);
    }

    const handleLengthChange = (event) => {
        setLength(event.target.value);
    }

    const handleComplete = (response) => {
        if (response && response.data && response.data.choices && response.data.choices.length > 0) {
            setAiResponse(response.data.choices[0].text);
            setLoading(false);
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
        if (!topic) {
            setError('Topic is required');
            return;
        }
        setAiResponse('');
        setLoading(true);
        const prompt = `"Write an article about ${topic} that is ${length.toLowerCase()} in length and has a ${tone.toLowerCase()} tone. Incorporate the keywords ${keywords} into your writing to make it more effective. Use headings to structure your article and make it easy to read. Your article should provide an introduction to ${topic}, explain its importance, explore its key aspects, and discuss how it affects our daily lives. In the introduction, provide some background information about ${topic} and explain why it is important to discuss it. In the section on the importance of ${topic}, discuss why it matters and how it impacts our lives. In the section on key aspects, explore the different facets of ${topic} and provide examples to illustrate your points. In the section on how ${topic} affects our daily lives, discuss the practical implications of ${topic} and how it impacts our behavior, decisions, and well-being. In the conclusion, summarize your main points and emphasize the significance of ${topic} in today's world. Use a call-to-action to encourage readers to take action or learn more about ${topic}."`
        const temperature = '0.4'
        const max_tokens = '2500'

        Openai({ prompt, onComplete: handleComplete, temperature, max_tokens })();
    }

    return (
        <>
            <div className="hero min-h-[80vh]">
                <div className="hero-content flex-col-reverse lg:flex-row-reverse lg:gap-96">
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
                    <div className="mt-10">
                        <div className="form-control w-full max-w-xs gap-2">
                            <label className="label">
                                <span className="label-text font-semibold">Topic</span>
                            </label>
                            <input type="text" placeholder="Topic" className="input input-primary  input-bordered w-full max-w-xs" value={topic} onChange={handleTopicChange} />
                            {error && <p className='text-error'>{error}</p>}
                            <label className="label">
                                <span className="label-text font-semibold">Tone of Voice</span>
                            </label>
                            <select className="select select-bordered select-primary text-gray-400 w-full max-w-xs" value={tone} onChange={handleToneChange}>
                                <option value="Informative">Informative</option>
                                <option value="Persuasive">Persuasive</option>
                                <option value="Entertaining">Entertaining</option>
                                <option value="Descriptive">Descriptive</option>
                                <option value="Convincing">Convincing</option>
                                <option value="Passionate">Passionate</option>
                            </select>
                            <label className="label">
                                <span className="label-text font-semibold">Keywords(optional)</span>
                            </label>
                            <input type="text" placeholder="Keywords" className="input input-primary input-bordered w-full max-w-xs" value={keywords} onChange={handleKeywordsChange} />
                            <label className="label">
                                <span className="label-text font-semibold">Length</span>
                            </label>
                            <select className="select select-bordered select-primary text-gray-400 w-full max-w-xs" value={length} onChange={handleLengthChange}>
                                <option value="Short">Short</option>
                                <option value="Medium">Medium</option>
                                <option value="Long">Long</option>
                            </select>
                            <button className="btn btn-primary mt-5 rounded-xl" onClick={handleSubmit}> Submit</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Article