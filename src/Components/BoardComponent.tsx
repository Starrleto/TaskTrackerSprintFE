import React from 'react'
import { useRouter } from "next/navigation";
import { useAppContext } from '@/UserContext/Context';
import { getTaskItems } from '@/DataServices/script';

export const BoardComponent = (props: props) => {

  const data = useAppContext();
  const router = useRouter();

  function viewBoard(){
    data.setBoardName(props.name)
    router.push("/BoardsPage");
    getTaskItems();
  }

  return (
    <div className='bg-green-200 p-6 cursor-pointer m-4' onClick={viewBoard}>
        
        <h1 className='text-4xl font-bold text-left'>{props.name}</h1>

    </div>
  )
}

interface props{
    name: string
}
