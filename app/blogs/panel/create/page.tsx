'use client'
import AboutUs from "@/components/AboutUs"
const Editor = dynamic(() => import('@/components/Editor'), { ssr: false })
import Footer from "@/components/Footer"
import dynamic from "next/dynamic"
import { Be_Vietnam_Pro } from "next/font/google"

const beVietnamPro600 = Be_Vietnam_Pro({
    weight: '600',
    subsets: ['latin']
})


export default async function CreateBlog() {


    return (
        <div className="w-full h-full">
            
            <Editor />

            <div className={beVietnamPro600.className}>
                <AboutUs />
                <Footer />
            </div>
        </div>
    )
}
