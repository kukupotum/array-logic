import React from 'react'


const Component = (props) => {
  const {label, value, handleChange, handleClick, result} = props

  
  return (
    <div>
      <div>
        <div>input {label}</div>
        <input value={value} onChange={handleChange} />
        <button onClick={handleClick}>OK</button>
        <div>result : {result}</div>
      </div>
    </div>
  )
}

export {Component};
