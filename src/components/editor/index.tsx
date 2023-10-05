import React from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

export default function RichEditor({value, setValue}: any) {
    return (
        <ReactQuill theme="snow" value={value} onChange={setValue} />
    )
}
