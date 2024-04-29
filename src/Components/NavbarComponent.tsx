'use client'
import React from 'react'
import Logo from '../assets/Logo.png';
import Image from 'next/image'

const NavbarComponent = () => {
  return (
    <div className='bg-green-300'>
        <Image src={Logo} alt="Logo"></Image>
    </div>
  )
}

export default NavbarComponent