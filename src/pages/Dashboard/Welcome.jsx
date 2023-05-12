import { useNavigate } from "react-router-dom"
const Welcome = () => {
    const navigate = useNavigate()
    return (
        <div className="bg-base-200 w-[90vw] sm:w-full flex-col h-[80vh] flex justify-center items-center">
            {/* <h1 className="text-5xl font-semibold">Welcome to Dashboard</h1> */}
            <div className="card w-96 h-[25rem] bg-base-100 mt-10 rounded-2xl shadow-xl">
                <div className="card-body items-center text-center">
                    <h2 className="text-xl font-semibold">Welcome to Dashboard</h2>
                    <p className="">Time to get started!</p>
                </div>
                <figure><img src="/dash.jpg" alt="temp" /></figure>
            </div>
            <button onClick={() => navigate('/dashboard/article')} className="btn btn-primary rounded-xl mt-10">Get Started</button>
        </div>
    )
}

export default Welcome