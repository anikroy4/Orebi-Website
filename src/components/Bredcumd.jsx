import React from 'react'
import { FaAngleRight } from "react-icons/fa6";

const Bredcumd = () => {



    return (
        <div className='py-32'>
            <h2 className='text-6xl font-bold first-letter:uppercase'>{window.location.pathname.split("/")[1]}</h2>
            <p className='items-center flex'>Home <FaAngleRight /> <p className='first-letter:uppercase'>{window.location.pathname.split("/")[1]}</p> </p>
        </div>
    )
}

export default Bredcumd