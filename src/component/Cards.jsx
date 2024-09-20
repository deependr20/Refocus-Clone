import React from 'react'
import Card from './Card'

function Cards() {
  return (
    <div className=' w-full py-20 lg:pb-40'>
      <div className='max-w-screen-lg mx-auto text-white flex flex-col md:flex-row px-8 md:px-3 pt-12 gap-2'>
        <Card width={"basis-[35%]"} start={false} para={true} margin ={"mt-0"} hover={""} /> 
        <Card width={"basis-[65%]"} start={true} para={false} margin={"mt-5"} hover={"hover:bg-blue-800" } padding={"pt-4"}/> 
      </div>
    </div>
  )
}

export default Cards