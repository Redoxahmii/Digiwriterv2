import { useContext, useEffect } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../utills/AuthContext';
import { DrawerButton } from '../pages/Dashboard/Dashboard';
const Navbar = () => {
    const { currentUser, logout, user, toggleTheme, showModal, setShowModal, updateEntry, setKey } = useContext(AuthContext)
    const navigate = useNavigate()
    const location = useLocation();
    const showDrawerButton = location.pathname.startsWith('/dashboard');
    useEffect(() => {
        if (user) {
            setShowModal(false);
        }

    }, [setShowModal, user]);

    const handleModal = () => {
        if (!user) {
            setShowModal(!showModal);
        } else {
            setShowModal(true)
        }
    }
    return (
        <>
            <div className="navbar bg-base-100 rounded-3xl z-50 lg:flex sticky">
                <div className="navbar-start">
                    {
                        showDrawerButton ? (
                            <DrawerButton />
                        )
                            :
                            (
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
                            )
                    }
                </div>
                <div className="navbar-center">

                    <button onClick={() => navigate('/')} className="btn btn-ghost normal-case text-xl gap-2">
                        <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" fill="currentColor" className="w-7 h-7 hidden lg:block"
                            viewBox="0 0 408.5 406.2" xmlSpace="preserve" >
                            <g >
                                <path fill='' d="M163.5,74.6c0-22.2,18.1-40.3,40.3-40.3c22.2,0,40.3,18.1,40.3,40.3V79L266,64.6l0-1.2c-5.4-30.1-31.6-51.9-62.2-51.9
		c-34.8,0-63.1,28.3-63.1,63.1v109.2l22.8,15.1L163.5,74.6L163.5,74.6z"/>
                                <path fill='' d="M243.1,331.6c0,22.2-18.1,40.3-40.3,40.3c-22.2,0-40.3-18.1-40.3-40.3v-4.5l-22,14.6l0.2,1.1c5.4,30.1,31.6,51.9,62.2,51.9
		c34.8,0,63.1-28.3,63.1-63.1V222.5l-22.8-15.1L243.1,331.6L243.1,331.6z"/>
                                <path fill='' d="M281.8,83.5l-93.8,55.8l-1.3,27.3l106.8-63.5c19.1-11.4,43.9-5.1,55.2,14c11.4,19.1,5.1,43.9-14,55.2l-3.8,2.3l23.5,11.4
		l0.7-0.4l0.4-0.2c23.1-20,28.5-53.7,12.9-80c-8.6-14.5-22.4-24.7-38.7-28.9C313.2,72.5,296.2,74.9,281.8,83.5z"/>
                                <path fill='' d="M218.7,266.8l1.3-27.3L113.2,303c-9.2,5.5-20.1,7.1-30.5,4.4c-10.4-2.7-19.2-9.2-24.7-18.4c-11.4-19.1-5.1-43.9,14-55.2
		l3.8-2.3L52,219.9l-0.8,0.8c-23.1,20-28.5,53.6-12.8,79.9c8.6,14.5,22.4,24.7,38.7,28.9c5.2,1.3,10.5,2,15.7,2
		c11.2,0,22.3-3,32.1-8.9L218.7,266.8z"/>
                                <path fill='' d="M345.9,213.2l-94.5-54.6l-24.5,12.2L334.5,233c9.3,5.4,16,14.1,18.7,24.5s1.4,21.3-4,30.6s-14.1,16-24.5,18.7
		c-10.4,2.8-21.3,1.3-30.6-4l-3.9-2.2l1.6,26.2l1.1,0.5c7,2.5,14.3,3.8,21.4,3.8c22,0,43.1-11.6,54.7-31.6
		C386.4,269.3,376.1,230.6,345.9,213.2z"/>
                                <path fill='' d="M60.7,193l94.5,54.6l24.5-12.2L72.1,173.2c-19.2-11.1-25.8-35.8-14.7-55c11.1-19.2,35.8-25.8,55.1-14.7l3.9,2.2l-1.6-26.2
		l-1.1-0.5c-28.8-10.4-60.8,1.3-76.1,27.8C20.2,136.9,30.5,175.6,60.7,193z"/>
                                <circle fill='' cx="296.1" cy="43.6" r="15.9" />
                                <circle fill='' cx="381.2" cy="202.1" r="15.9" />
                                <circle fill='' cx="294.1" cy="359.7" r="15.9" />
                                <circle fill='' cx="112.4" cy="43.6" r="15.9" />
                                <circle fill='' cx="27.3" cy="202.1" r="15.9" />
                                <circle fill='' cx="114.4" cy="359.7" r="15.9" />
                            </g>
                        </svg>
                        <p>
                            Digiwriter
                        </p>
                    </button>
                </div>
                <div className="navbar-end">

                    <label className="swap swap-rotate">
                        <input type="checkbox" onClick={toggleTheme} />
                        <svg className="swap-on fill-current w-6 h-6 " xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" /></svg>
                        <svg className="swap-off fill-current w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" /></svg>

                    </label>
                    <div className=' border h-9 ml-2 bg-gradient-to-t border-base-content shadow-2xl' ></div>
                    <div className="flex items-center">
                        {/* The button to open modal */}
                        {user ? (
                            <div className='avatar online'>
                                <button htmlFor="my-modal-3" className="btn btn-ghost ml-1 btn-circle" onClick={handleModal}>
                                    <svg aria-hidden="true" className='w-7 h-7' fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" strokeLinecap="round" strokeLinejoin="round"></path>
                                    </svg>
                                </button>
                            </div>
                        ) : (
                            <div className='avatar offline'>

                                <Link to='/login' className="btn btn-ghost btn-circle">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zM4 19.235v-.11a6.375 6.375 0 0112.75 0v.109A12.318 12.318 0 0110.374 21c-2.331 0-4.512-.645-6.374-1.766z" />
                                    </svg>
                                </Link>
                            </div>
                        )}


                        {user && (
                            <>
                                <input type="checkbox" checked={showModal} onChange={() => setShowModal(!showModal)} id="my-modal-3" className="modal-toggle" />
                                <div className={`modal ${showModal ? 'modal-active' : ''}`}>
                                    <div className="modal-box relative rounded-xl">
                                        <label htmlFor="my-modal-3" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                                        <h3 className="text-lg font-bold text-center">Profile</h3>
                                        <div className='flex justify-center items-center flex-col'>
                                            <p className="pt-4 font-semibold">Name:&nbsp; <span className='font-normal text-primary-content'>{currentUser.displayName}</span> </p>
                                            <p className="py-4 font-semibold">Email:&nbsp; <span className='font-normal text-primary-content'>{currentUser.email} </span> </p>
                                            {/* <p className="py-4 font-semibold flex">Openai Key:&nbsp; <span className='font-normal text-primary-content'></span> </p>
                                            <input type="text" onChange={(e) => setKey(e.target.value)} className='input input-primary' />
                                            <button className='btn' onClick={() => updateEntry(currentUser.uid)}> Submit</button> */}
                                            <div className='flex flex-row gap-4'>
                                                <button onClick={() => logout()} className='btn rounded-xl'>Logout</button>
                                                <button onClick={() => navigate('/dashboard/welcome')} className='btn rounded-xl'>Dashboard</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </>
                        )}
                    </div>
                </div>
            </div>

        </>
    )
}

export default Navbar