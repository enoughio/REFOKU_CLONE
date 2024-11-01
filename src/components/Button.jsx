import React from 'react';
import { BsArrowReturnRight } from "react-icons/bs";


const Button = () => {
  return (
    <div className='w-40 bg-white rounded-full text-black px-4 py-2 flex justify-between items-center  '>
        <span className='font-medium'>Get Started</span>
        <BsArrowReturnRight />
    </div>
  )
}

export default Button