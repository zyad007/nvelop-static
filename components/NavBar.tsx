"use client"
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';

const NavBar = () => {

    const [currentRoute, setCurrentRoute] = useState('')

    useEffect(() => {
        setCurrentRoute(window.location.href.replace(window.location.host, '.'))
    }, [])

    useEffect(() => {
        console.log(currentRoute);
    }, [currentRoute])

    const [isHidden, setIsHidden] = useState(true)


    return (
        <div className={'flex flex-wrap items-center justify-between mx-auto w-full'}>

            <a href='./'>
                <img src='./Logos/logo.png' className='w-[180px]' />
            </a>

            <button
                onClick={() => setIsHidden(!isHidden)}
                data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200" aria-controls="navbar-default" aria-expanded="false">
                <span className="sr-only">Open main menu</span>
                <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
                </svg>
            </button>

            <div className={' text-[16px]  text-[rgb(48, 44, 66)]  w-full md:block md:w-auto ' + (isHidden ? ' hidden' : '')} id="navbar-default">
                <ul className="flex justify-center flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white ">

                    <li>
                        <button className={' hover:text-[#9795A0] px-[22px] py-[12px] transition-all w-full' + (currentRoute.includes('./product') ? ' font-semibold bg-[#0656FE] rounded-lg text-white' : '')}>
                            <a href={'./product'} className=''>Product</a>
                        </button>
                    </li>

                    <li>
                        <button className={' hover:text-[#9795A0] px-[22px] py-[12px] transition-all w-full' + (currentRoute.includes('./#how-it-works-content') ? ' font-semibold bg-[#0656FE] rounded-lg text-white' : '')}>
                            <a href={'./#why-nvelop'} className=''>Benefits</a>
                        </button>
                    </li>

                    <li>
                        <button className={' hover:text-[#9795A0] px-[22px] py-[12px] transition-all w-full' + (currentRoute.includes('./blogs') ? ' font-semibold bg-[#0656FE] rounded-lg text-white' : '')}>
                            <a href={'./blogs'} className=''>Blog</a>
                        </button>
                    </li>

                    <li>
                        <button className={' hover:text-[#9795A0] px-[22px] py-[12px] transition-all w-full' + (currentRoute.includes('./careers') ? ' font-semibold bg-[#0656FE] rounded-lg text-white' : '')}>
                            <a href={'./careers'} className=''>Careers</a>
                        </button>
                    </li>
                </ul>

            </div>
        </div>
    );
}

export default NavBar;
