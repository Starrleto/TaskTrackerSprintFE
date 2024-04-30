'use client'
import React from 'react'
import Logo from '../assets/Logo.png';
import Image from 'next/image'
import { Dropdown, Avatar } from "flowbite-react";
import { useRouter } from "next/navigation";

const LoginNavbarComponent = () => {

  const router = useRouter();

  function home() {
    router.push("/")
  }

  return (
    <div className='green-gradient-bg flex p-4 justify-between items-center'>
        <Image src={Logo} alt="Logo" className='w-1/6'></Image>
        <Dropdown label="" dismissOnClick={false} renderTrigger={() => <div><Avatar rounded /></div>}>
          <Dropdown.Item className='font-bold'>PROFILE</Dropdown.Item>
          <Dropdown.Item className='text-green-500 font-bold'>CREATE BOARD</Dropdown.Item>
          <Dropdown.Item className='text-red-500 font-bold' onClick={home}>LOG OUT</Dropdown.Item>
        </Dropdown>
    </div>
  )
}

export default LoginNavbarComponent