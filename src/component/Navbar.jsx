import React from 'react'
import Button from './Button'
function Navbar() {
  return (
    <div className='max-w-screen-lg mb-8 items-center justify-between px-5 lg:px-0  mx-auto py-6 flex border-b-2 border-zinc-700'>
      <div className="links flex gap-12  items-center">
        <img className='w-[6rem] mr-8' src="https://cdn.prod.website-files.com/6334198f239547d0f9cd84b3/63349803431f1562dccf1802_refokus%20logo.svg" alt="" />
            {["Home", "Work", "About", "", "News"].map((item,index)=>
            <a className='text-sm md:flex hidden  hover:text-slate-400 text-slate-300 font-medium items-center gap-1' href='#' key={item}>
              {item.length==0 ? (<span className='w-[1.5px] h-10 bg-slate-800 '></span>):""}
              {index===1 ? (<span style={{boxShadow:"0 0 0.80em #00FF19"}} className='inline-block  w-[4px] h-[4px] rounded-full items-center bg-green-500'></span>): null}
              {item}
            </a>)}
        </div>
            <Button title="Start a Project" />
    </div>
  )
}

export default Navbar