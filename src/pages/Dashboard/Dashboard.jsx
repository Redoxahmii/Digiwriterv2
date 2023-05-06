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
                    <div className="drawer-side w-40 bg-blue-200 h-[90vh]">
                        <div className=" shadow-2xl bg-base-300">
                            <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                            <ul className="menu p-4 w-60 bg-base-300 text-base-content">
                                <li>
                                    <Link to="/dashboard/welcome">Welcome</Link>
                                </li>
                                <li>
                                    <Link to="/dashboard/signup">signup</Link>
                                </li>
                                <li>
                                    <a>Sidebar Item 2</a>
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
                                        autocomplete: "on",
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