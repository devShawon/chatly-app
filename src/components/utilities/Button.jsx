import React from 'react'

const Button = ({text, className, type, onClick, children}) => {
  return (
    <button className={className} type={type} onClick={onClick}>{text}{children}</button>
  )
}

export default Button