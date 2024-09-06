import React from 'react';
import Modal from 'react-modal'

const PrivacyModal = ({
    isOpen,
    setIsOpen
}: {
    isOpen: boolean,
    setIsOpen: Function
}) => {
    return (
        <Modal
            style={{
                overlay: {zIndex: 1000}
            }}
            className={' shadow-xl shadow-slate-300 p-10 h-[60%] w-[98%] px-3 md:px-10 md:w-1/2 lg:w-1/3 left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2 relative flex flex-col justify-center items-center border rounded-md bg-white text-black'}
            isOpen={isOpen}
            onRequestClose={() => setIsOpen(false)}
            shouldFocusAfterRender={false}
            closeTimeoutMS={200}
        >

            <span className='text-xl font-semibold mb-2'>Privacy Policy</span>
            <iframe className='w-full h-full' src='https://www.iubenda.com/privacy-policy/56813647' />



            <span onClick={() => setIsOpen(false)} className='absolute top-0 right-0 m-3 select-none hover:cursor-pointer'>X</span>
        </Modal>
    );
}

export default PrivacyModal;
