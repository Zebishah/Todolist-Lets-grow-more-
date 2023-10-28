import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faTrash, faXmark } from '@fortawesome/free-solid-svg-icons'
const Task = (props) => {

    const [isChecked, setIsChecked] = useState(() => {
        const storedChecked = JSON.parse(localStorage.getItem(`task_${props.index}`) || 'false'); // Use 'false' as the default value if no data is found.
        return storedChecked !== null ? storedChecked : false;
    });


    useEffect(() => {
        // Update local storage when isChecked changes.
        localStorage.setItem(`task_${props.index}`, JSON.stringify(isChecked));
    }, [isChecked, props.index]);



    const check = (index) => {
        setIsChecked(!isChecked);
    };

    return (
        <div className='flex flex-row gap-x-2 w-full justify-between p-2 rounded-lg shadow-sm shadow-black' key={props.index}>
            <p className={`text-white text-xl font-custom cursor-pointer ${isChecked ? 'line-through' : ''}`}>{props.credentials}</p>
            <div className='flex flex-row gap-x-4 justify-center items-center '>
                <FontAwesomeIcon icon={isChecked ? faXmark : faCheck} className='text-white font-custom font-bold text-lg cursor-pointer hover:shadow-sm hover:shadow-black transition-all duration-300 ease-in-out p-2 rounded-full' onClick={check} />
                <FontAwesomeIcon icon={faTrash} className='text-white font-custom text-lg cursor-pointer hover:shadow-sm hover:shadow-black transition-all duration-300 ease-in-out p-2 rounded-full' onClick={() => props.delteTask(props.index)} />
            </div>
        </div>
    )
}

export default Task