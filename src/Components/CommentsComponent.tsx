import { Avatar } from '@mui/material'
import React from 'react'

const CommentsComponent = () => {
    return (
        <div className='rounded-lg mx-14'>

            <div className='inline-flex p-5'>
                <div className=" px-5">
                    <Avatar className="border-black border-2"></Avatar>
                </div>
                <p className='mt-2'> Username </p>
                <p className='px-5 mt-2 text-gray-500 '> dates </p>

                <p className=' mt-2 text-gray-500'> time </p>
            </div>

            <div className='px-10'>
                <p> comments go here </p>
            </div>

            <div className='px-10 mt-2 text-gray-500'>
                Reply
            </div>


        </div>
    )
}

export default CommentsComponent
