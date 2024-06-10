import React from 'react'
import { Outlet } from 'react-router-dom'

import FriendsBar from '../../components/friends/FriendsBar'

const Friends = () => {
  return (
    <>
        <div className='wrap flex'>
            <FriendsBar />
            <Outlet />
        </div>
    </>
  )
}

export default Friends