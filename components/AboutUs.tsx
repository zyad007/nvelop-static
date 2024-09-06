"use-client"
import { Be_Vietnam_Pro } from 'next/font/google'
import React from 'react'
const beVietnamPro300 = Be_Vietnam_Pro({
    weight: '300',
    subsets: ['latin']
})
export default function AboutUs() {
    return (
        <div className='w-full text-black flex flex-col justify-center items-center text-xs md:text-base md:my-10 bg-[#f9f7ff] p-6 rounded-md border'>
            <div className='w-full text-center md:text-5xl text-4xl text-[#0656FE] md:mb-5'>
                About Us
            </div>
            <div className={beVietnamPro300.className + ' md:w-5/6 w-full text-center mb-5 md:mb-0 md:text-base text-sm'}>
                Nvelop is a pioneer in AI-powered, automated IT sourcing, delivering more efficient procurement, faster time-to-market, and enhanced compliance. Nvelop develops an AI-native SaaS platform for sourcing supporting end-to-end IT sourcing processes including solution exploration, requirements gathering, RFP generation, proposal evaluation, and contracting. Nvelop was founded in 2024 and is based in Helsinki, Finland.
            </div>
            <div className={'md:w-1/2 w-full text-center mt-5'}>
                <strong>Our address:</strong> <br />
                <span className={beVietnamPro300.className + ' flex justify-center text-xs mt-2 md:text-base'}>
                    Nvelop Technologies Oy,
                    Lapinlahdenkatu 16,
                    00180 Helsinki, Finland,
                </span>
                <div className='mt-2'>Email: <a href="mailto:info@nvelop.ai" className="text-blue-600">info@nvelop.ai</a></div>
            </div>
        </div>
    )
}
