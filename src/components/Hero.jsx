import { lazy } from "react";
import { Fade } from "react-awesome-reveal";
import { useNavigate } from "react-router-dom";
import Footer from "./Footer";
const Spline = lazy(() => import('@splinetool/react-spline'));
const Hero = () => {
    const navigate = useNavigate();
    return (
        <div >
            <div className="hero min-h-screen bg-base-200 font-poppins">
                <div className="hero-content flex-col lg:flex-row-reverse ">
                    <Fade direction="left" duration={1000} delay={3000} triggerOnce >
                        <div className=" ">

                            <Spline scene='https://prod.spline.design/c40-agQ8miWxMpPP/scene.splinecode' className=" lg:ml-40 max-w-sm" />
                        </div>
                    </Fade>
                    <div>
                        <Fade triggerOnce
                            direction="right"
                            duration={1200}
                            delay={500}
                        >
                            <h1 className="text-6xl font-bold">Welcome to <span className="bg-gradient-to-r from-secondary-focus to-primary text-transparent bg-clip-text">Digiwriter</span></h1>
                        </Fade>
                        <Fade cascade triggerOnce className="py-6 text-2xl" duration={180} >
                            Writing articles have never been easier.
                        </Fade> <br />
                        <Fade delay={3000} triggerOnce>
                            <button className="btn text-lg btn-outline gap-2 rounded-xl" onClick={() => { navigate('login') }}>
                                Get Started
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 4.5l7.5 7.5-7.5 7.5m-6-15l7.5 7.5-7.5 7.5" />
                                </svg>


                            </button>
                        </Fade>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Hero