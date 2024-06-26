'use client'
import NavbarComponent from "../Components/NavbarComponent";
import React, { useContext, useState } from 'react';
import Image from 'next/image'
import eyeCon from '../assets/EyeSlash.png'
import { Button, Label, TextInput } from "flowbite-react";
import { useRouter } from "next/navigation";
import {Login, addUser} from '../DataServices/script';
import { useAppContext } from "@/UserContext/Context";

export default function Home() {

  const router = useRouter();
  const [show, setShow] = useState<boolean>(false);
  const [show2, setShow2] = useState<boolean>(false);
  const [login, setLogin] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [password2, setPassword2] = useState<string>("");

  const data = useAppContext();

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

  async function submit() {
    
    // Login User--------------------------------
    if(login){

      if(username == "" || password == ""){ // Blank Error
        setError("Please enter your username and password.");
      }
      else{
        
        const loginInfo:LoginDTO = {
          username:username, 
          password:password
        }

        if(await Login(loginInfo)){
          //Successful Login
          setError("");
          router.push('/Dashboard');
          data.setUser(username);

        }
        else{
          //Unsuccessful Login
          setError("Incorrect Username or Password.");
        }

      }

    }
    // Add User---------------------------------------
    else{

      if(password != password2){ // Unmatched Passwords error
        setError("Your passwords do not match."); return;
      } else { setError(""); }

      if(username == "" || password == "" || password2 == ""){ // Blank Error
        setError("Please fill out every field.");
      }
      else{

        const newUser:addDTO = {
          id:0, 
          username:username, 
          password:password
        }

        if(await addUser(newUser)){
          //Sucessful Create Account
          setError("");
          setLogin(true);
        }
        else{
          //Unsuccessful Create Account
          setError("Your account could not be created.");
        }
      }

    }
  }


  return (
    <div>
        <NavbarComponent></NavbarComponent>
        
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
    </div>
  );
}
