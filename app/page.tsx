import AboutUs from "@/components/AboutUs";
import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";
import { Be_Vietnam_Pro } from "next/font/google";
import Image from "next/image";
import { FaLinkedinIn } from "react-icons/fa";

const beVietnamPro700 = Be_Vietnam_Pro({
  weight: '700',
  subsets: ['latin']
})

const beVietnamPro600 = Be_Vietnam_Pro({
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


export default function Home() {
  return (
    <div className='w-full h-full'>
      <div className={beVietnamPro600.className + ' relative pt-5 px-5 md:px-10 flex flex-col justify-center items-center'}>
        <NavBar />

        <div id="main" className='w-full h-full flex flex-col md:flex-col lg:flex-row justify-center items-center md:px-20 mt-5 mb-5 animated animatedFadeInUp fadeInUp px-5 border-b border-[#0656FE]'>

          <div className='flex flex-col items-start justify-center md:justify-start md:pl-20 lg:pl-32'>
            <h1 className='text-5xl md:text-5xl lg:text-7xl pl-12 md:px-0'>AI-powered</h1>
            <h1 className='text-5xl md:text-5xl lg:text-7xl pl-12 md:px-0 text-[#f7922f] mb-5 md:mb-10'>IT sourcing</h1>
            <p className={beVietnamPro300.className + ' text-lg md:text-xl text-[#302c42] text-opacity-75 px-12 md:px-0'}>Run accelerated, more impactful IT sourcing with automated, AI-driven SaaS platform.</p>
          </div>

          <div className='w-full flex justify-center items-center mb-20'>
            <img className='w-full md:w-[60rem]' src='./flat/sfmikko-01.svg' />
          </div>

        </div>

        <div className='w-full flex flex-col items-center justify-center mt-20' id='how-it-works-content'>

          <div className='w-full text-[#0656FE] text-center text-3xl md:text-5xl mb-5 animated animatedFadeInUp fadeInUpDelay300'>
            <h2 className={'pb-5 ' + beVietnamPro600.className}>How it works</h2>
          </div>

          <div className='w-full md:w-[70%] lg:w-[85%] lg:space-x-10  flex flex-col space-y-5 lg:space-y-0 lg:flex-row justify-center items-center mb-5 animated animatedFadeInUp fadeInUpDelay600'>

            <HowItWorkCard
              title="From idea to requirements"
              content="Our AI engine helps you develop solutions that align with your business
                objectives, whether you're seeking groundbreaking innovations from the market or want to define
                specific requirements for the RFP."
              imagePath="./flat/sfmikko-icon-05.svg"
            />

            <HowItWorkCard
              title="Selecting vendors"
              content="With Nvelop automating your sourcing processes, you can easily broaden your vendor pool 
              for RFIs and RFPs and uncover new suppliers bringing you the latest innovations to achieve your business goals"
              imagePath="./flat/sfmikko-icon-01.svg"
            />

            <HowItWorkCard
              title="Managing the RFX process"
              content="Create complete RFPs with ease using our AI-powered tools. Seamlessly submit to 
              selected vendors, manage vendor communications, and streamline Q&A interactions with intelligent automation."
              imagePath="./flat/sfmikko-icon-02.svg"
            />

            <HowItWorkCard
              title="Decide & negotiate"
              content="Our powerful AI engine analyzes and compares the received proposals, recommending the optimal 
              vendor for your needs. It also helps you speed up contract negotiations."
              imagePath="./flat/sfmikko-icon-04.svg"
            />

          </div>

          <div className='w-full text-[#0656FE] text-center text-2xl md:text-5xl mt-16 mb-5 '>
            <h2 className='pb-5'>Enchanced security & compliance from day one</h2>
          </div>

          <img className="w-full md:w-[25rem]" src="./flat/sfmikko-icon-10.svg" />


          <div className="h-full w-full lg:w-[80%] lg:px-4 lg:space-x-10 flex flex-col space-y-5 lg:space-y-0 lg:flex-row justify-center items-center mb-5">
            <EnchancedCard
              title="Enhanced Data Security"
              content={[
                {
                  title: 'Protect Confidential Information',
                  text: "No more sending confidential documents via email, all content is managed in the secure SaaS environment."
                },
                {
                  title: 'Secure Access Controls',
                  text: "Ensure only authorized personnel, also at the vendor side, can access your confidential material."
                }
              ]}
            />

            <EnchancedCard
              title="Improved Compliance"
              content={[
                {
                  title: 'Audit Trails and Reporting',
                  text: "Maintain clear audit trails on decisions through the sourcing life-cycle and facilitate compliance reporting."
                },
                {
                  title: 'Document Management',
                  text: "Keep compliance-related sourcing documents up-to-date and accessible with centralized storage.  "
                },
                {
                  title: 'Improved alignment',
                  text: "Share real-time view into the procurement activities to maintain better visibility over the sourcing process."
                },
              ]}
            />

            <EnchancedCard
              title="Policy Enforcement"
              content={[
                {
                  title: 'Automated Policy Application',
                  text: "Enforce company policies automatically to ensure your IT sourcing adheres to predefined rules."
                },
                {
                  title: 'Approval Workflows',
                  text: "Utilize automated approval workflows to ensure proper reviews and approvals."
                }
              ]}
            />
          </div>
        </div>

        <div className='w-full lg:w-[80%] flex flex-col items-center justify-center mt-20 pt-10 ' id='why-nvelop'>
          <div className='w-full text-[#0656FE] text-center text-3xl md:text-5xl pb-14 mb-10 border-b border-[#0656FE]'>
            <h2 className={'pb-5 ' + beVietnamPro600.className}>Why Nvelop</h2>
          </div>

          <div className='w-full flex flex-col justify-center items-center'>

            <FeatureCard
              title='Faster Time to Market'
              content="Optimize your procurement process with automated solution exploration, requirement creation, 
              RFX process management, and proposal evaluation, leading to faster project completion and substantial time and resource savings."
              subtitle='RESPOND QUICKLY TO BUSINESS NEEDS'
              imagePath='./flat/sfmikko-02.svg'
            />

            <FeatureCard
              title='Better decisions'
              content="Nvelop offers collaboration tools, automated workflows, and AI-driven sourcing advisory to help organizations to design
               and select the perfect solutions and vendors for their unique needs. The system also helps you systematically manage and develop vendor performance."
              subtitle='AI_POWERED DECISION MAKING'
              imagePath='./flat/product-main.svg'
            />

            <FeatureCard
              title='Significant cost savings'
              content="Our system streamlines sourcing strategies, minimizing manual effort and reducing reliance on external advisors. By incorporating a broader range of vendors into the RFX process, 
              it enhances negotiation outcomes and uncovers cost-saving opportunities, ultimately leading to substantial savings."
              subtitle='OPTIMIZE THE SOURCING AND CONTRACT'
              imagePath='./flat/sfmikko-04.svg'
            />

            <FeatureCard
              title='Improved compliance and security'
              content="Nvelop offers enhanced visibility and control over procurement activities while ensuring adherence to organizational sourcing policies and guidelines. 
              The system provides comprehensive audit trails and automated sign-offs, features often lacking in traditional manual processes."
              subtitle='ACHIEVE REGULATORY COMPLIANCE EARLY'
              imagePath='./flat/sfmikko-05.svg'
            />


          </div>

        </div>

        <div className='w-full lg:w-[80%] flex flex-col items-center justify-center mt-20 pt-10 border-t border-[#0656FE] border-b' id='founders'>
          <div className='w-full text-[#f7922f] text-center text-3xl md:text-5xl pb-10 '>
            <h2 className={'pb-5 ' + beVietnamPro600.className}>Founders</h2>
          </div>


          <div className="w-full lg:w-5/6 xl:w-full flex flex-col md:flex-row justify-center items-center">

            <FounderCard
              name="Nithin Nadagouda"
              title="CSO"
              content="Nithin has 22 years of experience IT Services and Technology. He has been in sales leadership positions at leading IT companies.
                Previously he was  Vice President, Large Deals at Capgemini. He holds an MBA in Strategy & Finance from Aalto University."
              imagePath="./founders/Nithin.jpg"
              linkedin="https://www.linkedin.com/in/n1think/"
            />

            <FounderCard
              name="Mikko Valorinta"
              title="CEO"
              content="Mikko has 25 years of experience in IT and consulting. He has held executive positions in Enfo & Epical where he was CEO and in Capgemini where he 
              was EVP and CEO of Capgemini Finland.Mikko holds a Doctor of Science (Tech) degree from Aalto University."
              imagePath="./founders/Picture1.png"
              linkedin="https://www.linkedin.com/in/mvalorinta/"
            />

            <FounderCard
              name="Ilkka Uuhiniemi"
              title="CTO"
              content="Ilkka has 25 years of experience in IT. Previously worked in different leading technical roles in OP, Capgemini and Posti. 
              Ilkka has been working hands on developing complex software products with a keen interest in Automation and AI."
              imagePath="./founders/BWPicture1.png"
              linkedin="https://www.linkedin.com/in/ilkka-uuhiniemi-b1a52618/"
            />
          </div>
        </div>

        <div className="my-20 w-full md:w-[70%] md:space-x-28 flex justify-center items-center flex-col md:flex-row" id="AI">
          <div className="w-full md:w-[40rem]">
            <h3 className="text-lg text-center md:text-start  text-[#0656FE] mb-5">OUR COMMITMENT TO RESPONSIBLE AI</h3>
            <p className={beVietnamPro300.className + ' text-lg text-[#302c42] text-opacity-75 px-4 md:px-0 mb-10 md:mb-0'} >
              At Nvelop, we are dedicated to transforming services through technology. We are committed to the responsible development and use of artificial intelligence
              (AI) in our products and services, in line with our mission and common principles of responsible AI.
            </p>
          </div>

          <div className="w-[10rem]">
            <img className="w-full" src="./flat/Asset1.png" alt="AI-Storage" />
          </div>
        </div>


        <div className="my-20 w-full md:w-[80%] flex justify-center items-center flex-col md:flex-row border-[#0656FE] border-t border-b py-20" id="sponsers">

          <div className="w-full text-[#f7922f] text-center text-3xl md:text-5xl ">
            <h2 className={'pb-5 ' + beVietnamPro600.className}>Backed By</h2>
          </div>

          <div className="w-full flex justify-center items-center">
            <img className="w-[20rem]" src="./Logos/ANTLER.svg" alt="AI-Storage" />
          </div>

        </div>

        <div className='flex flex-col md:space-x-10 md:flex-row justify-center items-center mt-5 mb-10 md:mb-20' id="demo-request">

          <div className='w-full md:w-[35rem] flex flex-col justify-start mb-10'>
            <h3 className='text-2xl md:text-4xl text-[#0656FE] mb-10'>Interested in a Demo?</h3>
            <img className='w-[25rem] mb-6' src='./flat/Screen2.png' />
            <p className={beVietnamPro300.className + ' text-[#302c42] text-opacity-75'}>We look forward to telling you more about our AI-native SaaS platform and discussing your plans for future-proofing your IT sourcing. </p>
          </div>

          <div className={beVietnamPro300.className + ' w-full md:w-[35rem] text-xl'}>
            <form className='w-full md:w-[35rem] flex flex-col'>

              <label className='mb-2'>First Name</label>
              <input required className={'h-10 pl-3 border border-gray-800 rounded mb-3 ' + beVietnamPro400.className} />

              <label className='mb-2'>Last Name</label>
              <input required className={'h-10 pl-3 border border-gray-800 rounded mb-3 ' + beVietnamPro400.className} />

              <label className='mb-2'>Business Email Address</label>
              <input required type='email' className={'h-10 pl-3 border border-gray-800 rounded mb-3 ' + beVietnamPro400.className} />

              <label className='mb-2' >Message</label>
              <textarea rows={3} required className={' pt-1 pl-3 border border-gray-800 rounded mb-3 ' + beVietnamPro400.className} />

              <button className='bg-[#0656FE] py-5 text-white'>Submit</button>

            </form>
          </div>

        </div>

      </div>

      <div className={beVietnamPro600.className}>
        <AboutUs />
        <Footer />
      </div>
    </div>
  );
}


async function HowItWorkCard({
  title, content, imagePath
}: {
  title: string,
  content: string,
  imagePath: string
}) {
  return (
    <div className="w-full lg:w-1/4 h-[40rem] flex flex-col justify-center items-center px-0 lg:px-7 py-16  shadow-[0_3px_10px_rgb(0,0,0,0.2)] rounded-xl">
      <img className="w-[10rem] mb-2" src={imagePath} />
      <h3 className="text-3xl mb-3 text-center">{title}</h3>
      <p className={beVietnamPro300.className + ' px-10 lg:px-0 text-lg text-[#302c42] text-opacity-75'}>
        {
          content
        }
      </p>
    </div>
  )
}


async function EnchancedCard({
  title, content,
}: {
  title: string,
  content: {
    title: string,
    text: string
  }[],
}) {
  return (
    <div className="w-full lg:w-1/3 h-full lg:h-[50rem] xl:h-[40rem] flex flex-col justify-start items-start px-7 lg:px-7 py-16  shadow-[0_3px_10px_rgb(0,0,0,0.2)] rounded-xl">
      <h3 className=" w-full text-3xl mb-3 text-center md:text-start ">{title}</h3>

      <div className="w-full flex flex-col justify-start md:justify-center items-start  ">
        {
          content.map((x, i) => {
            return (
              <>
                <h4 className={beVietnamPro600Italic.className + " text-lg text-[#302c42] text-opacity-75"}>{x.title}:</h4>
                <p className={beVietnamPro300.className + ' text-lg text-[#302c42] text-opacity-75 mb-5'}>{x.text}</p>
              </>
            )
          })
        }
      </div>
    </div>
  )
}

async function FeatureCard({
  title, subtitle, content, imagePath
}: {
  title: string,
  subtitle: string,
  content: string,
  imagePath: string
}) {
  return (
    <div className='flex border flex-col-reverse md:odd:flex-row md:even:flex-row-reverse justify-between items-center w-full md:w-5/6 even:bg-white even:border-0 bg-[#F9F7FF] rounded-3xl md:rounded-xl p-5 md:p-10 mb-5 '>
      <div className='w-full md:w-[50%]'>
        <h4 className='text-sm md:text-xl text-center md:text-start  text-[#0656FE]'>{subtitle}</h4>
        <h3 className='text-2xl md:text-3xl lg:text-4xl text-center md:text-start text-[#f7922f] mb-5 md:mb-10'>{title}</h3>
        <p className={beVietnamPro300.className + ' text-center md:text-start text md:text-xl text-[#302c42] text-opacity-75'}>{content}</p>
      </div>

      <div className='w-full md:w-[30rem] flex justify-center items-center mb-3 md:mb-0'>
        <img src={imagePath} />
      </div>
    </div>
  )
}


async function FounderCard({
  name, title, content, linkedin, imagePath
}: {
  name: string,
  title: string,
  content: string,
  linkedin: string,
  imagePath: string
}) {
  return (
    <div className="relative w-full lg:w-1/3 h-full xl:h-[30rem] flex flex-col justify-start items-center px-4 lg:px-8 mb-16 ">
      <img className="w-[10rem] mb-4 shadow rounded-full" src={imagePath} />
      <h3 className="text-4xl text-center mb-2">{name}</h3>
      <h4 className="text-2xl mb-4">{title}</h4>
      <p className={beVietnamPro400.className + ' px-2 md:px-8 lg:ml-4 mb-8 text-center lg:text-start'}>
        {content}
      </p>
      <a target='_blank' href={linkedin} className="lg:absolute lg:bottom-0">
        <FaLinkedinIn color="#0077B5" className="w-6 h-6" />
      </a>
    </div>
  )
}