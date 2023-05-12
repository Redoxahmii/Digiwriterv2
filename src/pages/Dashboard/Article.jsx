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
            console.log(response)
        } else {
            setLoading(false);
            setError('Something went wrong. Please try again later.');
        }
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
            <div className="w-[90vw] h-[90vh] bg-base-200">
                <div className="w-full h-full flex flex-wrap ml-28 mx-10 gap-96">
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
                            <button className="btn btn-primary mt-2 rounded-xl" onClick={handleSubmit}> Submit</button>
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
                                <textarea name="AI Response" className="resize-none textarea w-full h-full p-4 box-border" cols="25" rows="12" value={aiResponse} readOnly></textarea>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Article