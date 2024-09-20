import React from 'react'
import Navbar from './component/Navbar'
import Work from './component/Work'
import Stripes from './component/Stripes'
import Products from './component/Products'
import Marqees from './component/Marqees'
import Cards from './component/Cards'
import Footer from './component/Footer'
import LocomotiveScroll from 'locomotive-scroll';

function App() {
const locomotiveScroll = new LocomotiveScroll();

  return (
    <div className='bg-black  h-full w-full font-["satoshi"]'>
        <Navbar />
        <Work/>
        <Stripes />
        <Products/>
        <Marqees/>
        <Cards />
        <Footer/>
    </div>
  )
}

export default App