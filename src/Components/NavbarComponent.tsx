'use client'
import React from 'react'
import Logo from '../assets/Logo.png';
import Image from 'next/image'

const NavbarComponent = () => {
  return (
    <div className='green-gradient-bg flex p-4'>
        <Image src={Logo} alt="Logo" className='w-1/6'></Image>
    </div>
  )
}

export default NavbarComponent