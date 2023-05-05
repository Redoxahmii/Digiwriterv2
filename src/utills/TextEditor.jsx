import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
const TextEditor = () => {
    const data = () => {
        return (
            <p style={{ color: 'black' }}>Hello</p>
        )
    }
    return (
        <div className='text-black'>
            <CKEditor
                editor={ClassicEditor}
                data={data}
                config={
                    {
                        toolbar: ['heading', '|', 'bold', 'italic', 'link', 'bulletedList', 'numberedList', 'blockQuote', 'undo', 'redo'],
                        heading: {
                            options: [
                                { model: 'paragraph', title: 'Paragraph', class: 'ck-heading_paragraph' },
                                { model: 'heading1', view: 'h1', title: 'Heading 1', class: 'ck-heading_heading1' },
                                { model: 'heading2', view: 'h2', title: 'Heading 2', class: 'ck-heading_heading2' }
                            ]
                        }
                    }
                }
            />

        </div>
    )
}

export default TextEditor