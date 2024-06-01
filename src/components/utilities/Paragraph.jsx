import React from 'react'

const Paragraph = ({text, className, onClick, children}) => {
  return (
    <p className={className} onClick={onClick}>{text}{children}</p>
  )
}

export default Paragraph