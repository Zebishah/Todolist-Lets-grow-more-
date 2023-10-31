import React, { useRef, useState, useEffect } from 'react'
import Task from './Task'

const TodoList = (props) => {
    let task = useRef(null);
    let data = [];
    let count;
    let [tasks, setTasks] = useState(() => {
        data = JSON.parse(localStorage.getItem('task')) || [];
        return data;
    });



    let delteTask = (index) => {
        data = JSON.parse(localStorage.getItem('task')) || [];

        data.splice(index, 1);
        setTasks(data)
        localStorage.setItem('task', JSON.stringify(data));
    }
    let addTask = () => {
        const newTask = task.current.value.trim();

        if (newTask === "") {
            alert("Task cannot be empty");
            return;
        }

        const existingTask = tasks.find((t) => t.task === newTask);

        if (existingTask) {
            alert("This task already exists");
        } else {
            const updatedTasks = [...tasks, { task: newTask }];
            setTasks(updatedTasks);
            localStorage.setItem('task', JSON.stringify(updatedTasks));
            task.current.value = "";
        }
    }

    return (
        <div className='w-full overflow-x-hidden flex flex-col justify-center items-center gap-y-6 '>
            <h1 className='text-[#ff6464] text-xl font-custom'>Todo-List(Task Managing platform)</h1>
            <div className='w-[85%] flex flex-col gap-y-6 justify-center items-center '>
                <div className=' w-[50%] flex flex-row gap-x-1 '>
                    <input type="text" placeholder='Enter your new task...' className='p-4 w-full bg-[#ff6464] text-white font-custom text-sm focus:ring-1 ring-white placeholder:text-white placeholder:font-custom rounded-lg outline-none border-none' ref={task} />
                    <input type="button" value='Add-Task' className='p-4 cursor-pointer w-[40%] bg-[#ff6464] text-white font-custom text-sm focus:ring-0 ring-white rounded-lg hover:text-[#ff6464] hover:bg-white transition-all duration-300 ease-in-out' onClick={addTask} />
                </div>
                <div className='bg-[#ff6464] gap-y-6 w-[50%] flex flex-col p-4 rounded-lg shadow-sm shadow-black'>
                    {tasks.length === 0 && <h1 className=' text-white font-custom text-xl text-center items-center p-4w-full '>No Tasks to display... Please Add some Tasks from above</h1>}
                    {tasks.map((tak, index) => {
                        return <Task credentials={tak.task} delteTask={delteTask} index={index} />
                    })}
                </div>
            </div>
        </div>
    )
}

export default TodoList