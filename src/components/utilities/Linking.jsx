import React from 'react'
import { Link } from 'react-router-dom'

const Linking = ({to, text, className, onClick, children}) => {
  return (
    <Link to={to} className={className} onClick={onClick}>{text}{children}</Link>
  )
}

export default Linking