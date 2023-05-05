import { Link, Outlet, } from "react-router-dom"
const Dashboard = () => {
    return (
        <div className="drawer  drawer-mobile">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex">
                <Outlet></Outlet>
                <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

            </div>
            <div className="drawer-side bg-blue-200">
                <div className=" shadow-2xl bg-base-300">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-60 bg-base-300 text-base-content">
                        <li><Link to='/dashboard/welcome'>Welcome</Link></li>
                        <li><Link to='/dashboard/signup'>signup</Link></li>
                        <li><a>Sidebar Item 2</a></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Dashboard