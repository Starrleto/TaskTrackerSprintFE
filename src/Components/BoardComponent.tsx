import React from 'react'

export const BoardComponent = (props: props) => {
  return (
    <div className='bg-green-200 p-6'>
        
        <h1 className='text-4xl font-bold text-left'>{props.name}</h1>

    </div>
  )
}

interface props{
    name: string
}
