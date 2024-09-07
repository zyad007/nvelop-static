import AboutUs from "@/components/AboutUs"
import Footer from "@/components/Footer"
import { Be_Vietnam_Pro } from "next/font/google"


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


export default async function Careers() {
    return (
        <div className="w-full h-full">
            <div className={beVietnamPro600.className + ' relative pt-5 md:px-52 flex flex-col justify-center items-center'}>

                <div id="main" className='w-full h-full flex flex-col-reverse md:flex-col lg:flex-row justify-center items-center 
                 mt-5 pb-5 animated animatedFadeInUp fadeInUp px-5 border-b border-[#0656FE]'>

                    <div className='flex flex-col items-start justify-center md:justify-start  '>
                        <h1 className={beVietnamPro500.className + ' text-5xl md:text-5xl lg:text-7xl md:px-12 text-[#f7922f] mb-5 md:mb-10'}>Ready to shape the future?</h1>
                        <p className={beVietnamPro300.className + ' text-lg md:text-xl text-[#302c42] text-opacity-75 md:px-12'}>
                            We are a team of new entrepreneurs with an ambition to revolutionize IT-sourcing with the innovative use of AI. Want to make a difference?
                            <br></br> <br></br>
                            At Nvelop we are dedicated to fostering an environment where talent thrives and innovation drives success. We are committed to attracting
                            and retaining top professionals who share our values of integrity, excellence, and collaboration.
                        </p>
                    </div>

                    <div className='w-full flex justify-center items-center mt-10 mb-10'>
                        <img className='w-[20rem] md:w-[35rem]' src='./flat/HR.png' />
                    </div>

                </div>

                <div id="now-hiring" className="w-full pl-4 md:px-16">

                    <h2 className=" text-5xl text-[#f7922f] my-10">
                        Now hiring:
                    </h2>

                    <h3 className="text-5xl text-[#0656FE] my-10">
                        Generative AI expert
                    </h3>

                    <p className={beVietnamPro300.className + ' text-lg md:text-xl text-[#302c42] text-opacity-75'}>
                        We are looking for a unique talent with strong theoretical background in developing applications on Generative AI.
                        You should be skilled with the key concepts of machine learning, generative models, and NLP, and familiar with the latest tools
                        in building and deploying ML and LLM models. We also expect you to excel in software development and data processing.
                        <br></br><br></br>
                        We are looking for people with high ambitions, good communication skills, and in general, nice people who rise to the challenge.
                        Ideally, you should be able to work at our Helsinki office at Maria01. If this sounds interesting, please let us know at careers@nvelop.ai
                    </p>

                    <h3 className="text-5xl text-[#0656FE] my-10">
                        Full-stack developer
                    </h3>

                    <p className={beVietnamPro300.className + ' text-lg md:text-xl text-[#302c42] text-opacity-75'}>
                        We are looking for a creative and outcome driven full-stack developer who enjoys working on challenging projects.
                        We also expect you to be curious, and in the best case already familiar, with integrating Generative AI into software products. But more importantly,
                        we want you to bring a creative approach to how AI can enhance our solutions. Main keywords: Next.js, PostgreSQL, Azure AI services.
                        <br></br><br></br>
                        We are looking for people with high ambitions, good communication skills, and in general, nice people who rise to the challenge. Ideally,
                        you should be able to work at our Helsinki office at Maria01. If this sounds interesting, please let us know at careers@nvelop.ai
                    </p>

                    <div className="w-full flex flex-col justify-center items-center">
                        <img className="w-full md:w-[20rem] my-10 px-10 md:px-0" src="./flat/Asset2.png" alt="apply" />
                        <a href="mailto:careers@nvelop.ai" className="mr-4 md:mr-0 buttonMain w-full md:w-[20rem] my-8 h-12 flex justify-center items-center">Apply Here</a>
                    </div>
                    
                </div>

            </div>
            <div className={beVietnamPro600.className}>
                <AboutUs />
                <Footer />
            </div>
        </div>
    )
}