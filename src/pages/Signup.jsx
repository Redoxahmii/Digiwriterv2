import { createUserWithEmailAndPassword, sendEmailVerification, updateProfile } from "firebase/auth";
import { Fade } from "react-awesome-reveal"
import { Link, useNavigate } from "react-router-dom"
import { auth, db } from "../utills/firebase";
import { useContext, useState } from "react";
import { AuthContext } from "../utills/AuthContext";
import { doc, setDoc } from "firebase/firestore";
const Signup = () => {
    const { logout, setShowModal } = useContext(AuthContext)
    const navigate = useNavigate();
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [errorMsg, seterrorMsg] = useState("");
    const [submitButtonDisabled, setsubmitButtonDisabled] = useState(false);
    const CreateUserDocument = async (user) => {
        try {
            const uid = user.uid;
            await setDoc(doc(db, "users", uid), {
                uid: uid,
                name: user.displayName,
                email: user.email,
                openai: "",
                createdAt: Date.now()
            });
        } catch (error) {
            console.log(error)
        }
    }

    const handleSubmission = () => {
        if (!name || !email || !password) {
            seterrorMsg("Fill All Fields");
            return;
        }
        setsubmitButtonDisabled(true);
        seterrorMsg("");
        createUserWithEmailAndPassword(auth, email, password).then(async (res) => {
            setShowModal(false)
            setsubmitButtonDisabled(false);
            // console.log(res.user)
            const user = res.user;
            await sendEmailVerification(res.user);
            await updateProfile(user, {
                displayName: name,
            });
            await CreateUserDocument(user)
            // const ref = await addDoc(collection(db, "users"), {
            //     uid: user.uid,
            //     name: name,
            //     email: email,
            //     openai: "",
            //     createdAt: Date.now()
            // })
            // console.log(ref)
            logout();
            seterrorMsg("Verification Email Sent");
            setTimeout(() => {
                () => navigate('/')
            }, 2000);
        }).catch((err) => {
            setsubmitButtonDisabled(false);
            seterrorMsg("Error: " + err.message);
        })
    }
    return (
        <div className='flex justify-center items-center bg-base-200 w-[100vw] h-[100vh] relative'>
            <div className='bg-primary rounded-xl w-full max-w-md flex flex-col justify-center items-center h-full max-h-[32rem] absolute'>
                <Fade duration={1500}>
                    <h1 className='text-2xl text-center pb-8 text-primary-content font-bold'>Signup for an Account.</h1>
                    <p className='font-semibold py-2 text-primary-content'> Name: </p>
                    <input type="text" onChange={(e) => setName(e.target.value)} value={name} placeholder="Enter your username" className="input text-center input-secondary rounded-md input-bordered w-full max-w-xs" />
                    <p className='font-semibold py-2 text-primary-content'> Email: </p>
                    <input type="email" onChange={(e) => setEmail(e.target.value)} value={email} placeholder="Enter your email address" className="input text-center input-secondary rounded-md input-bordered w-full max-w-xs" />
                    <p className='font-semibold py-2 text-primary-content'> Password: </p>
                    <input type="password" onChange={(e) => setPassword(e.target.value)} value={password} placeholder="Enter your password" className="input input-secondary text-center rounded-md input-bordered w-full max-w-xs" />
                    <button onClick={handleSubmission} disabled={submitButtonDisabled} className='rounded-xl btn btn-block mt-6 px-8 py-2 gap-2'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zM4 19.235v-.11a6.375 6.375 0 0112.75 0v.109A12.318 12.318 0 0110.374 21c-2.331 0-4.512-.645-6.374-1.766z" />
                        </svg>

                        Sign up</button>
                    <div className="text-center pt-1">
                        <b className="text-error ">{errorMsg}</b>
                    </div>
                    <p className='pt-3 text-center'>Have an account? <Link className='text-primary-content' to='/login'>Login</Link></p>
                </Fade>
            </div>
        </div>
    )
}

export default Signup