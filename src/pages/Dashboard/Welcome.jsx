import { useNavigate } from "react-router-dom"

const subpages = [
    {
        title: "Article",
        description: "Write articles that are SEO optimized!",
        image: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
        </svg>,
        path: "/dashboard/article"
    },
    {
        title: "Title Generator",
        description: "SEO optimized and viral titles!",
        image: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M5 4v3h5.5v12h3V7H19V4z" /></svg>,
        path: "/dashboard/TitleGenerator"
    },
    {
        title: "Keyword Generator",
        description: "Keywords for anything!",
        image: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path fill="currentColor" d="M15 4h-5V3h5v1zm-1 3h-2v1h2V7zm-4 0H1v1h9V7zm2 6H1v1h11v-1zm-5-3H1v1h6v-1zm8 0h-5v1h5v-1zM8 2v3H1V2h7zM7 3H2v1h5V3z" /></svg>,
        path: "/dashboard/KeywordGenerator"
    },

    {
        title: "AI Images Search",
        description: "Search and find AI generative images!",
        image: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M5 21q-.825 0-1.413-.588T3 19V5q0-.825.588-1.413T5 3h5v2H5v14h14v-5.35l2 2V19q0 .825-.588 1.413T19 21H5Zm1-4l3-4l2.25 3l3-4L18 17H6Zm15.55-3.6l-3.1-3.1q-.525.35-1.125.525T16.05 11q-1.85 0-3.15-1.312T11.6 6.5q0-1.875 1.313-3.188T16.1 2q1.875 0 3.188 1.313T20.6 6.5q0 .675-.2 1.3t-.5 1.15L22.95 12l-1.4 1.4ZM16.1 9q1.05 0 1.775-.725T18.6 6.5q0-1.05-.725-1.775T16.1 4q-1.05 0-1.775.725T13.6 6.5q0 1.05.725 1.775T16.1 9Z" /></svg>,
        path: "/dashboard/ImageSearch"
    },
    {
        title: "Content Rewriter",
        description: "Rewrite content!",
        image: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><path fill="currentColor" d="M184 112a8 8 0 0 1-8 8h-64a8 8 0 0 1 0-16h64a8 8 0 0 1 8 8Zm-8 24h-64a8 8 0 0 0 0 16h64a8 8 0 0 0 0-16Zm48-88v160a16 16 0 0 1-16 16H48a16 16 0 0 1-16-16V48a16 16 0 0 1 16-16h160a16 16 0 0 1 16 16ZM48 208h24V48H48Zm160 0V48H88v160h120Z" /></svg>,
        path: "/dashboard/ContentRewriter"
    },
    {
        title: "AI Assistant",
        description: "Your own personal assistant!",
        image: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.172 48.172 0 003.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />
        </svg>,
        path: "/dashboard/chatbot"
    },
    {
        title: "Heading Outline Generator",
        description: "Outline makes life easier!",
        image: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M3 4h2v6h4V4h2v14H9v-6H5v6H3V4m11 14v-2h2V6.31l-2.5 1.44V5.44L16 4h2v12h2v2h-6Z" /></svg>,
        path: "/dashboard/HeaderOutline"
    },
    {
        title: "Email Writer",
        description: "Email writing made quicker!",
        image: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
        </svg>,
        path: "/dashboard/email"
    },
    {
        title: "Insta Captions",
        description: "Insta captions made easier!",
        image: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><circle cx="22.406" cy="9.594" r="1.44" fill="currentColor" /><path fill="currentColor" d="M16 9.838A6.162 6.162 0 1 0 22.162 16A6.162 6.162 0 0 0 16 9.838ZM16 20a4 4 0 1 1 4-4a4 4 0 0 1-4 4Z" /><path fill="currentColor" d="M16 6.162c3.204 0 3.584.012 4.849.07a6.642 6.642 0 0 1 2.228.413a3.975 3.975 0 0 1 2.278 2.278a6.642 6.642 0 0 1 .413 2.228c.058 1.265.07 1.645.07 4.85s-.012 3.583-.07 4.848a6.642 6.642 0 0 1-.413 2.228a3.975 3.975 0 0 1-2.278 2.278a6.642 6.642 0 0 1-2.228.413c-1.265.058-1.645.07-4.849.07s-3.584-.012-4.849-.07a6.642 6.642 0 0 1-2.228-.413a3.975 3.975 0 0 1-2.278-2.278a6.642 6.642 0 0 1-.413-2.228c-.058-1.265-.07-1.645-.07-4.849s.012-3.584.07-4.849a6.642 6.642 0 0 1 .413-2.228a3.975 3.975 0 0 1 2.278-2.278a6.642 6.642 0 0 1 2.228-.413c1.265-.058 1.645-.07 4.849-.07M16 4c-3.259 0-3.668.014-4.948.072a8.807 8.807 0 0 0-2.912.558a6.136 6.136 0 0 0-3.51 3.51a8.807 8.807 0 0 0-.558 2.913C4.014 12.333 4 12.74 4 16s.014 3.668.072 4.948a8.807 8.807 0 0 0 .558 2.912a6.136 6.136 0 0 0 3.51 3.51a8.807 8.807 0 0 0 2.913.558c1.28.058 1.688.072 4.947.072s3.668-.014 4.948-.072a8.807 8.807 0 0 0 2.913-.558a6.136 6.136 0 0 0 3.51-3.51a8.807 8.807 0 0 0 .557-2.913C27.986 19.667 28 19.26 28 16s-.014-3.668-.072-4.948a8.807 8.807 0 0 0-.558-2.912a6.136 6.136 0 0 0-3.51-3.51a8.807 8.807 0 0 0-2.913-.557C19.667 4.013 19.26 4 16 4Z" /></svg>
        ,
        path: "/dashboard/instacap"
    },
    {
        title: "Tweeter",
        description: "Create new tweets!",
        image: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><path fill="currentColor" d="M247.39 68.94A8 8 0 0 0 240 64h-30.43a48.66 48.66 0 0 0-41.47-24a46.91 46.91 0 0 0-33.75 13.7A47.9 47.9 0 0 0 120 88v6.09C79.74 83.47 46.81 50.72 46.46 50.37a8 8 0 0 0-13.65 4.92c-4.31 47.79 9.57 79.77 22 98.18a110.93 110.93 0 0 0 21.88 24.2c-15.23 17.53-39.21 26.74-39.47 26.84a8 8 0 0 0-3.85 11.93c.75 1.12 3.75 5.05 11.08 8.72C53.51 229.7 65.48 232 80 232c70.67 0 129.72-54.42 135.75-124.44l29.91-29.9a8 8 0 0 0 1.73-8.72Zm-45 29.41a8 8 0 0 0-2.32 5.14C196 166.58 143.28 216 80 216c-10.56 0-18-1.4-23.22-3.08c11.51-6.25 27.56-17 37.88-32.48A8 8 0 0 0 92 169.08c-.47-.27-43.91-26.34-44-96c16 13 45.25 33.17 78.67 38.79A8 8 0 0 0 136 104V88a32 32 0 0 1 9.6-22.92A30.94 30.94 0 0 1 167.9 56c12.66.16 24.49 7.88 29.44 19.21a8 8 0 0 0 7.33 4.79h16Z" /></svg>
        ,
        path: "/dashboard/tweeter"
    },
    {
        title: "Content Summarizer",
        description: "Summarize your content.",
        image: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M15 3H5c-1.1 0-1.99.9-1.99 2L3 19c0 1.1.89 2 1.99 2H19c1.1 0 2-.9 2-2V9l-6-6zM5 19V5h9v5h5v9H5zM9 8c0 .55-.45 1-1 1s-1-.45-1-1s.45-1 1-1s1 .45 1 1zm0 4c0 .55-.45 1-1 1s-1-.45-1-1s.45-1 1-1s1 .45 1 1zm0 4c0 .55-.45 1-1 1s-1-.45-1-1s.45-1 1-1s1 .45 1 1z" /></svg>
        ,
        path: "/dashboard/Summarizer"
    },
    {
        title: "AI Images",
        description: "Images bound only by your own creativity!",
        image: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
        </svg>,
        path: "/dashboard/imageGenerator"
    },
    {
        title: "Product Name Generator",
        description: "Naming made easier!",
        image: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
        </svg>,
        path: "/dashboard/productgenerator"
    },
    {
        title: "Product Description",
        description: "Spend time on products rather than descriptions!",
        image: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" >
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 9h3.75M15 12h3.75M15 15h3.75M4.5 19.5h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5zm6-10.125a1.875 1.875 0 11-3.75 0 1.875 1.875 0 013.75 0zm1.294 6.336a6.721 6.721 0 01-3.17.789 6.721 6.721 0 01-3.168-.789 3.376 3.376 0 016.338 0z" />
        </svg>,
        path: "/dashboard/ProductDescription"
    },
    {
        title: "Facebook Ad Generator",
        description: "Ads are easier then ever now!",
        image: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 7.5l16.5-4.125M12 6.75c-2.708 0-5.363.224-7.948.655C2.999 7.58 2.25 8.507 2.25 9.574v9.176A2.25 2.25 0 004.5 21h15a2.25 2.25 0 002.25-2.25V9.574c0-1.067-.75-1.994-1.802-2.169A48.329 48.329 0 0012 6.75zm-1.683 6.443l-.005.005-.006-.005.006-.005.005.005zm-.005 2.127l-.005-.006.005-.005.005.005-.005.005zm-2.116-.006l-.005.006-.006-.006.005-.005.006.005zm-.005-2.116l-.006-.005.006-.005.005.005-.005.005zM9.255 10.5v.008h-.008V10.5h.008zm3.249 1.88l-.007.004-.003-.007.006-.003.004.006zm-1.38 5.126l-.003-.006.006-.004.004.007-.006.003zm.007-6.501l-.003.006-.007-.003.004-.007.006.004zm1.37 5.129l-.007-.004.004-.006.006.003-.004.007zm.504-1.877h-.008v-.007h.008v.007zM9.255 18v.008h-.008V18h.008zm-3.246-1.87l-.007.004L6 16.127l.006-.003.004.006zm1.366-5.119l-.004-.006.006-.004.004.007-.006.003zM7.38 17.5l-.003.006-.007-.003.004-.007.006.004zm-1.376-5.116L6 12.38l.003-.007.007.004-.004.007zm-.5 1.873h-.008v-.007h.008v.007zM17.25 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zm0 4.5a.75.75 0 110-1.5.75.75 0 010 1.5z" />
        </svg>,
        path: "/dashboard/AddCopy"
    },
    {
        title: "Upwork Cover Letter",
        description: "Cover letters for scoring jobs!",
        image: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M17.47 6.07a4.54 4.54 0 0 0-4.38 3.69a19.9 19.9 0 0 1-2.28-4.9H8.55v6a2.14 2.14 0 1 1-4.28 0v-6L2 4.91v6a4.4 4.4 0 1 0 8.8-.05v-1a20.55 20.55 0 0 0 1.65 2.7l-1.38 6.61h2.32l1-4.81a5.61 5.61 0 0 0 3.11.89a4.57 4.57 0 0 0 0-9.14zm0 6.83a4.09 4.09 0 0 1-2.55-1l.23-.91v-.05c.16-1 .66-2.6 2.35-2.6a2.25 2.25 0 0 1 2.27 2.24a2.41 2.41 0 0 1-2.27 2.32z" /></svg>,
        path: "/dashboard/UpworkCover"
    },
    {
        title: "Fiverr Gig Description",
        description: "Descriptions that convey the meesage!",
        image: <svg xmlns="http://www.w3.org/2000/svg" viewBox="-2.5 -2 24 24"><g fill="currentColor"><path d="M16.25 16.25v-10h-10v-.625c0-1.034.841-1.875 1.875-1.875H10V0H8.125A5.632 5.632 0 0 0 2.5 5.625v.625H0V10h2.5v6.25H0V20h8.75v-3.75h-2.5V10h6.285v6.25H10V20h8.75v-3.75h-2.5z" /><circle cx="14.375" cy="1.875" r="1.875" /></g></svg>,
        path: "/dashboard/Fivergigdes"
    },
    {
        title: "Linkedin Post Generator",
        description: "Posts that grab attention!",
        image: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77Z" /></svg>,
        path: "/dashboard/LinkedinPost"
    },
    {
        title: "Resource Finder",
        description: "Resources for learning!",
        image: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" strokeWidth="2" d="m12 3l9 4.5l-9 4.5l-9-4.5L12 3Zm4.5 7.25L21 12.5L12 17l-9-4.5l4.5-2.25m9 5L21 17.5L12 22l-9-4.5l4.5-2.25" /></svg>,
        path: "/dashboard/ResourceFinder"
    },

    // add more subpages here
]

const Welcome = () => {
    const navigate = useNavigate()

    return (
        <div className="hero lg:place-items-start min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-wrap lg:flex-row">
                {subpages.map((subpage) => (
                    <div key={subpage.path} className=" hover:bg-primary hover:transition-all group transition-all shadow-xl card bg-base-100 mt-10 rounded-2xl">
                        <div className="card-body items-center text-center">
                            <figure className="w-36 h-36 group-hover:scale-105 transition-all">
                                {subpage.image}
                            </figure>
                            <h2 className="text-xl font-semibold">{subpage.title}</h2>
                            <p className="">{subpage.description}</p>
                            <div className="card-actions justify-end">
                                <button onClick={() => navigate(subpage.path)} className="btn btn-ghost rounded-xl mt-4 gap-2">
                                    Go to {subpage.title}
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 4.5l7.5 7.5-7.5 7.5m-6-15l7.5 7.5-7.5 7.5" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Welcome