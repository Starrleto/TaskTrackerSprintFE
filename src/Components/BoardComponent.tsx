import React from 'react'
import { useRouter } from "next/navigation";

export const BoardComponent = (props: props) => {

  const router = useRouter();

  function viewBoard(){
    router.push("/BoardsPage");
  }

  return (
    <div className='bg-green-200 p-6 cursor-pointer' onClick={viewBoard}>
        
        <h1 className='text-4xl font-bold text-left'>{props.name}</h1>

    </div>
  )
}

interface props{
    name: string
}
