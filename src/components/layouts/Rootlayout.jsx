import React from 'react'
import Navbar from './Navbar'
import { Outlet } from 'react-router-dom'

const Rootlayout = () => {
  return (
    <>
      <section className='bg-dust-white'>
        <div className='wrap flex justify-between'>        
          <Navbar />
          <Outlet />
        </div>
      </section> 
    </> 
  )
}

export default Rootlayout