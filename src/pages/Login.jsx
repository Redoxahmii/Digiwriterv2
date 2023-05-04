/* eslint-disable react/no-unescaped-entities */
import { signInWithEmailAndPassword } from 'firebase/auth'
import { useState } from 'react'
import { Fade } from 'react-awesome-reveal'
import { Link, useNavigate } from 'react-router-dom'
import { auth } from '../utills/firebase'

const Login = () => {
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
        console.log(email, password)

        try {
            const res = await signInWithEmailAndPassword(auth, email, password);
            if (res.user.emailVerified) {
                setsubmitButtonDisabled(false);
                navigate('/');
                console.log(email, password)

            } else {
                setsubmitButtonDisabled(false);
                seterrorMsg("Please verify your email before logging in.");
                console.log(email, password)

            }
        } catch (err) {
            setsubmitButtonDisabled(false);
            seterrorMsg("Error: " + err.message);
            console.log(email, password)

        }
    };
    return (
        <div className='flex justify-center font-poppins items-center bg-base-200 w-[100vw] h-[100vh] relative'>
            <div className='bg-primary rounded-xl w-full max-w-md flex flex-col justify-center items-center h-full max-h-[25rem] absolute'>
                <Fade duration={1500}>
                    <h1 className='text-2xl text-center pb-8 text-primary-content font-bold'>Welcome back!</h1>
                    <p className='font-semibold py-2 text-primary-content'> Email: </p>
                    <input value={email} onChange={(e) => { setEmail(e.target.value) }} type="email" placeholder="Enter your email address" className="input text-center input-secondary rounded-md input-bordered w-full max-w-xs" />
                    <p className='font-semibold py-2 text-primary-content'> Password: </p>
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Enter your password" className="input input-secondary text-center rounded-md input-bordered w-full max-w-xs" />
                    <button disabled={submitButtonDisabled} onClick={handleLogin} className='rounded-xl mt-6 px-8 py-2 btn btn-block '> Login</button>
                    <div>
                        <p className='text-error'>{errorMsg}</p>
                    </div>
                    <p className='pt-4 text-center text-primary-content'>Don't have an Account? <Link className='text-base-content' to='/signup'>Register</Link></p>
                </Fade>
            </div>
        </div>
    )
}

export default Login