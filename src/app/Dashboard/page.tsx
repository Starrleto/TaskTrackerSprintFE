'use client'

import NavbarComponent from '@/Components/NavbarComponent'
import React, {useState} from 'react'
import { Avatar, Button, Modal, ModalHeader, TextInput } from "flowbite-react";
import { BoardComponent } from '@/Components/BoardComponent';
import LoginNavbarComponent from '@/Components/LoginNavbarComponent';

const Dashboard = () => {

  const [openModal, setOpenModal] = useState(false);

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
        <div className='text-center'>
           <Avatar rounded size="xl" />
           <h1>Username</h1>
           <p>Joined </p>
        </div>
        <div className='text-center'>

          <div className='border-2 border-black p-8 ml-4 mr-4'>
            <div className='flex items-center justify-center mb-7'>
              <h1 className='text-4xl font-bold'>MY BOARDS</h1>
              <p className='text-6xl font-extralight cursor-pointer' onClick={() => setOpenModal(true)}>+</p>
            </div>
            <BoardComponent name="Example"></BoardComponent>
          </div>

        </div>
      </div>

      <Modal show={openModal} onClose={() => setOpenModal(false)}>
        <Modal.Body>
        <Modal.Header>
          <div className="grid lg:grid-cols-2 space-x-5 p-10">

            <div className='flex flex-col justify-center items-center space-y-3 text-center'>
              <h1>Enter Code</h1>
              <TextInput type="text" placeholder="Enter Code" />
              <Button color="success" onClick={joinBoard}>JOIN</Button>
            </div>
            <div className='flex flex-col justify-center items-center space-y-3'>
              <h1>Create New</h1>
              <TextInput type="text" placeholder="Name Board" />
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