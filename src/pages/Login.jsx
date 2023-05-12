/* eslint-disable react/no-unescaped-entities */
import { signInWithEmailAndPassword } from 'firebase/auth'
import { useContext, useState } from 'react'
import { Fade } from 'react-awesome-reveal'
import { Link, useNavigate } from 'react-router-dom'
import { auth } from '../utills/firebase'
import { AuthContext } from '../utills/AuthContext'

const Login = () => {
    const { logout } = useContext(AuthContext)
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errorMsg, seterrorMsg] = useState("");
    const [submitButtonDisabled, setsubmitButtonDisabled] = useState(false);

    const handleLogin = async (e) => {
        if (!email || !password) {
            seterrorMsg("Fill All Fields");
            return;
        }
        e.preventDefault();
        setsubmitButtonDisabled(true);
        seterrorMsg("");
        try {
            const res = await signInWithEmailAndPassword(auth, email, password);
            if (!res.user.emailVerified) {
                logout();
                setsubmitButtonDisabled(false);
                seterrorMsg("Please verify your email before logging in.");
                return;
            }
            setsubmitButtonDisabled(false);
            navigate('/dashboard/welcome');
        } catch (err) {
            setsubmitButtonDisabled(false);
            seterrorMsg("Error: " + err.message);
        }
    };
    return (
        <div className='flex justify-center items-center bg-base-200 w-[100vw] h-[100vh] relative sm:pt-0 '>
            <div className='bg-primary rounded-xl w-full max-w-md flex flex-col justify-center items-center h-full max-h-[26rem] absolute'>
                <Fade duration={1500}>
                    <h1 className='text-2xl text-center pb-3 text-primary-content font-bold'>Welcome back!</h1>
                    <p className='font-semibold py-2 text-primary-content'> Email: </p>
                    <input value={email} onChange={(e) => { setEmail(e.target.value) }} type="email" placeholder="Enter your email address" className="input text-center input-secondary rounded-md input-bordered w-full max-w-xs" />
                    <p className='font-semibold py-2 text-primary-content'> Password: </p>
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Enter your password" className="input input-secondary text-center rounded-md input-bordered w-full max-w-xs" />
                    <label className='label'>
                        <button disabled={submitButtonDisabled} onClick={handleLogin} className='rounded-xl mt-6 px-8 py-2 btn btn-block gap-2 '>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9" />
                            </svg>

                            Login</button>
                    </label>
                    <div>
                        <p className='text-error'>{errorMsg}</p>
                    </div>
                    <p className='pt-4 text-center text-primary-content'>Don't have an Account? <Link className='text-base-content' to='/signup'>Register</Link></p>
                </Fade>
            </div>
        </div >
    )
}

export default Login