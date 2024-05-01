'use client'
import React, { useState } from 'react';
import eyeCon from '../assets/EyeSlash.png';
import Image from 'next/image'
import { Button, Label, TextInput } from "flowbite-react";
import { useRouter } from "next/navigation";

const LoginComponent = () => {

  const router = useRouter();
  const [show, setShow] = useState<boolean>(false);
  const [show2, setShow2] = useState<boolean>(false);
  const [login, setLogin] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [password2, setPassword2] = useState<string>("");

  function changePage() {
      setLogin(!login);
      setError("");
  }

  function setHidden() {
    setShow(!show);
  }

  function setHidden2() {
    setShow2(!show2);
  }

  function submit(){
    
    if(login){

      if(username == "" || password == ""){
        setError("Please enter your username and password.");
      }
      else{
        setError("");
        router.push('/Dashboard');
      }

    }
    else{

      if(password != password2){
        setError("Your passwords do not match."); return;
      } else { setError(""); }

      if(username == "" || password == "" || password2 == ""){
        setError("Please fill out every field.");
      }
      else{
        
      }

    }
  }

  return (
    <div className='flex justify-center flex-col items-center md:p-20'>
            
        <div className='green-bg p-2 md:p-16 md:w-1/2 rounded-md space-y-3 mt-12 md:mt-0'>

          <h1 className='text-4xl text-center mb-8 holtwood mt-10 md:mt-0'>{login ? "Login" : "Create Account"}</h1>
          <p className={error == "" ? "hidden" : "text-center text-red-600"}>{error}</p>

        <div className='w-full'>
            <div className="mb-2 block w-full">
              <Label htmlFor="email1" value="Username" className='hammersmith' />
            </div>
            <TextInput id="email1" type="text" onChange={(e) => setUsername(e.target.value)} />
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="password1" value="Password" className='hammersmith' />
            </div>
            <div className='relative flex flex-col items-end'>
              <TextInput id="password1" type={show ? "text" : "password"} className='w-full' onChange={(e) => setPassword(e.target.value)} />
              <Image src={eyeCon} alt="View password" className='absolute top-1 right-2 w-8 cursor-pointer' onClick={setHidden}></Image>
            </div>
          </div>
          <div className={login ? "hidden" : ""}>
            <div className="mb-2 block">
              <Label htmlFor="password2" value="Confirm Password" className='hammersmith' />
            </div>
            <div className='relative flex flex-col items-end'>
              <TextInput id="password2" type={show2 ? "text" : "password"} className='w-full' onChange={(e) => setPassword2(e.target.value)} />
              <Image src={eyeCon} alt="View password" className='absolute top-1 right-2 w-8 cursor-pointer' onClick={setHidden2}></Image>
            </div>
          </div>

          <div className='flex justify-center items-center pt-6'>
            <Button color="success" className='hammersmith' onClick={submit}>{login ? "LOGIN" : "CREATE"}</Button>
          </div>
          <p className='text-center'>{login ? "Don't have an account?" : "Already have an account?"} <span onClick={changePage} className='underline cursor-pointer'>{login ? "Create one now!" : "Login"}</span></p>
        </div>

    </div>
  )
}

export default LoginComponent;