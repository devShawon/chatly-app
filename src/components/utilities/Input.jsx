import React from 'react'

const Input = ({type, className, text, placeholder, onChange, value, name, id}) => {
  return (
    <input type={type} className={className} text={text} placeholder={placeholder} onChange={onChange} value={value} name={name} id={id}  />
  )
}

export default Input