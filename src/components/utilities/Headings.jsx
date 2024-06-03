import React from 'react'

const Headings = ({Heading, text,onClick, className}) => {
  return (
    <Heading onClick={onClick} className={className}>{text}</Heading>
  )
}

export default Headings