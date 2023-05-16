import ClassicEditor from '@ckeditor/ckeditor5-build-classic'
import { CKEditor } from '@ckeditor/ckeditor5-react'
import { GrammarlyEditorPlugin } from '@grammarly/editor-sdk-react'
import { useState } from 'react'
const Underbar = () => {
    const [showEditor, setshowEditor] = useState(false);
    const toggleEditor = () => {
        setshowEditor(!showEditor);
    };
    const [editorContent, setEditorContent] = useState('');
    const handleEditorChange = (event, editor) => {
        const data = editor.getData();
        setEditorContent(data);
    };

    return (
        <>
            <div className='max-w-4xl'>
                <div className="w-full flex-1 p-2 items-center justify-center rounded-xl flex flex-col">
                    <div className="flex justify-center w-full">
                        <div className='text-black'>
                            {showEditor ? (
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
                            ) : null}
                        </div>
                    </div>
                    <div className="flex justify-center">
                        {showEditor ? (
                            <div className="flex flex-col items-center mt-5">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                </svg>

                                <button className="btn btn-ghost rounded-xl" onClick={toggleEditor}>Close Editor</button>
                            </div>
                        ) : (
                            <div className="flex flex-col items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                                </svg>
                                <button className="btn btn-ghost rounded-xl" onClick={toggleEditor}>Open Editor</button>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Underbar