import React from 'react'
import Tshirt from './Tshirt/Tshirt'
import Orderhistory from './orderhistory/order-history'
import UniverseBackground from './components/Background'

function page() {
  return (
    <>
     <UniverseBackground />
      <div className='relative z-10 overflow-auto max-w-[1900px] h-full m-auto'>
        <Tshirt/> 
        <Orderhistory/>
      </div>
    </>
  )
}

export default page