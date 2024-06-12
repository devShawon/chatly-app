import React from 'react'
import Navbar from './Navbar'
import { Outlet } from 'react-router-dom'

const Rootlayout = () => {
  return (
    <>
      <div className='wrap flex'>        
        <Navbar />
        <div className='w-full flex justify-end'>
          <Outlet />
        </div>
      </div>
    </> 
  )
}

export default Rootlayout