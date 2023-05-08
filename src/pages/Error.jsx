/* eslint-disable react/no-unescaped-entities */
import { AttentionSeeker, Fade } from "react-awesome-reveal"
import { useNavigate } from "react-router-dom"
const Error = () => {
    const navigate = useNavigate()
    return (
        <div className="h-[90vh] hero bg-base-200 ">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="max-w-sm rounded-lg  shadow-2xl" >
                    <Fade duration={1500}>
                        <div className="mockup-phone border-purple-800">
                            <div className="camera"></div>
                            <div className="display relative">
                                {/* <img className="artboard artboard-demo phone-1 " src="" /> */}
                                {/* <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center flex-col"> */}
                                <div className="artboard artboard-demo phone-1 bg-base-200">

                                    <h1 className=" font-semibold text-2xl text-center"> 404: AI 🤖 not found.</h1>
                                    <p className=" mt-2 text-center text-lg">looks like we need to upgrade our algorithms.</p>
                                </div>
                                {/* </div> */}
                            </div>
                        </div>
                    </Fade>
                </div>
                <div className="flex w-[40vh] mr-96 flex-col">
                    <AttentionSeeker effect="rubberBand">
                        <h1 className="text-5xl font-bold">Uh Oh!</h1>
                    </AttentionSeeker>
                    <h1 className="py-6">Looks like Digiwriter is taking a nap 😴. We'll give it a cup of coffee ☕ and a few lines of code to get it back up and running 🏃</h1>
                    <button onClick={() => navigate('/')} className="btn gap-2 btn-outline rounded-xl">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 15L3 9m0 0l6-6M3 9h12a6 6 0 010 12h-3" />
                        </svg>
                        Go back home</button>
                </div>
            </div>
        </div>
    )
}

export default Error