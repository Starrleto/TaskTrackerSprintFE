'use client'

import React, {useState} from 'react'
import { Avatar, Button, Modal, TextInput } from "flowbite-react";
import { BoardComponent } from '@/Components/BoardComponent';
import LoginNavbarComponent from '@/Components/LoginNavbarComponent';
import { useAppContext } from '@/UserContext/Context';

const Dashboard = () => {

  const [openModal, setOpenModal] = useState(false);
  const data = useAppContext();

  const[newBoardName, setNewName] = useState<string>("");
  const[code, setCode] = useState<string>("");

  function createBoard() {
    setOpenModal(false);
  }

  function joinBoard() {
    setOpenModal(false);
  }

  return (
    
    <div>
      <LoginNavbarComponent></LoginNavbarComponent>

      <div className='grid lg:grid-cols-2 mt-10'>
        <div className='text-center mb-8'>
           <Avatar rounded size="xl" />
           <h1 className='font-bold text-5xl p-4'>{data.user}</h1>
           <p className='font-bold text-2xl'>Joined </p>
        </div>
        <div className='text-center mb-8'>

          <div className='border-2 border-black p-8 ml-4 mr-4 h-full min-h-screen bg-white'>
            <div className='flex items-center justify-center space-x-4'>
              <h1 className='text-4xl font-bold'>MY BOARDS</h1>
              <p className='text-6xl font-extralight cursor-pointer' onClick={() => setOpenModal(true)}>+</p>
            </div>
            <BoardComponent name="Example"></BoardComponent>
            <BoardComponent name="ExampleTwo"></BoardComponent>
          </div>

        </div>
      </div>

      <Modal show={openModal} onClose={() => setOpenModal(false)}>
        <Modal.Body>
        <Modal.Header>
          <div className="grid lg:grid-cols-2 space-x-5 p-10">

            <div className='flex flex-col justify-center items-center space-y-3 text-center'>
              <h1>Enter Code</h1>
              <TextInput type="text" placeholder="Enter Code" onChange={(e) => (setCode(e.target.value))} />
              <Button color="success" onClick={joinBoard}>JOIN</Button>
            </div>
            <div className='flex flex-col justify-center items-center space-y-3'>
              <h1>Create New</h1>
              <TextInput type="text" placeholder="Name Board" onChange={(e) => (setNewName(e.target.value))} />
              <Button color="success" onClick={createBoard}>CREATE</Button>
            </div>

          </div>
        </Modal.Header>
        </Modal.Body>
      </Modal>

    </div>
  )
}

export default Dashboard