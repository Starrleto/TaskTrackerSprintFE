import NavbarComponent from '@/Components/NavbarComponent'
import React from 'react'
import AddIcon from '@mui/icons-material/Add';
import { Priority1 } from '@/Components/Priority1Component';
import { Priority2 } from '@/Components/Priority2Component';
import { Priority3 } from '@/Components/Priority3Component';
import { TaskCardComponent } from '@/Components/TasksCardComponent';

const BoardsPage = () => {
    return (
        <div>

            <NavbarComponent />

            <div className='p-14 inline-flex'>
                <h1 className='text-3xl font-bold mt-2'>OUR BOARD</h1>
                <div className='ml-2 inline-flex'>
                    <Priority1 />
                    <Priority2 />
                    <Priority3 />
                </div>
                <div>
                    <AddIcon style={{ fontSize: 50 }} />
                </div>
                <div>
                </div>
            </div>

            <div>
                <TaskCardComponent/>
            </div>

            

        </div>
    )
}

export default BoardsPage
