import React, { useEffect, useRef, forwardRef } from "react";
import Editor from '@toast-ui/editor';
import '@toast-ui/editor/dist/toastui-editor.css';
import '@toast-ui/editor/dist/theme/toastui-editor-dark.css';

const MarkdownEditors = forwardRef(function MarkdownEditor({ content = '', editorRef }: any) {
    useEffect(() => {
        const editor = new Editor({
            el: editorRef.current,
            previewStyle: 'vertical',
            height: '500px',
            initialValue: content,
            theme: 'dark'
        });

        // 可供外部访问
        editorRef.$$_editor = editor

        return () => {
            editor.destroy()
        }
    }, [])

    return (
        <div id="editor" ref={editorRef}></div>
    )
})

export default MarkdownEditors