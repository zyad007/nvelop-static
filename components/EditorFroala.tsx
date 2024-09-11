'use client'
import React, { useEffect, useState } from 'react';

import 'froala-editor/css/froala_editor.pkgd.min.css';
import 'froala-editor/css/froala_style.min.css';
import 'froala-editor/js/plugins.pkgd.min.js';

import FroalaEditor from "react-froala-wysiwyg";
import FroalaEditorView from "react-froala-wysiwyg/FroalaEditorView";

import { Be_Vietnam_Pro } from 'next/font/google';


const beVietnamPro600 = Be_Vietnam_Pro({
    weight: '600',
    subsets: ['latin']
})

enum TabState {
    'EDIT', 'PREVIEW'
}

const EditorFroala = () => {

    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    const [selected, setSelected] = useState<TabState>(TabState.EDIT)

    useEffect(() => {
        console.log(content);
    }, [content])

    function handleModelChange(newContent: any) {
        setContent(newContent)
    }

    function toggleSelectedTab() {
        if (selected === TabState.PREVIEW) setSelected(TabState.EDIT);
        if (selected === TabState.EDIT) setSelected(TabState.PREVIEW);
    }

    return (
        <div className='px-4 md:px-52'>

            <div className={beVietnamPro600.className + ' w-full flex space-x-3 justify-between pt-5 mb-6'}>
                <>
                    {
                        selected === TabState.EDIT &&
                        <input value={title} onChange={(e) => setTitle(e.target.value)} type="text" placeholder='Title' className="focus:outline-none block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 " />

                    }
                    {
                        selected === TabState.PREVIEW && (
                            <div className='w-[87%] border flex justify-center items-center border-gray-300 rounded-lg bg-gray-50 px-4'>
                                <h1 className={beVietnamPro600.className + '  truncate text-3xl text-[#0656FE]'}>{title}</h1>
                            </div>
                        )
                    }
                </>

                <div
                    onClick={toggleSelectedTab}
                    className='w-[10%] cursor-pointer px-16 py-3 flex justify-center items-center border-4 rounded-xl border-[#0656FE] hover:bg-[#0656FE] hover:text-white transition-all '>
                    {selected === TabState.EDIT && 'Preview'}
                    {selected === TabState.PREVIEW && 'Edit'}
                </div>
            </div>

            {
                selected === TabState.EDIT && (
                    <>
                        <div className={beVietnamPro600.className + ' w-full h-full pt-5  editor-container'}>
                            <FroalaEditor

                                tag="textarea"
                                model={content}
                                onModelChange={handleModelChange}
                                config={{
                                    imageUploadURL: '/upload_image',
                                    height: '100%',
                                    width: '100%',
                                    autoResize: false,
                                    quickInsertEnabled: false,

                                    toolbarButtons: [
                                        ['bold', 'italic', 'underline', 'strikeThrough', 'subscript', 'superscript'],
                                        ['fontSize', 'textColor', 'backgroundColor'],
                                        ['paragraphFormat', 'align', 'formatOL', 'formatUL', 'outdent', 'indent', 'quote'],
                                        ['insertLink', 'insertImage', 'insertTable'],
                                        ['emoticons', 'insertHR', 'selectAll', 'clearFormatting'],
                                        ['undo', 'redo']],
                                    colorsText: ['#61BD6D', '#1ABC9C'],
                                    fontFamily: {

                                    }
                                }}
                            />

                        </div>
                        <div className='invisible'>
                            <FroalaEditorView
                                model={content}
                            />
                        </div>
                    </>
                )
            }

            {
                selected === TabState.PREVIEW &&
                <div className={beVietnamPro600.className + ' w-full h-full pt-5 min-h-[45rem] editor-container'}>
                    <FroalaEditorView
                        model={content}
                    />
                </div>
            }
        </div>
    );
}

export default EditorFroala;
