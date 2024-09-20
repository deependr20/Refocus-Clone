import React from 'react'
import Product from './Product'

function Products() {
     
    const data=[
        {title:"ARQITEL", discription : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore illo sed cum id officiis. Officiis sed, temporibus fuga nemo optio, dolore, molestiae autem voluptatibus!", live:true, case :false  },
        {title:"TTR", discription : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore illo sed cum id officiis. Officiis sed, temporibus fuga nemo optio, dolore, molestiae autem voluptatibus!", live:true, case :true  },
        {title:"YIR 2022", discription : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore illo sed cum id officiis. Officiis sed, temporibus fuga nemo optio, dolore, molestiae autem voluptatibus!", live:true, case :false  },
        {title:"YAHOO!", discription : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore illo sed cum id officiis. Officiis sed, temporibus fuga nemo optio, dolore, molestiae autem voluptatibus!", live:true, case :true },  
        {title:"RAINFALL", discription : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore illo sed cum id officiis. Officiis sed, temporibus fuga nemo optio, dolore, molestiae autem voluptatibus!", live:true, case :false  } 
    ]
  return (
    <div  className=' relative'>
        {data.map((item,index)=><Product key={index} val={item}/>)}
        <div className='absolute top-0 w-full h-full pointer-events-none'>
            <div className='absolute bg-red-200 h-[20rem] w-[22rem] -translate-x-[50%] left-[34%] '>
                <div className='absolute bg-red-200  w-full h-full '></div>
                <div className='absolute bg-red-200  w-full h-full '></div>
                <div className='absolute bg-yellow-600   w-full h-full '></div>
                <div className='absolute bg-yellow-600   w-full h-full '></div>
            </div>
        </div>
    </div>
  )
}

export default Products