'use client'
import React, { useState } from 'react';
import eyeCon from '../assets/EyeSlash.png';
import Image from 'next/image'
import { Button, Checkbox, Label, TextInput } from "flowbite-react";

const logincomponent = () => {

  const [show, setShow] = useState<boolean>(false);
  const [login, setLogin] = useState<boolean>(false);

  function changePage() {
      setLogin(!login);
  }

  function setHidden() {
    setShow(!show);
  }

  return (
    <div className='flex justify-center flex-col items-center p-20'>
            
        <div className='bg-green-300 p-16 w-1/2 rounded-md'>

          <h1 className='text-4xl text-center mb-5 holtwood'>{login ? "Login" : "Create Account"}</h1>

        <div className='w-full'>
            <div className="mb-2 block w-full">
              <Label htmlFor="email1" value="Username" className='hammersmith' />
            </div>
            <TextInput id="email1" type="text" />
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="password1" value="Password" className='hammersmith' />
            </div>
            <div className='relative flex flex-col items-end'>
              <TextInput id="password1" type={show ? "text" : "password"} className='w-full'/>
              <Image src={eyeCon} alt="View password" className='absolute top-1 right-2 w-8 cursor-pointer' onClick={setHidden}></Image>
            </div>
          </div>
          <div className={login ? "hidden" : ""}>
            <div className="mb-2 block">
              <Label htmlFor="password2" value="Confirm Password" className='hammersmith' />
            </div>
            <div className='relative flex flex-col items-end'>
              <TextInput id="password2" type={show ? "text" : "password"} className='w-full' />
              <Image src={eyeCon} alt="View password" className='absolute top-1 right-2 w-8 cursor-pointer' onClick={setHidden}></Image>
            </div>
          </div>

          <div className='flex justify-center items-center m-4'>
            <Button type="submit" className='hammersmith'>{login ? "LOGIN" : "CREATE"}</Button>
          </div>
          <p className='text-center'>{login ? "Don't have an account?" : "Already have an account?"} <span onClick={changePage} className='underline cursor-pointer'>{login ? "Create one now!" : "Login"}</span></p>
        </div>

    </div>
  )
}

export default logincomponent