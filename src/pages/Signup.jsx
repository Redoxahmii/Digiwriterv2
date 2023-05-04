import { createUserWithEmailAndPassword, sendEmailVerification, updateProfile } from "firebase/auth";
import { Fade } from "react-awesome-reveal"
import { Link, useNavigate } from "react-router-dom"
import { auth } from "../utills/firebase";
import { useState } from "react";
const Signup = () => {
    const navigate = useNavigate();
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [errorMsg, seterrorMsg] = useState("");
    const [submitButtonDisabled, setsubmitButtonDisabled] = useState(false);
    const handleSubmission = () => {
        if (!name || !email || !password) {
            seterrorMsg("Fill All Fields");
            return;
        }
        setsubmitButtonDisabled(true);
        seterrorMsg("");
        createUserWithEmailAndPassword(auth, email, password).then(async (res) => {
            setsubmitButtonDisabled(false);
            const user = res.user;
            await sendEmailVerification(res.user);
            await updateProfile(user, {
                displayName: name,
            });
            setTimeout(() => {
                navigate('/')
            }, 3000);
            seterrorMsg("Verification Email Sent");
        }).catch((err) => {
            setsubmitButtonDisabled(false);
            seterrorMsg("Error: " + err.message);
        })
    }
    return (
        <div className='flex justify-center font-poppins items-center bg-base-200 w-[100vw] h-[100vh] relative'>
            <div className='bg-primary rounded-xl w-full max-w-md flex flex-col justify-center items-center h-full max-h-[32rem] absolute'>
                <Fade duration={1500}>
                    <h1 className='text-2xl text-center pb-8 text-primary-content font-bold'>Signup for an Account.</h1>
                    <p className='font-semibold py-2 text-primary-content'> Name: </p>
                    <input type="text" onChange={(e) => setName(e.target.value)} value={name} placeholder="Enter your username" className="input text-center input-secondary rounded-md input-bordered w-full max-w-xs" />
                    <p className='font-semibold py-2 text-primary-content'> Email: </p>
                    <input type="email" onChange={(e) => setEmail(e.target.value)} value={email} placeholder="Enter your email address" className="input text-center input-secondary rounded-md input-bordered w-full max-w-xs" />
                    <p className='font-semibold py-2 text-primary-content'> Password: </p>
                    <input type="password" onChange={(e) => setPassword(e.target.value)} value={password} placeholder="Enter your password" className="input input-secondary text-center rounded-md input-bordered w-full max-w-xs" />
                    <button onClick={handleSubmission} disabled={submitButtonDisabled} className='rounded-xl btn btn-block mt-6 px-8 py-2'>Sign up</button>
                    <div>
                        <b className="text-error">{errorMsg}</b>
                    </div>
                    <p className='pt-5 text-center'>Have an account? <Link className='text-primary-content' to='/login'>Login</Link></p>
                </Fade>
            </div>
        </div>
    )
}

export default Signup