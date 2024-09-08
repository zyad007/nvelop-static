'use client'
import React, { useEffect, useState } from 'react';

const BlogPost = ({
    id
}: {
    id: number
}) => {

    const [blogPost, setBlogPost] = useState<{
        title: string,
        content: string,
        imagePath: string,
        author: 'NITHIN' | 'MIKKO',
        id: string
    }>()

    useEffect(() => {

        loadPost(id);

    }, [])

    function loadPost(id: number) {
        
    }

    return (
        <div>

        </div>
    );
}

export default BlogPost;
