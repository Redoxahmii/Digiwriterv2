import { Link, Outlet } from "react-router-dom";
import { useState } from "react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import { GrammarlyEditorPlugin } from "@grammarly/editor-sdk-react";
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

const Dashboard = () => {
    const [showEditor, setShowEditor] = useState(true);
    const [editorContent, setEditorContent] = useState('<p>Hello from CKEditor 5!</p>');

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
            <div className="flex flex-col h-[91vh]">
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
                <div className="w-full flex-1 p-2 items-center justify-center rounded-xl">

                    {showEditor ? (
                        <>
                            <div className='text-black'>
                                <GrammarlyEditorPlugin
                                    clientId='client_Gvi7n3wdBfgA2jqFMU5Kib'
                                    config={{
                                        documentDialect: "british",
                                        autocomplete: "on"
                                    }}
                                >
                                    <CKEditor
                                        editor={ClassicEditor}
                                        data={editorContent}
                                        onChange={handleEditorChange}
                                    />
                                </GrammarlyEditorPlugin>

                            </div>
                            <button className="btn mt-10 btn-primary rounded-xl" onClick={handleEditorClose}>Close Editor</button>
                        </>
                    ) : (
                        <button className="btn btn-primary rounded-xl" onClick={handleEditorOpen}>Open Editor</button>
                    )}
                </div>
            </div>
        </>
    );
};

export default Dashboard;