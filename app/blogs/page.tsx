import AboutUs from "@/components/AboutUs"
import Footer from "@/components/Footer"
import { Be_Vietnam_Pro } from "next/font/google"
import { title } from "process"


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

export default async function Blogs() {
    return (
        <div className="w-full h-full">
            <div className={beVietnamPro600.className + ' relative pt-5 md:px-52 flex flex-col justify-center items-center'}>

                <div id="main" className='w-full h-full mb-10 flex flex-col-reverse md:flex-col lg:flex-row justify-center items-center 
                 mt-5 pb-5 animated animatedFadeInUp fadeInUp px-5 border-b border-[#0656FE]'>

                    <div className='flex flex-col items-start justify-center md:justify-start  '>
                        <h1 className={beVietnamPro500.className + ' text-5xl md:text-5xl lg:text-7xl md:px-12 text-[#f7922f] mb-5 md:mb-10'}>Our Blog</h1>
                        <p className={beVietnamPro300.className + ' text-lg md:text-xl text-[#302c42] text-opacity-75 md:px-12'}>
                            Welcome to Nvelop, where we, a team of passionate new entrepreneurs, are on a mission to revolutionize IT-sourcing through the innovative use of AI.
                            At Nvelop, we believe in pushing boundaries, driving progress, and making a meaningful difference in the industry.
                            <br></br> <br></br>
                            Our commitment is to
                            build an environment where talent flourishes, and creativity is the engine of our success. We are dedicated to attracting and retaining top-tier
                            professionals who align with our core values of integrity, excellence, and collaboration. Are you ready to be part of this transformative journey?
                        </p>
                    </div>

                    <div className='w-full flex justify-center items-center mt-10 mb-10'>
                        <img className='w-[20rem] md:w-[35rem]' src='./flat/sfmikko-icon-05.svg' />
                    </div>

                </div>

                <div id="blogs" className="w-full pl-4 md:px-16">

                    <div className="flex flex-col md:flex-row justify-center items-center border-b mb-4">

                        <div className="w-full mb-8 lg:w-[40%] flex justify-center items-center">
                            <img className="w-[10rem]" src="./flat/Asset1.png" alt="Ai-to-Ai-sourcing" />
                        </div>

                        <div className=" flex flex-col md:pt-20">

                            <h3 className="text-4xl md:text-5xl mb-3 text-center md:text-start text-[#0656FE] md:my-10">
                                AI-to-AI Sourcing
                            </h3>
                            <p className={beVietnamPro300.className + ' text-lg md:text-md text-[#302c42] text-opacity-75'}>
                                It's no news that IT salespeople, like most of us knowledge workers, are increasingly leveraging Chat GPT and other Gen AI tools in their daily work.
                                Sales teams are applying AI...
                            </p>


                            <div className="w-full flex flex-col justify-center items-center md:items-end">
                                <a href="./blogs/1" className="mr-3.5 md:mr-0 buttonMain w-full md:w-[20rem] my-8 h-12 flex justify-center items-center">Read More</a>
                            </div>
                        </div>

                    </div>

                    <BlogPost 
                        title="Nvelop - The origin story"
                        description="Like many young people of our generation I was swept away in the IT Revolution in India. Was picked by Tata Consultancy Services(TCS) in 2004 and started working soon... "
                        id={2}
                        imagePath="./flat/sfmikko-icon-06.svg"
                    />

                </div>
            </div>
            <div className={beVietnamPro600.className}>
                <AboutUs />
                <Footer />
            </div>
        </div>
    )
}


async function BlogPost({
    id, title, description, imagePath
}: {
    title: string,
    description: string,
    imagePath: string,
    id: number
}) {
    return (
        <div className="flex flex-col md:flex-row justify-center items-center border-b last:border-b-0 mb-4">

            <div className="w-full mb-8 lg:w-[40%] flex justify-center items-center">
                <img className="w-[20rem]" src={imagePath} alt="Ai-to-Ai-sourcing" />
            </div>

            <div className=" flex flex-col md:pt-20">

                <h3 className="text-4xl md:text-5xl mb-3 text-center md:text-start text-[#0656FE] md:my-10">
                    {title}
                </h3>
                <p className={beVietnamPro300.className + ' text-lg md:text-md text-[#302c42] text-opacity-75'}>
                    {description}
                </p>

                <div className="w-full flex flex-col justify-center items-center md:items-end">
                    <a href={`./blogs/${id}`} className="mr-3.5 md:mr-0 buttonMain w-full md:w-[20rem] my-8 h-12 flex justify-center items-center">Read More</a>
                </div>
            </div>

        </div>
    )
}