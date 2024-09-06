import React from 'react'
import { Be_Vietnam_Pro } from 'next/font/google'
import NavBar from '@/components/NavBar'

const beVietnamPro600 = Be_Vietnam_Pro({
    weight: '600',
    subsets: ['latin']
})

const beVietnamPro300 = Be_Vietnam_Pro({
    weight: '300',
    subsets: ['latin']
})

export default async function Product() {

    return (
        <div className={beVietnamPro600.className + ' px-5 md:px-10 pt-5'}>

            <NavBar />

            <div className='w-full h-full flex flex-col md:flex-col lg:flex-row justify-center items-center md:px-20 mt-5 mb-5'>

                <div className='flex flex-col items-center lg:items-start justify-center md:pl-20 lg:pl-32'>
                    <h1 className='text-5xl md:text-5xl lg:text-7xl'>AI-powered</h1>
                    <h1 className='text-5xl md:text-5xl lg:text-7xl text-[#f7922f] mb-5 md:mb-10'>IT sourcing</h1>
                    <p className={beVietnamPro300.className + ' text-lg md:text-xl text-[#302c42] text-opacity-75 px-12'}>Run accelerated, more impactful IT sourcing with automated, AI-driven SaaS platform.</p>
                </div>

                <div className='w-full flex justify-center items-center'>
                    <img className='w-full md:w-[70%]' src='./flat/product-main.svg' />
                </div>

            </div>

            <div className='w-full flex flex-col items-center justify-center' id='how-it-works-content'>
                <div className='w-full border-b border-[#0656FE] text-[#0656FE] text-center text-3xl md:text-5xl mb-5'>
                    <h2 className='pb-5'>Key features</h2>
                </div>


                {/* Start with an idea */}
                <div className='w-full flex flex-col justify-center items-center'>
                    <FeatureCard
                        title='IT sourcing'
                        content="Articulate your idea and business goals to set the foundation for success. Nevlop's AI engine then helps you develop your
                         solution during the sourcing process, bringing in innovations from vendors and eventually helping you define the scope and requirements."
                        subtitle='CLARIFY NEED'
                        imagePath='./GIF/TableAnimation.gif'
                    />

                    <FeatureCard
                        title='Find the right-fit vendors   '
                        content="Invite your existing vendors or choose potential new vendors proposed by Nvelop. Ensure your supplier data stays current 
                        by integrating with your ERP and Supplier Relationship Management systems. Enrich vendor data with internal and external inputs."
                        subtitle='DISCOVER VENDORS'
                        imagePath='./GIF/List-Vendors.gif'
                    />

                    <FeatureCard
                        title='Run sourcing events at scale'
                        content="Choose between agile sourcing or more standard RFI and RFP processes. Leverage AI-powered expertise in running 
                        the sourcing project. Focus on strategizing and leave the tedious tasks to automation."
                        subtitle='CUSTOMIZE TYPES OF SOURCING EVENTS'
                        imagePath='./GIF/Sourcing-Options.gif'
                    />

                    <FeatureCard
                        title='Drive insights throughout the process'
                        content="Nvelop helps you create a tailored RFP that will bring you the information and insights that you need for your selection. You can also leverage your existing materials and 
                        historical RFP's. An easy-to-use portal helps you to finalize your RFP's"
                        subtitle='LEVERAGE HISTORICAL DATA TO GENERATE RFP'
                        imagePath='./GIF/LIstRFP-First3Questions.gif'
                    />

                    <FeatureCard
                        title='Ensure coverage & compliance'
                        content="Ensure that vendor proposals cover your functional and non-functional requirements with detailed 
                        comparison analysis. Also, ensure traceability of your needs from RFP's to contract."
                        subtitle='EVALUATE FIT TO REQUIREMENTS'
                        imagePath='./GIF/List-Vendors.gif'
                    />

                    <FeatureCard
                        title='Get pricing insights'
                        content="Gain instant pricing insights and comparisons of vendor proposals. Gain pricing intelligence with respect to scope and solution changes."
                        subtitle='DETAILED PRICING ANALYSIS'
                        imagePath='./GIF/TCO.gif'
                    />

                    <FeatureCard
                        title='Compare vendors holistically'
                        content="Compare and score the vendors based on your pre-defined evaluation criteria. Arrive at an informed decision powered by AI and data. "
                        subtitle='COMPREHENSIVE EVALUATION'
                        imagePath='./GIF/Compare-Proposals.gif'
                    />
                </div>

            </div>
        </div>
    )

};


async function FeatureCard({
    title, subtitle, content, imagePath
}: {
    title: string,
    subtitle: string,
    content: string,
    imagePath: string
}) {
    return (
        <div className='flex border flex-col-reverse md:odd:flex-row md:even:flex-row-reverse justify-between items-center w-full md:w-5/6 bg-[#F9F7FF] rounded-3xl md:rounded-xl p-5 md:p-10 mb-5 '>
            <div className='w-full md:w-[50%]'>
                <h4 className='text-xl text-[#0656FE]'>{subtitle}</h4>
                <h3 className='text-3xl md:text-3xl lg:text-4xl text-[#f7922f] mb-5 md:mb-10'>{title}</h3>
                <p className={beVietnamPro300.className + ' text-lg md:text-xl text-[#302c42] text-opacity-75'}>{content}</p>
            </div>

            <div className='w-full md:w-[80%] flex justify-center items-center mb-3 md:mb-0'>
                <img src={imagePath} />
            </div>
        </div>
    )
}