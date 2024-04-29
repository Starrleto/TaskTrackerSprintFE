'use client'
import React from 'react'
import { Button, Checkbox, Label, TextInput } from "flowbite-react";

const logincomponent = () => {
  return (
    <div className='flex justify-center flex-col items-center p-20'>
            
        <div className='bg-green-300 p-16 w-1/2'>

          <h1 className='text-4xl text-center mb-5 holtwood'>Create Account</h1>

        <div className='w-full'>
            <div className="mb-2 block w-full">
              <Label htmlFor="email1" value="Username" />
            </div>
            <TextInput id="email1" type="text" />
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="password1" value="Password" />
            </div>
            <TextInput id="password1" type="password" />
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="password2" value="Confirm Password" />
            </div>
            <TextInput id="password2" type="password" />
          </div>

          <div className='flex justify-center items-center mt-4'>
            <Button type="submit">CREATE</Button>
          </div>
          <p className='text-center'>Already have an account? <a>Login</a></p>
        </div>

    </div>
  )
}

export default logincomponent