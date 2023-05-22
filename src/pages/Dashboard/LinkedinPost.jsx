import { RiseLoader } from "react-spinners"
import Openai from "../../utills/Openai"
import { useState } from "react"
import me from '../../../public/me.jpg'
const LinkedinPost = () => {
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
    const prompt = `"Here's what I expect from you for writing text: 'You must use emojis in each paragraph. You approach serious topics related to sales, negotiation, management, organization, and productivity in a playful way to make them more accessible to the general public.
    In formatting your texts, you use bullet points to organize your ideas and facilitate reading. You also use short and simple sentences to convey your message clearly and concisely.
    Overall, your tone is optimistic and encouraging, with a touch of humor.
    You consistently use a question at the end of your text to engage your audience and elicit their reaction. You consistently encourage interaction by inviting your audience to comment and share their own experiences.'
    Now, I would like you to write a LinkedIn post in my style on the following
    topic: ${Product}.
    Write the post in English"`
    const temperatureString = temperature.toFixed(2);
    const max_tokens = '700'
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
                <span className="label-text font-semibold">Linkedin Post Generator</span>
              </label>
              <textarea name="AI Response" placeholder="Describe what your post is about..." className="border border-primary textarea w-full h-20 resize-none" cols="40" rows="1" onChange={(e) => setProduct(e.target.value)}></textarea>
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
                  <div className="w-full h-[30px] bg-base-200 rounded-md ">
                    <div className="justify-between flex">
                      <div className="avatar online">
                        <div className="w-7 rounded-full ring-2 ring-primary">
                          <img src={me} />
                        </div>
                      </div>
                      <div className="form-control flex-row gap-1">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 mt-1" viewBox="0 0 24 24"><path fill="currentColor" d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5A6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5S14 7.01 14 9.5S11.99 14 9.5 14z" /></svg>
                        <input type="text" placeholder="Search" className="input mt-1 input-bordered w-40 h-5" />
                      </div>
                      {/* <label className="swap">
                        <input type="checkbox" />
                        <svg className="swap-off" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="#4C9EE5" d="M22.46 6c-.77.35-1.6.58-2.46.69c.88-.53 1.56-1.37 1.88-2.38c-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29c0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15c0 1.49.75 2.81 1.91 3.56c-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07a4.28 4.28 0 0 0 4 2.98a8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21C16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56c.84-.6 1.56-1.36 2.14-2.23Z" /></svg>
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 swap-on" viewBox="0 0 256 256"><path fill="currentColor" d="M247.39 68.94A8 8 0 0 0 240 64h-30.43a48.66 48.66 0 0 0-41.47-24a46.91 46.91 0 0 0-33.75 13.7A47.9 47.9 0 0 0 120 88v6.09C79.74 83.47 46.81 50.72 46.46 50.37a8 8 0 0 0-13.65 4.92c-4.31 47.79 9.57 79.77 22 98.18a110.93 110.93 0 0 0 21.88 24.2c-15.23 17.53-39.21 26.74-39.47 26.84a8 8 0 0 0-3.85 11.93c.75 1.12 3.75 5.05 11.08 8.72C53.51 229.7 65.48 232 80 232c70.67 0 129.72-54.42 135.75-124.44l29.91-29.9a8 8 0 0 0 1.73-8.72Zm-45 29.41a8 8 0 0 0-2.32 5.14C196 166.58 143.28 216 80 216c-10.56 0-18-1.4-23.22-3.08c11.51-6.25 27.56-17 37.88-32.48A8 8 0 0 0 92 169.08c-.47-.27-43.91-26.34-44-96c16 13 45.25 33.17 78.67 38.79A8 8 0 0 0 136 104V88a32 32 0 0 1 9.6-22.92A30.94 30.94 0 0 1 167.9 56c12.66.16 24.49 7.88 29.44 19.21a8 8 0 0 0 7.33 4.79h16Z" /></svg>

                      </label> */}
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" className="mt-1" viewBox="0 0 1024 1024"><path fill="currentColor" d="M464 512a48 48 0 1 0 96 0a48 48 0 1 0-96 0zm200 0a48 48 0 1 0 96 0a48 48 0 1 0-96 0zm-400 0a48 48 0 1 0 96 0a48 48 0 1 0-96 0zm661.2-173.6c-22.6-53.7-55-101.9-96.3-143.3a444.35 444.35 0 0 0-143.3-96.3C630.6 75.7 572.2 64 512 64h-2c-60.6.3-119.3 12.3-174.5 35.9a445.35 445.35 0 0 0-142 96.5c-40.9 41.3-73 89.3-95.2 142.8c-23 55.4-34.6 114.3-34.3 174.9A449.4 449.4 0 0 0 112 714v152a46 46 0 0 0 46 46h152.1A449.4 449.4 0 0 0 510 960h2.1c59.9 0 118-11.6 172.7-34.3a444.48 444.48 0 0 0 142.8-95.2c41.3-40.9 73.8-88.7 96.5-142c23.6-55.2 35.6-113.9 35.9-174.5c.3-60.9-11.5-120-34.8-175.6zm-151.1 438C704 845.8 611 884 512 884h-1.7c-60.3-.3-120.2-15.3-173.1-43.5l-8.4-4.5H188V695.2l-4.5-8.4C155.3 633.9 140.3 574 140 513.7c-.4-99.7 37.7-193.3 107.6-263.8c69.8-70.5 163.1-109.5 262.8-109.9h1.7c50 0 98.5 9.7 144.2 28.9c44.6 18.7 84.6 45.6 119 80c34.3 34.3 61.3 74.4 80 119c19.4 46.2 29.1 95.2 28.9 145.8c-.6 99.6-39.7 192.9-110.1 262.7z" /></svg>
                    </div>
                  </div>
                </div>
                <div className="artboard artboard-demo w-[240px] h-[400px]">
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
      </div >
    </>
  )
}

export default LinkedinPost