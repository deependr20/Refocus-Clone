import React from 'react'
import Button from './Button'

function Product({val ,title}) {
  return (
    <div className='text-white w-full h-[23rem]  md:px-16'>
        <div className='conatiner px- mx-auto text-center md:text-start relative flex md:justify-between items-center justify-center  md:flex-row flex-col '>
            <h1 className='text-5xl  font-semibold mb-2 '>{val.title}</h1>
            <div className=' md:w-1/2 w-full flex flex-col items-center'>
                <p className='mb-6 leading-5'>{val.discription}</p>
                <div className='flex md:flex-row flex-col gap-3 items-center'>
                    {val.live ? <Button title ="Get Started"/> : ""}
                   {val.live&& val.case? <Button title ="Case Study"/> : "" }
                </div>
            </div>
        </div>
    </div>
  )
}

export default Product