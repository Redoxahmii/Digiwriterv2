import { Link, Outlet } from "react-router-dom";
import Underbar from "../../components/Underbar";
export const DrawerButton = () => {
    return (
        <label htmlFor="my-drawer-3" className="btn btn-circle btn-ghost
         lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
        </label>
    )
}
const Dashboard = () => {
    return (
        <>
            <div className="drawer drawer-mobile">
                <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content bg-base-200 flex flex-col pb-16">
                    <Outlet></Outlet>
                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-3" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 flex bg-base-300 pb-20">
                        <li className="pb-2 rounded-lg">
                            <div className="text-center rounded border-b-2 border-primary flex h-28 justify-center">
                                <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" fill="currentColor" className="w-8 h-8"
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
                                <h1 className="text-2xl font-semibold">Digiwriter</h1>
                            </div>
                        </li>
                        <li>
                            <Link to="/dashboard/welcome">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25" />
                                </svg>
                                Welcome
                            </Link>
                        </li>
                        <li>
                            <Link to="/dashboard/chatbot">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.172 48.172 0 003.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />
                                </svg>
                                AI Assistant
                            </Link>
                        </li>
                        <li>
                            <Link to="/dashboard/HeaderOutline">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 24 24"><path fill="currentColor" d="M3 4h2v6h4V4h2v14H9v-6H5v6H3V4m11 14v-2h2V6.31l-2.5 1.44V5.44L16 4h2v12h2v2h-6Z" /></svg>
                                Header Outline Generator
                            </Link>
                        </li>
                        <li>
                            <Link to="/dashboard/TitleGenerator">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 24 24"><path fill="currentColor" d="M5 4v3h5.5v12h3V7H19V4z" /></svg>
                                Title Generator
                            </Link>
                        </li>
                        <li>
                            <Link to="/dashboard/KeywordGenerator">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 16 16"><path fill="currentColor" d="M15 4h-5V3h5v1zm-1 3h-2v1h2V7zm-4 0H1v1h9V7zm2 6H1v1h11v-1zm-5-3H1v1h6v-1zm8 0h-5v1h5v-1zM8 2v3H1V2h7zM7 3H2v1h5V3z" /></svg>
                                Keyword Generator
                            </Link>
                        </li>
                        <li>
                            <Link to="/dashboard/article">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
                                </svg>
                                Article Writer
                            </Link>
                        </li>
                        <li>
                            <Link to="/dashboard/Summarizer">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 256 256"><path fill="currentColor" d="M184 112a8 8 0 0 1-8 8h-64a8 8 0 0 1 0-16h64a8 8 0 0 1 8 8Zm-8 24h-64a8 8 0 0 0 0 16h64a8 8 0 0 0 0-16Zm48-88v160a16 16 0 0 1-16 16H48a16 16 0 0 1-16-16V48a16 16 0 0 1 16-16h160a16 16 0 0 1 16 16ZM48 208h24V48H48Zm160 0V48H88v160h120Z" /></svg>
                                Content Summarizer
                            </Link>
                        </li>
                        <li>
                            <Link to="/dashboard/ContentRewriter">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 256 256"><path fill="currentColor" d="M184 112a8 8 0 0 1-8 8h-64a8 8 0 0 1 0-16h64a8 8 0 0 1 8 8Zm-8 24h-64a8 8 0 0 0 0 16h64a8 8 0 0 0 0-16Zm48-88v160a16 16 0 0 1-16 16H48a16 16 0 0 1-16-16V48a16 16 0 0 1 16-16h160a16 16 0 0 1 16 16ZM48 208h24V48H48Zm160 0V48H88v160h120Z" /></svg>
                                Content Rewriter
                            </Link>
                        </li>
                        <li>
                            <Link to="/dashboard/email">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                                </svg>

                                Email Writer
                            </Link>
                        </li>
                        <li>
                            <Link to="/dashboard/imageGenerator">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                                </svg>
                                AI Images
                            </Link>
                        </li>
                        <li>
                            <Link to="/dashboard/productgenerator">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-7 h-7">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
                                </svg>

                                Product Name Generator
                            </Link>
                        </li>

                        <li>
                            <Link to="/dashboard/ProductDescription">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 9h3.75M15 12h3.75M15 15h3.75M4.5 19.5h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5zm6-10.125a1.875 1.875 0 11-3.75 0 1.875 1.875 0 013.75 0zm1.294 6.336a6.721 6.721 0 01-3.17.789 6.721 6.721 0 01-3.168-.789 3.376 3.376 0 016.338 0z" />
                                </svg>
                                Product Description
                            </Link>
                        </li>
                        <li>
                            <Link to="/dashboard/AddCopy">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 7.5l16.5-4.125M12 6.75c-2.708 0-5.363.224-7.948.655C2.999 7.58 2.25 8.507 2.25 9.574v9.176A2.25 2.25 0 004.5 21h15a2.25 2.25 0 002.25-2.25V9.574c0-1.067-.75-1.994-1.802-2.169A48.329 48.329 0 0012 6.75zm-1.683 6.443l-.005.005-.006-.005.006-.005.005.005zm-.005 2.127l-.005-.006.005-.005.005.005-.005.005zm-2.116-.006l-.005.006-.006-.006.005-.005.006.005zm-.005-2.116l-.006-.005.006-.005.005.005-.005.005zM9.255 10.5v.008h-.008V10.5h.008zm3.249 1.88l-.007.004-.003-.007.006-.003.004.006zm-1.38 5.126l-.003-.006.006-.004.004.007-.006.003zm.007-6.501l-.003.006-.007-.003.004-.007.006.004zm1.37 5.129l-.007-.004.004-.006.006.003-.004.007zm.504-1.877h-.008v-.007h.008v.007zM9.255 18v.008h-.008V18h.008zm-3.246-1.87l-.007.004L6 16.127l.006-.003.004.006zm1.366-5.119l-.004-.006.006-.004.004.007-.006.003zM7.38 17.5l-.003.006-.007-.003.004-.007.006.004zm-1.376-5.116L6 12.38l.003-.007.007.004-.004.007zm-.5 1.873h-.008v-.007h.008v.007zM17.25 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zm0 4.5a.75.75 0 110-1.5.75.75 0 010 1.5z" />
                                </svg>
                                Ad from Product Description
                            </Link>
                        </li>
                        <li>
                            <Link to="/dashboard/instacap">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 32 32"><circle cx="22.406" cy="9.594" r="1.44" fill="currentColor" /><path fill="currentColor" d="M16 9.838A6.162 6.162 0 1 0 22.162 16A6.162 6.162 0 0 0 16 9.838ZM16 20a4 4 0 1 1 4-4a4 4 0 0 1-4 4Z" /><path fill="currentColor" d="M16 6.162c3.204 0 3.584.012 4.849.07a6.642 6.642 0 0 1 2.228.413a3.975 3.975 0 0 1 2.278 2.278a6.642 6.642 0 0 1 .413 2.228c.058 1.265.07 1.645.07 4.85s-.012 3.583-.07 4.848a6.642 6.642 0 0 1-.413 2.228a3.975 3.975 0 0 1-2.278 2.278a6.642 6.642 0 0 1-2.228.413c-1.265.058-1.645.07-4.849.07s-3.584-.012-4.849-.07a6.642 6.642 0 0 1-2.228-.413a3.975 3.975 0 0 1-2.278-2.278a6.642 6.642 0 0 1-.413-2.228c-.058-1.265-.07-1.645-.07-4.849s.012-3.584.07-4.849a6.642 6.642 0 0 1 .413-2.228a3.975 3.975 0 0 1 2.278-2.278a6.642 6.642 0 0 1 2.228-.413c1.265-.058 1.645-.07 4.849-.07M16 4c-3.259 0-3.668.014-4.948.072a8.807 8.807 0 0 0-2.912.558a6.136 6.136 0 0 0-3.51 3.51a8.807 8.807 0 0 0-.558 2.913C4.014 12.333 4 12.74 4 16s.014 3.668.072 4.948a8.807 8.807 0 0 0 .558 2.912a6.136 6.136 0 0 0 3.51 3.51a8.807 8.807 0 0 0 2.913.558c1.28.058 1.688.072 4.947.072s3.668-.014 4.948-.072a8.807 8.807 0 0 0 2.913-.558a6.136 6.136 0 0 0 3.51-3.51a8.807 8.807 0 0 0 .557-2.913C27.986 19.667 28 19.26 28 16s-.014-3.668-.072-4.948a8.807 8.807 0 0 0-.558-2.912a6.136 6.136 0 0 0-3.51-3.51a8.807 8.807 0 0 0-2.913-.557C19.667 4.013 19.26 4 16 4Z" /></svg>
                                Insta Captions
                            </Link>
                        </li>
                        <li>
                            <Link to="/dashboard/tweeter">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 256 256"><path fill="currentColor" d="M247.39 68.94A8 8 0 0 0 240 64h-30.43a48.66 48.66 0 0 0-41.47-24a46.91 46.91 0 0 0-33.75 13.7A47.9 47.9 0 0 0 120 88v6.09C79.74 83.47 46.81 50.72 46.46 50.37a8 8 0 0 0-13.65 4.92c-4.31 47.79 9.57 79.77 22 98.18a110.93 110.93 0 0 0 21.88 24.2c-15.23 17.53-39.21 26.74-39.47 26.84a8 8 0 0 0-3.85 11.93c.75 1.12 3.75 5.05 11.08 8.72C53.51 229.7 65.48 232 80 232c70.67 0 129.72-54.42 135.75-124.44l29.91-29.9a8 8 0 0 0 1.73-8.72Zm-45 29.41a8 8 0 0 0-2.32 5.14C196 166.58 143.28 216 80 216c-10.56 0-18-1.4-23.22-3.08c11.51-6.25 27.56-17 37.88-32.48A8 8 0 0 0 92 169.08c-.47-.27-43.91-26.34-44-96c16 13 45.25 33.17 78.67 38.79A8 8 0 0 0 136 104V88a32 32 0 0 1 9.6-22.92A30.94 30.94 0 0 1 167.9 56c12.66.16 24.49 7.88 29.44 19.21a8 8 0 0 0 7.33 4.79h16Z" /></svg>
                                Tweeter
                            </Link>
                        </li>

                    </ul>
                </div>
            </div>
            <div className="sticky bottom-0 left-0 bg-base-100 lg:flex hidden justify-center z-50">
                <Underbar />
            </div>
        </>
    );
};

export default Dashboard;