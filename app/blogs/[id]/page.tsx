import { Be_Vietnam_Pro } from 'next/font/google';
import React from 'react';
import async from '../../careers/page';
import { useRouter } from 'next/navigation';

const beVietnamPro700 = Be_Vietnam_Pro({
    weight: '700',
    subsets: ['latin']
})

const beVietnamPro600 = Be_Vietnam_Pro({
    weight: '600',
    subsets: ['latin']
})

const beVietnamPro500 = Be_Vietnam_Pro({
    weight: '600',
    subsets: ['latin']
})


const beVietnamPro400 = Be_Vietnam_Pro({
    weight: '400',
    subsets: ['latin']
})

const beVietnamPro300 = Be_Vietnam_Pro({
    weight: '300',
    subsets: ['latin']
})
const beVietnamPro600Italic = Be_Vietnam_Pro({
    weight: '600',
    style: 'italic',
    subsets: ['latin']
})

async function Blog({ params }: { params: { id: number } }) {
    return (
        <div className="w-full h-full">
            <div className={beVietnamPro600.className + ' relative pt-5 md:px-52 flex flex-col justify-center items-center'}>
                {params.id}
            </div>
        </div>
    );
}

export default Blog;
