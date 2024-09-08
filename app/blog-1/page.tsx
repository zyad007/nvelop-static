import { Be_Vietnam_Pro } from 'next/font/google';
import React from 'react';
import { useRouter } from 'next/navigation';
import AboutUs from '@/components/AboutUs';
import Footer from '@/components/Footer';

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

async function Blog1() {
    return (
        <div className="w-full h-full">
            <div className={beVietnamPro600.className + ' relative pt-5 md:px-64 flex flex-col justify-center items-center'}>

                <div id='main' className='w-full px-5 lg:px-0  flex flex-col-reverse md:flex-col lg:flex-row justify-center lg:justify-between items-center animated animatedFadeInUp fadeInUp border-b border-[#0656FE]'>
                    <div className='flex flex-col items-start justify-center md:justify-start  '>
                        <h1 className={beVietnamPro500.className + ' text-5xl md:text-5xl lg:text-7xl  text-[#f7922f] mb-5 md:mb-10'}>Read our Thought Leadership</h1>
                        <p className={beVietnamPro300.className + ' text-lg md:text-xl text-[#302c42] text-opacity-75 '}>
                            Thought Leadership articles on applying AI in IT and Sourcing
                        </p>
                    </div>
                    <img className='w-[20rem] md:w-[20rem]' src='./flat/sfmikko-icon-05.svg' />
                </div>


                <div id='blog-content' className='flex flex-col justify-center items-center px-4' >

                    <h3 className="w-full text-4xl md:text-5xl mb-3 text-[#0656FE] md:my-10">
                        AI-to-AI sourcing
                    </h3>


                    <p className={beVietnamPro300.className + ' text-lg md:text-lg text-[#302c42] text-opacity-75 '}>
                        It's no news that IT salespeople, like most of us knowledge workers, are increasingly leveraging Chat GPT and other Gen AI tools in their daily work. Sales teams
                        are applying AI to perfect their sales materials and proposals to make their quotas. Lately, their  work is being made even easier with the growth of AI-powered RFP
                        response tools. Companies like responsive.io, vendorful.ai and proposify.com are offering vendors AI-powered sales-side tools to win more deals with higher-quality
                        proposals, and less work. These AI-powered RFP tools are enriching AI generated outputs by drawing on the vendors' existing materials,
                        like case studies, past proposals, and product documentation, to create attractive proposals with a tailored, organization-specific touch.
                        <br></br> <br></br>

                        Despite the rich set of promises, there’s of course no silver bullet here. To make the most of these tools, and to differentiate from peers using similar ones,
                        organizations need to have their expertise, such credentials, processes, and capabilities, well documented. Also, there's still no substitute for human judgment,
                        expertise of smart architects, and the passion of hungry salespersons to ensure that the entire pitch is accurate, consistent, and convincing.
                        <br></br> <br></br>

                        At the same time, a similar AI trend is happening on the client side. Buyers are using generative AI and adopting AI-native tools such as our
                        Nvelop RFX that not only help organizations to define requirements, generate RFP’s, and manage the IT sourcing processes, but also support the clients
                        in the evaluation and comparison of the proposals (yes, the same proposal that were partly composed by AI). And while people remain in charge of selecting
                        the right vendors, the AI engines are doing a lot of the heavy lifting in analyzing if the proposals meet the requirements, are compliant with the client’s policies, and finally
                        comparing the proposals and proposing the winners. Even further, the AI-tools can support the clients in negotiations and contracting.
                        <br></br> <br></br>
                        Now, with AI replacing humans on both sides of the table, we are entering an era of IT sourcing where AI is talking to AI. Clients send requirements and RFP’s generated by AI to vendors who use AI to create winning proposals which are again evaluated by clients’ AI.  So, who’s the winner in this machine-to-machine sourcing? Cui buono?
                        <br></br> <br></br>

                        Probably both sides. Clients need to spend less time on managing their laborious IT sourcing processes and can spend more time on discussing their needs, optimizing the solution scope, and building internal alignment around their IT initiatives. They are also able to invite more vendors to participate their RFP rounds and can enjoy fact-based AI-enabled analysis on the strengths and weaknesses of the often very extensive proposals.
                        <br></br> <br></br>

                        Vendors, on the other hand, will have more time on strategizing on their winning sales plans and building relations with the client stakeholders. They will also be able to answer more RFP’s due to lower sales costs.
                        <br></br> <br></br>

                        The losers will be the vendors who don’t have their act together. Like the one vendor who I heard was thrown out of the sales meeting when the client realized there’s too much A and too little I in their proposal. Relaying too much on AI-generated content won’t win you the deal. Also, vendors who don’t have their excellence documented will get little use of these smart tools. Even AI can’t narrate about your great success stories if you don’t let it know.
                        <br></br> <br></br>

                        Likewise, customers with fully manual sourcing workflows can expect to be even more busy in the future. Vendors’ AI engines are very good in producing plenty of quality content for clients to review. Good luck with digesting all the materials.
                        <br></br> <br></br>

                        AI-driven IT sourcing will bring great benefits to clients. Faster sourcing processes and accelerated time-to-market. Better prices. Less

                        time and money spend on one sourcing project. Ensured compliance. Smarter decisions.
                        <br></br> <br></br>

                        Vendors will profit as well. Lot of the labor-intensive response work can be automated, and more time spent on thinking how to bring the most value to the client.
                        <br></br> <br></br>

                        Both clients and vendors should be happy. Applying AI is not a zero-sum game.
                        <br></br> <br></br>

                    </p>


                </div>

                <div className="w-full h-full flex flex-col justify-start items-center px-4 lg:items-start lg:px-8 mt-10">
                    <img className="w-[15rem] mb-4 shadow rounded-full" src={'/founders/Picture1.png'} />
                    <h3 className="text-4xl text-center mb-2">Mikko Valorinta</h3>
                    <h5 className={beVietnamPro300.className + " text-sm mb-4"}>September 4, 2024</h5>
                    <h4 className={beVietnamPro300.className + " text-lg mb-4"}>Founder & CEO</h4>
                </div>
            </div>
            <div className={beVietnamPro600.className}>
                <AboutUs />
                <Footer />
            </div>
        </div>
    );
}

export default Blog1;
