import { Link, Outlet } from "react-router-dom";
import { useState } from "react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import { GrammarlyEditorPlugin } from "@grammarly/editor-sdk-react";
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

const Dashboard = () => {
    const [showEditor, setShowEditor] = useState(true);
    const [editorContent, setEditorContent] = useState('');

    const handleEditorClose = () => {
        setShowEditor(false);
    };

    const handleEditorOpen = () => {
        setShowEditor(true);
    };

    const handleEditorChange = (event, editor) => {
        const data = editor.getData();
        setEditorContent(data);
    };

    return (
        <>
            <div className="flex flex-col h-[93vh]">
                <div className="drawer drawer-mobile">
                    <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                    <div className="drawer-content">
                        <Outlet />
                    </div>
                    <div className="drawer-side w-50 bg-blue-200 h-[90vh]">
                        <div className=" shadow-2xl bg-base-300">
                            <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                            <ul className="menu p-4 w-60 bg-base-300 text-base-content">
                                <li>
                                    <Link to="/dashboard/welcome">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25" />
                                        </svg>

                                        Welcome
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/dashboard/article">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
                                        </svg>
                                        Article
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
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="w-full flex-1 p-2 items-center justify-center rounded-xl flex flex-col">
                    <div className="flex justify-center w-full">
                        {showEditor ? (
                            <div className='text-black'>
                                <GrammarlyEditorPlugin
                                    clientId='client_Gvi7n3wdBfgA2jqFMU5Kib'
                                    config={{
                                        documentDialect: "american",
                                    }}
                                >
                                    <CKEditor
                                        editor={ClassicEditor}
                                        data={editorContent}
                                        onChange={handleEditorChange}
                                    />
                                </GrammarlyEditorPlugin>
                            </div>
                        ) : null}
                    </div>
                    <div className="flex justify-center">
                        {showEditor ? (
                            <div className="flex flex-col items-center mt-5">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                </svg>

                                <button className="btn btn-ghost rounded-xl" onClick={handleEditorClose}>Close Editor</button>
                            </div>
                        ) : (
                            <div className="flex flex-col items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                                </svg>
                                <button className="btn btn-ghost rounded-xl" onClick={handleEditorOpen}>Open Editor</button>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Dashboard;