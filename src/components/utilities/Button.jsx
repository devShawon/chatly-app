import React from 'react'

const Button = ({text, className, onClick, children}) => {
  return (
    <button className={className} onClick={onClick}>{text}{children}</button>
  )
}

export default Button