import React from 'react'
import Navbar from './Navbar'
import { Outlet } from 'react-router-dom'

const Rootlayout = () => {
  return (
    <>
      <section className='bg-dust-white'>
        <div className='wrap'>        
          <div className='flex'>
            <div className='fixed'>
            <Navbar />
            </div>
            <Outlet />
          </div>
        </div>
      </section>
    </> 
  )
}

export default Rootlayout