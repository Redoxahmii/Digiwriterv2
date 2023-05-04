import { useContext, useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../utills/AuthContext';
const Navbar = () => {
    const [theme, setTheme] = useState('business')
    const [showModal, setShowModal] = useState(false)
    const { currentUser, logout, user } = useContext(AuthContext)
    const navigate = useNavigate()
    useEffect(() => {
        const htmlElement = document.querySelector('html');
        if (htmlElement) {
            htmlElement.setAttribute('data-theme', theme);
        }
    }, [theme])
    const toggleTheme = () => {
        setTheme(theme === 'business' ? 'valentine' : 'business')
    }
    const handleModal = () => {
        if (user) {
            // setShowModal(false)
            setShowModal(!showModal);
        } else {
            // Redirect to login page
            () => { navigate('/login') }
        }
    }

    return (
        <>
            <div className="navbar bg-base-100 rounded-3xl font-poppins z-50">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost btn-circle">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <li><Link to='/'>Home</Link></li>
                            <li><Link to='/login'>Login</Link></li>
                            <li><Link to='/signup'>Signup</Link></li>
                        </ul>
                    </div>
                </div>
                <div className="navbar-center">
                    <Link to='/' className="btn btn-ghost normal-case text-xl">Digiwriterv2</Link>
                </div>
                <div className="navbar-end">
                    <label className="swap swap-rotate">

                        <input type="checkbox" onClick={toggleTheme} />

                        <svg className="swap-on fill-current w-7 h-7 " xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" /></svg>

                        <svg className="swap-off fill-current w-7 h-7" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" /></svg>

                    </label>
                    <div className=' border h-9 ml-2 bg-gradient-to-t border-purple-400 '></div>
                    <div className="flex items-center">
                        {/* The button to open modal */}
                        {user ? (
                            <button htmlFor="my-modal-3" className="btn btn-ghost btn-circle" onClick={handleModal}>
                                <svg aria-hidden="true" width={31} height={40} fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" strokeLinecap="round" strokeLinejoin="round"></path>
                                </svg>
                            </button>
                        ) : (
                            <Link to='/login' className="btn btn-ghost btn-circle">
                                <svg aria-hidden="true" width={31} height={40} fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" strokeLinecap="round" strokeLinejoin="round"></path>
                                </svg>
                            </Link>
                        )}


                        {user ? (
                            <>
                                <input type="checkbox" checked={showModal} onChange={() => setShowModal(!showModal)} id="my-modal-3" className="modal-toggle" />
                                <div className={`modal ${showModal ? 'modal-active' : ''}`}>
                                    <div className="modal-box relative rounded-xl">
                                        <label htmlFor="my-modal-3" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                                        <h3 className="text-lg font-bold text-center">Profile</h3>
                                        <div className='flex justify-center items-center flex-col'>
                                            <p className="pt-4 font-semibold">Name: <span className='font-normal'> {currentUser.displayName}</span> </p>
                                            <p className="py-4 font-semibold">Email: <span className='font-normal'>{currentUser.email} </span> </p>
                                            <div className='flex flex-row gap-4'>
                                                <button onClick={() => logout()} className='btn rounded-xl'>Logout</button>
                                                <button className='btn rounded-xl'>Go to Writer</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </>
                        ) :
                            null
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar