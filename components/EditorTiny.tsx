'use client'
import React, { useEffect, useRef, useState } from 'react';
import { Editor } from '@tinymce/tinymce-react';

import { Be_Vietnam_Pro } from 'next/font/google';


const beVietnamPro600 = Be_Vietnam_Pro({
    weight: '600',
    subsets: ['latin']
})

enum TabState {
    'EDIT', 'PREVIEW'
}

const EditorTiny = () => {

    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    const editorRef = useRef()
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
                            <Editor
                                onInit={(_evt, editor) => (editorRef.current as any) = editor}
                                apiKey='113fbiie64qvhb5p61tkwwngkmwjwc57m06t92m2yqbbuy8m'
                                init={{
                                    plugins: [
                                        // Core editing features
                                        'anchor', 'autolink', 'charmap', 'codesample', 'emoticons', 'image', 'link', 'lists', 'media', 'searchreplace', 'table', 'visualblocks', 'wordcount',
                                    ],
                                    toolbar: 'undo redo | blocks fontsize | bold italic underline strikethrough forecolor backcolor | link image media table mergetags | align lineheight | checklist numlist bullist indent outdent | emoticons charmap | removeformat',
                                    tinycomments_mode: 'embedded',
                                    tinycomments_author: 'Author name',
                                    mergetags_list: [
                                        { value: 'First.Name', title: 'First Name' },
                                        { value: 'Email', title: 'Email' },
                                    ],
                                    font_family_formats: 'var(--be-vietnam-pro)',
                                    height: '100%'
                                }}
                                onEditorChange={(e) => {
                                    setContent(e)
                                }}
                                value={content}
                            />

                        </div>
                    </>
                )
            }

            {
                selected === TabState.PREVIEW &&
                <div dangerouslySetInnerHTML={{ __html: content }} className={beVietnamPro600.className + ' w-full h-full pt-5 min-h-[45rem] editor-container px-10'}>
                </div>
            }
        </div>
    );
}

export default EditorTiny;
