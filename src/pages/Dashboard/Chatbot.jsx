import { useState } from "react"
import Openai from "../../utills/Openai"

const Chatbot = () => {
    const [conversation, setConversation] = useState([]);
    const [message, setMessage] = useState('');

    const handleSubmit = () => {
        const prompt = `"The following is a conversation with an AI assistant. The assistant is helpful, creative, clever, and very friendly. ${conversation.map(c => c.text).join(' ')} ${message}"`;
        const onComplete = (gptResponse) => {
            console.log(gptResponse)
            const response = gptResponse.data.choices[0].text;
            setConversation([...conversation, { text: message, isUser: true }, { text: response, isUser: false }]);
            setMessage('');
        };
        const temperature = '0.9';
        const max_tokens = '150';
        const presence_penalty = '0.6';
        const frequency_penalty = '0.0';
        const top_p = '1';
        Openai({ prompt, onComplete, temperature, max_tokens, presence_penalty, frequency_penalty, top_p })();
    };

    return (
        <div>

            <div className='mockup-window border bg-base-300 h-[80vh] overflow-y-scroll max-h-[calc(80vh-0rem)]'>
                <div className="bg-base-200 h-[80vh] px-4 relative ">
                    <div className=" overflow-y-scroll max-h-[calc(80vh-3.5rem)]">
                        {conversation.map((c, i) => (
                            <div key={i} className={`chat ${c.isUser ? 'chat-end' : 'chat-start'}`}>
                                <div className="chat-bubble">{c.text}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className="form-control bottom-24 absolute left-[250px]">
                <div className="input-group">
                    <input type="text" placeholder="Type your message..." className="input px-[28.5rem] input-bordered" value={message} onChange={(e) => setMessage(e.target.value)} />
                    <button className="btn btn-square" onClick={handleSubmit}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Chatbot;