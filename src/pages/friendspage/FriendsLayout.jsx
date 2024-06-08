import React from 'react'
import Friends from './Friends'
import { Outlet } from 'react-router-dom'

const FriendsLayout = () => {
  return (
    <div className='wrap flex'>
      <Friends />
      <div className='w-[400px]'></div>
      <Outlet />
    </div>
  )
}

export default FriendsLayout