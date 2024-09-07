"use client"
import React, { useEffect, useRef, useState } from 'react';
import { Be_Vietnam_Pro } from 'next/font/google'
import { getCookie, setCookie } from 'cookies-next';
import Modal from 'react-modal'
import PrivacyModal from './modals/PrivacyModal';

const beVietnamPro = Be_Vietnam_Pro({
    weight: '600',
    subsets: ['latin']
})

const Cookies = () => {
    const [isHidden, setIsHidden] = useState<boolean>(true)

    const [isOpen, setIsOpen] = useState(false)

    useEffect(() => {
        console.log(getCookie('cookie'));
        if (!getCookie('cookie')) setIsHidden(false)
    }, [])

    function handleCookies(state: boolean) {
        setCookie('cookie', state);
        setIsHidden(true)
        setIsOpen(false)
    }
    return (
        <div hidden={isHidden} className={'fixed bottom-0 w-full flex flex-col justify-center items-center z-10 ' + beVietnamPro.className}>
            <PrivacyModal isOpen={isOpen} setIsOpen={setIsOpen} />

            <div hidden={isHidden} className='w-[98%] md:w-[60%] border-2 border-blue-600 mb-3 shadow-lg py-5 px-5 rounded bg-white' id='cookies'>
                <div className='text-sm px-5'>
                    We use cookies to enhance your browsing experience, personalize content, provide social media features, and analyze our traffic.
                    By continuing to use our site, you agree to our use of cookies. You can manage your preferences and learn more about the cookies we use by clicking 'Cookie Settings'.
                    Your privacy is important to us, and you can opt out of certain types of cookies at any time.
                    <span onClick={() => setIsOpen(true)} className='text-blue-600 hover:cursor-pointer hover:underline' >  Privacy Policy </span>
                </div>
                <div className='flex justify-center items-center space-x-3 mt-5'>
                    <button className='px-[16px] py-[12px] border-2 border-blue-600 text-blue-600 hover:cursor-pointer rounded hover:text-blue-500' onClick={() => handleCookies(true)}>
                        Reject Cookies
                    </button>
                    <button className='px-[16px] py-[12px] bg-blue-600 text-white hover:cursor-pointer rounded hover:bg-blue-500 transition-all ' onClick={() => handleCookies(false)}>
                        Accept Cookies
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Cookies;
