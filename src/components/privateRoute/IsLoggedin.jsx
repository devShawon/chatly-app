import React from 'react'
import { Outlet } from 'react-router-dom'
import { useSelector } from 'react-redux'
import Login from '../../pages/auth/Login'

const IsLoggedin = () => {

  const userdata = useSelector((state) => state.userdata.value)

  return userdata ? <Outlet /> : <Login />
}

export default IsLoggedin