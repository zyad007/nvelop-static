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

async function Blog2() {
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
                        Nvelop - The origin Story
                    </h3>


                    <p className={beVietnamPro300.className + ' text-lg md:text-lg text-[#302c42] text-opacity-75 '}>
                        Like many young people of my generation I was swept away in the IT Revolution in India.  I was picked by Tata Consultancy Services(TCS)
                        in 2004 and started working soon on large IT service projects with large companies in Technology, Pharma and Retail.
                        <br></br> <br></br>


                        I always wondered where did these projects come from. How were they conceptualized, who drove these initiatives, what made them
                        take decisions to spread the work spanning multiple geographies, time zones and languages. At one time I was working with a team spread in US,
                        China, Australia and Germany. How did these projects  appear on the horizon that an army of people were suddenly at work having access to so
                        many new systems, new ways of working, clients to deal with. How is this work organized, who does the planning and how are the responsibilities
                        split. Then I heard the word RFP being thrown about. I got curious and started working with the sales team who worked on different “RFPs”. That
                        is when I realized that the customer sends a package called RFP which is usually a collection of documents of the requirements of how they want
                        the service delivered, the parameters, quantum of work, reporting. This work was very different from my day to day tasks of system administration,
                        configuration so it really interested me in sales and how the RFPs are answered.
                        <br></br> <br></br>


                        I was drafted into the RFP response team and was given small assignments of collecting our capabilities, CVs or writing service descriptions.
                        Then I realized that there is this thing called Proposal Presentations (aka Orals) which make or break the deal and I wanted to get into those.
                        Thus started my journey into pre-sales and sales. After working for more than a decade in these processes I started feeling that the RFP process
                        itself can be improved greatly by a proper way of sharing the information between the vendor and customer.
                        <br></br> <br></br>


                        In essence an RFP process is simply a process where two parties come together on the same page with respect to the requirements,
                        price and contractual obligations. The whole exercise is designed to move two parties closer throughout the process. With the advances
                        in technology in processing text, numbers and images, I thought this process can be automated and accelerated. In other words we can push
                        the Envelope of the sourcing process into a higher performance zone.
                    </p>

                    <h3 className="w-full text-3xl md:text-xl mb-3 text-[#0656FE] md:my-10">
                        The name Nvelop
                    </h3>

                    <p className={beVietnamPro300.className + ' text-lg md:text-lg text-[#302c42] text-opacity-75 '}>
                        Those who have seen the movie Top Gun might have heard “We're going to teach you to fly the F-14 right to the edge of the envelope,
                        faster than you've ever flown before”. In aviation, the term "flight envelope" refers to the operational limits of an aircraft, including
                        its speed, altitude, and maneuverability. This concept was famously pushed during test flights by pilots who wanted to see how far they could
                        go without losing control—often referred to as "pushing the envelope." One of the most iconic instances of this was Chuck Yeager’s flight in 1947
                        when he broke the sound barrier in the Bell X-1 aircraft, essentially expanding the known flight envelope of that time. Envelopes exist so they
                        can be pushed further.

                    </p>

                    <img className='w-full md:w-[70%] py-14' src="/blog/Flight_Envelope.jpg" />

                    <p className={beVietnamPro300.className + ' text-lg md:text-lg text-[#302c42] text-opacity-75 '}>
                        Also Envelope is used in the context of procurement where terms such as single envelope, double envelope or three envelope bidding, where bidding
                        is done in Multiple stages. With the advent of AI there is now an opportunity to push the envelope of business performance into a higher zone and
                        this is the reason why we started Nvelop.
                        <br></br> <br></br>
                        The name Nvelop was chosen because it represents to us the ability to push the envelope into a higher velocity while keeping the stability intact
                        which is what most business initiatives are about. Businesses want to grow, projects need to succeed and collaboration needs to work seamlessly
                        towards one common goal. We envision Nvelop to be that platform which makes it happen.
                    </p>


                </div>

                <div className="w-full h-full flex flex-col justify-start items-center px-4 lg:items-start lg:px-8 mt-10">
                    <img className="w-[15rem] mb-4 shadow rounded-full" src={'/founders/Nithin.jpg'} />
                    <h3 className="text-4xl text-center mb-2">Nithin Nadagouda</h3>
                    <h5 className={beVietnamPro300.className + " text-sm mb-4"}>September 4, 2024</h5>
                    <h4 className={beVietnamPro300.className + " text-lg mb-4"}>Founder & Head of Sales</h4>
                </div>

            </div>
            <div className={beVietnamPro600.className}>
                <AboutUs />
                <Footer />
            </div>
        </div>
    );
}

export default Blog2;
