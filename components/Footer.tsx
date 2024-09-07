"use client"
import React, { useState } from 'react'
import Modal from 'react-modal'
import PrivacyModal from './modals/PrivacyModal'

export default function Footer() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <footer className='w-[100%] flex justify-center text-center text-xs md:text-base md:h-20 h-16 items-center bg-[#0656FE] bottom-0 text-white'>
      <PrivacyModal isOpen={isOpen} setIsOpen={setIsOpen} />

      © Nvelop Technologies Oy. All rights reserved. &nbsp;<span className='hover:cursor-pointer hover:underline' onClick={() => setIsOpen(true)}>Privacy Policy</span>
    </footer>
  )
}
