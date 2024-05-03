'use client'

import React from 'react'
import AddIcon from '@mui/icons-material/Add';
import { Priority1 } from '@/Components/Priority1Component';
import { Priority2 } from '@/Components/Priority2Component';
import { Priority3 } from '@/Components/Priority3Component';
import { TaskCardComponent } from '@/Components/TasksCardComponent';
import { AddTaskModalComponent } from '@/Components/AddTaskModalComponent';
import { CustomFlowbiteTheme, Flowbite, Tooltip } from 'flowbite-react';
import LoginNavbarComponent from '@/Components/LoginNavbarComponent';
import { useAppContext } from '@/UserContext/Context';

const BoardsPage = () => {

    const data = useAppContext();

    const customTheme: CustomFlowbiteTheme = {
        tooltip: {
            "target": "w-fit",
            "animation": "transition-opacity",
            "arrow": {
                "base": "absolute z-10 h-2 w-2 rotate-45",
                "style": {
                    "dark": "bg-white",
                    "light": "bg-white",
                    "auto": "bg-white"
                },
                "placement": "-4px"
            },
            "base": "absolute z-10 inline-block rounded-lg px-3 py-2 text-sm font-medium shadow-sm",
            "hidden": "invisible opacity-0",
            "style": {
                "dark": "bg-gray-900 text-white dark:bg-gray-700",
                "light": "border border-gray-200 bg-white text-gray-900",
                "auto": "border border-gray-200 bg-white text-gray-900 dark:border-none dark:bg-gray-700 dark:text-white"
            },
            "content": "relative z-20"
        }
    }

    return (
        <div className='bg-mainBg h-screen'>

            <LoginNavbarComponent></LoginNavbarComponent>

            {/* OUR BOARD, PRIORITY BUTTONS AND ADD MODAL */}
            <div className='p-14 inline-flex'>
                <h1 style={{ fontFamily: 'Hammersmith' }} className='text-4xl mt-2'>{data.boardName}</h1>
                <div className='ml-2 inline-flex'>
                    <Priority1></Priority1>
                    <Priority2></Priority2>
                    <Priority3></Priority3>
                    {/* <Priority1 />
                    <Priority2 />
                    <Priority3 /> */}
                </div>
                <div>
                    <Flowbite theme={{ theme: customTheme }}>
                        <Tooltip
                            aria-multiline
                            className='bg-white text-black p-10 px-20 border'
                            content={
                                <div>
                                    <div style={{ fontSize: '20px', fontFamily: 'Hammersmith' }}>Invite Code</div>
                                    <div className='text-center mt-3' style={{ fontSize: '30px', color: 'blue', fontFamily: 'Holtwood' }}>code</div>
                                </div>
                            }
                            trigger='click'
                            placement="right"
                        >
                            <AddIcon className='cursor-pointer' style={{ fontSize: 50 }} />
                        </Tooltip>
                    </Flowbite>

                </div>
                <div>
                </div>
            </div>

            {/* TO DO */}
            <div style={{ fontFamily: 'Hammersmith' }} className=' px-32 pb-12'>
                <div className='bg-toDoBg h-64 rounded-md overflow-y-scroll'>
                    {/* TO DO TITLE */}
                    <div>
                        <div className='inline-flex absolute'>
                            <p className=' text-3xl p-2 pl-5'> To-do </p>
                            <div className='mt-2'>
                                <AddTaskModalComponent />
                            </div>
                        </div>
                    </div>
                    {/* TASK COMPONENT CARDS */}
                    <div className='inline-flex pl-8 pr-5 mt-14'>
                        <TaskCardComponent />
                        <TaskCardComponent />
                        <TaskCardComponent />
                        <TaskCardComponent />
                        <TaskCardComponent />
                        <TaskCardComponent />
                    </div>
                </div>
            </div>

            {/* IN PROGRESS */}
            <div style={{ fontFamily: 'Hammersmith' }} className=' px-32 pb-12'>
                <div className='bg-inProgBg h-64 rounded-md overflow-y-scroll'>
                    {/* IN PROGRESS TITLE */}
                    <div>
                        <div className='inline-flex absolute'>
                            <p className=' text-3xl p-2 pl-5'> In Progress </p>
                        </div>
                    </div>
                    {/* TASK COMPONENT CARDS */}
                    <div className='inline-flex pl-8 pr-5 mt-14'>
                        <TaskCardComponent />
                        <TaskCardComponent />
                        <TaskCardComponent />
                        <TaskCardComponent />
                        <TaskCardComponent />
                        <TaskCardComponent />
                    </div>
                </div>
            </div>

            {/* COMPLETED */}
            <div style={{ fontFamily: 'Hammersmith' }} className=' px-32 pb-12'>
                <div className='bg-completedBg h-64 rounded-md overflow-y-scroll'>
                    {/* COMPLETED TITLE */}
                    <div>
                        <div className='inline-flex absolute'>
                            <p className=' text-3xl p-2 pl-5'> Completed </p>
                        </div>
                    </div>
                    {/* TASK COMPONENT CARDS */}
                    <div className='inline-flex pl-8 pr-5 mt-14'>
                        <TaskCardComponent />
                        <TaskCardComponent />
                        <TaskCardComponent />
                        <TaskCardComponent />
                        <TaskCardComponent />
                        <TaskCardComponent />
                    </div>
                </div>
            </div>

            <div>
            </div>



        </div>
    )
}

export default BoardsPage
