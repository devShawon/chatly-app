import React from 'react'
import { Link } from 'react-router-dom'

const Linking = ({text, className, onClick}) => {
  return (
    <Link className={className} onClick={onClick}>{text}</Link>
  )
}

export default Linking